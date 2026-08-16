import { motion } from 'framer-motion'
import { personal } from '../../data/personal'
import { socialLinks } from '../../data/socialLinks'
import { Mail, MapPin, Phone, Send, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)
  const [fieldErrors, setFieldErrors] = useState({})

  useEffect(() => {
    let timeoutId
    if (submitted || error) {
      timeoutId = setTimeout(() => {
        setSubmitted(false)
        setError(false)
      }, 7000)
    }
    return () => clearTimeout(timeoutId)
  }, [submitted, error])

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return

    if (!validateForm()) return

    setSending(true)
    setError(false)
    setSubmitted(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setFieldErrors({})
      } else {
        const data = await response.json()
        setError(data.message || 'Failed to send message')
      }
    } catch (err) {
      setError('Unable to send your message. Please try again or contact me directly via email.')
    } finally {
      setSending(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
    if (fieldErrors[e.target.id]) {
      setFieldErrors({
        ...fieldErrors,
        [e.target.id]: null
      })
    }
  }

  return (
     <div className="py-16 bg-brand-bg">
       <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Contact Me
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
           <div className="grid md:grid-cols-2 gap-6">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="space-y-4"
            >
              <div className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-orange transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-text mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {personal.email && (
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-3 text-brand-secondary-text hover:text-brand-orange transition-colors"
                    >
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange">
                        <Mail size={20} />
                      </div>
                      <span>{personal.email}</span>
                    </a>
                  )}
                  {personal.phone && (
                    <a
                      href={`tel:${personal.phone}`}
                      className="flex items-center gap-3 text-brand-secondary-text hover:text-brand-orange transition-colors"
                    >
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange">
                        <Phone size={20} />
                      </div>
                      <span>{personal.phone}</span>
                    </a>
                  )}
                  {personal.location && (
                    <div className="flex items-center gap-3 text-brand-secondary-text">
                      <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center text-brand-orange">
                        <MapPin size={20} />
                      </div>
                      <span>{personal.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-orange transition-all duration-300">
                <h3 className="text-xl font-bold text-brand-text mb-4">
                  Social Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                        link.color === 'primary'
                          ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/20 hover:bg-brand-orange/20'
                          : link.color === 'accent'
                          ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/20 hover:bg-brand-orange/20'
                          : 'bg-brand-bg text-brand-secondary-text border-brand-border hover:border-brand-orange hover:text-brand-orange'
                      }`}
                    >
                      {link.icon === 'github' && <GitHubIcon />}
                      {link.icon === 'linkedin' && <LinkedInIcon />}
                      {link.icon === 'mail' && <Mail size={18} />}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-brand-card border border-brand-border rounded-2xl p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-orange mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border bg-brand-bg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                      fieldErrors.name ? 'border-red-500' : 'border-brand-border'
                    }`}
                    placeholder="Your name"
                  />
                  {fieldErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-orange mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border bg-brand-bg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent ${
                      fieldErrors.email ? 'border-red-500' : 'border-brand-border'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-orange mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border bg-brand-bg text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none ${
                      fieldErrors.message ? 'border-red-500' : 'border-brand-border'
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                    <p className="text-red-500 font-semibold mb-1">⚠ Unable to send your message.</p>
                    <p className="text-brand-secondary-text text-sm">
                      Please try again or contact me directly via email.
                    </p>
                  </div>
                )}

                {submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                    <p className="text-green-500 font-semibold mb-1">✓ Message sent successfully!</p>
                    <p className="text-brand-secondary-text text-sm">
                      Thank you for reaching out. <br />
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
