import express from 'express'
import nodemailer from 'nodemailer'

const router = express.Router()

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const TO_EMAIL = process.env.TO_EMAIL || EMAIL_USER
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
})

const escapeHtml = (str) => {
  if (!str || typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const rateLimitStore = new Map()

const rateLimit = (windowMs = 60000, max = 5) => {
  return (req, res, next) => {
    const key = req.ip || 'unknown'
    const now = Date.now()
    const entry = rateLimitStore.get(key)

    if (entry && now < entry.resetTime) {
      if (entry.count >= max) {
        return res.status(429).json({ message: 'Too many requests. Please try again later.' })
      }
      entry.count++
    } else {
      rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    }

    next()
  }
}

const buildMailContent = (safeName, safeEmail, safeMessage) => ({
  text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
  html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #ff6a00; padding-bottom: 10px;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        `,
})

const sendViaSendGrid = async (name, email, message) => {
  const { text, html } = buildMailContent(
    escapeHtml(name),
    escapeHtml(email),
    escapeHtml(message),
  )
  const subject = `Portfolio Contact from ${escapeHtml(name)}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 10000)
  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: TO_EMAIL }] }],
        from: { email: EMAIL_USER },
        subject,
        content: [
          { type: 'text/plain', value: text },
          { type: 'text/html', value: html },
        ],
      }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => '')
      throw new Error(`SendGrid API ${res.status}: ${detail}`)
    }
  } finally {
    clearTimeout(timer)
  }
}

const sendViaSmtp = (name, email, message) => {
  const { text, html } = buildMailContent(
    escapeHtml(name),
    escapeHtml(email),
    escapeHtml(message),
  )
  return transporter.sendMail({
    from: EMAIL_USER,
    to: TO_EMAIL,
    subject: `Portfolio Contact from ${escapeHtml(name)}`,
    text,
    html,
  })
}

router.post(
  '/',
  rateLimit(60000, 5),
  async (req, res) => {
    try {
      const { name, email, message } = req.body

      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' })
      }

      if (!validateEmail(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address' })
      }

      if (message.length < 10) {
        return res.status(400).json({ message: 'Message must be at least 10 characters' })
      }

      if (name.length > 100 || message.length > 2000) {
        return res.status(400).json({ message: 'Input too long' })
      }

      if (SENDGRID_API_KEY) {
        await sendViaSendGrid(name, email, message)
      } else {
        await sendViaSmtp(name, email, message)
      }

      res.status(200).json({ message: 'Message sent successfully' })
    } catch (error) {
      console.error('Contact form error:', {
        message: error.message,
        code: error.code,
        command: error.command,
        responseCode: error.responseCode,
        response: error.response,
      })
      res.status(500).json({
        message: 'Failed to send message. Please try again later.',
      })
    }
  }
)

export default router
