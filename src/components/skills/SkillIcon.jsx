import React from 'react'

const SkillIcon = ({ name, size = 20, className = '' }) => {
  const iconMap = {
    'JavaScript': 'javascript.png',
    'Java': 'java.png',
    'HTML': 'html.png',
    'CSS': 'css-3.png',
    'React.js': 'react js.png',
    'Tailwind CSS': 'tailwind css.png',
    'Node.js': 'node js.png',
    'Express.js': 'express js.png',
    'MongoDB': 'mongo db.png',
    'Mongoose': 'Mongoose.jpg',
    'JWT Authentication': 'jwt authentication.png',
    'Nodemailer': 'Nodemailer.png',
    'REST APIs': 'rest api.png',
    'Framer Motion': 'Framer Motion.avif',
    'Vite': 'Vite.svg',
    'Git': 'git.png',
    'GitHub': 'github .png',
    'Postman': 'Postman.png',
    'VS Code': 'VS Code.png',
    'MongoDB Compass': 'mongo db.png',
  }

  const iconFile = iconMap[name]

  if (iconFile) {
    return (
      <img
        src={new URL(`../../assets/icons/${iconFile}`, import.meta.url).href}
        alt={name}
        width={size}
        height={size}
        className={className}
        style={{ objectFit: 'contain' }}
      />
    )
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="3" fill="#333"/>
      <path d="M8 8h8v2H8zM8 12h8v2H8zM8 16h5v2H8z" fill="#666"/>
    </svg>
  )
}

export default SkillIcon
