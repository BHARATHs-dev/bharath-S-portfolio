import './config.js'

import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))
app.use(express.json({ limit: '1kb' }))

app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
