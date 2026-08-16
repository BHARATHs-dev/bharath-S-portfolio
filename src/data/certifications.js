export const certifications = [
  {
    id: 1,
    title: "Full Stack Developer Internship",
    issuer: "AmiHive Software Solutions",
    type: "certification",
    completedDate: "July 20, 2026",
    icon: "🎓",
    file: new URL('../assets/images/AmiHive_Internship_Completion_Certificate_BHARATH S  (1) (1).pdf', import.meta.url).href,
    color: "orange"
  },
  {
    id: 2,
    title: "NeuroSpark 1.0 – MERN Stack",
    issuer: "DetQel",
    type: "training",
    completedDate: "July 25, 2025",
    icon: "🚀",
    color: "green",
    file: new URL('../assets/images/detqel internship.pdf', import.meta.url).href,
  },
  {
    id: 3,
    title: "Frontend Web Developer",
    issuer: "Infosys Springboard",
    type: "certification",
    icon: "🏆",
    color: "blue",
    completedDate: "July 30, 2025",
    file: new URL('../assets/images/Front End Web Developer Certification (1).pdf', import.meta.url).href,
  },
  {
    id: 4,
    title: "Programming in Java \nSoftware Testing",
    issuer: "NPTEL",
    type: "certification",
    icon: "📜",
    color: "purple",
    files: [
      new URL('../assets/images/Programming in Java.pdf', import.meta.url).href,
      new URL('../assets/images/Software Testing (1).pdf', import.meta.url).href,
    ],
  }
]
