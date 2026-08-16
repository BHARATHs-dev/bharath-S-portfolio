export const skills = {
  programming: [
    "JavaScript",
    "Java"
  ],
  frontend: [
    "HTML",
    "CSS",
    "React.js",
    "Tailwind CSS"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Nodemailer"
  ],
  database: [
    "MongoDB",
    "Mongoose"
  ],
  libraries: [
    "Framer Motion",
    "Vite"
  ],
  tools: [
    "Git",
    "GitHub",
    "Postman",
    "VS Code",
    "MongoDB Compass"
  ]
}

export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    icon: 'Code2',
    skills: skills.programming,
    color: 'blue'
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Globe',
    skills: skills.frontend,
    color: 'green'
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: skills.backend,
    color: 'purple'
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: skills.database,
    color: 'orange'
  },
  {
    id: 'libraries',
    title: 'Libraries / Frameworks',
    icon: 'Layers',
    skills: skills.libraries,
    color: 'pink'
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'Toolbox',
    skills: skills.tools,
    color: 'slate'
  }
]
