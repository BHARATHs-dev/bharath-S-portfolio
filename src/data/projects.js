export const projects = [
  {
    id: 1,
    title: "AI Green Campus Monitoring",
    description: "An AI and GIS-based environmental monitoring platform for analyzing campus vegetation and above-ground biomass.",
    detailedDescription: "This project explores combining AI, GIS, satellite imagery, and field measurements to monitor campus vegetation and estimate environmental indicators. The platform addresses the challenge of manually monitoring and analyzing campus vegetation data by providing an automated, data-driven solution.",
    problem: "Campus vegetation data can be difficult to monitor and analyze manually.",
    solution: "The project combines AI + GIS + satellite imagery + field measurements to monitor vegetation and estimate environmental indicators.",
    technologies: ["AI", "GIS", "Satellite Imagery", "Field Measurements", "Data Analysis"],
    highlights: [
      "AI and GIS-based environmental monitoring platform",
      "Analyzes campus vegetation and above-ground biomass",
      "Combines satellite imagery with field data",
      "Vegetation data separated into dedicated collection",
      "Field data management and integration"
    ],
    image: new URL('../assets/images/AI Green Campus Monitoring.jpg', import.meta.url).href,
    github: 'https://github.com/yourusername/ai-green-campus',
    demo: 'https://ai-green-campus-demo.vercel.app',
    featured: true,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Hospital Billing System",
    description: "A comprehensive billing management system for hospitals with MERN stack implementation.",
    detailedDescription: "A full-featured hospital billing system built with the MERN stack, handling patient billing, invoice generation, and payment tracking.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    image: new URL('../assets/images/Hospital Billing System.jpg', import.meta.url).href,
    github: 'https://github.com/yourusername/hospital-billing',
    demo: 'https://hospital-billing-demo.vercel.app',
    featured: true,
    category: "Full Stack"
  },
  {
    id: 3,
    title: "Agri Nexus",
    description: "An agricultural platform connecting farmers with modern farming solutions and market insights.",
    detailedDescription: "A comprehensive agricultural platform designed to help farmers access modern farming techniques, market prices, and connect with agricultural experts.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: new URL('../assets/images/agri nexus.jpg', import.meta.url).href,
    github: 'https://github.com/yourusername/agri-nexus',
    demo: 'https://agri-nexus-demo.vercel.app',
    featured: false,
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Mini Amazon",
    description: "A simplified e-commerce platform inspired by Amazon with core shopping features.",
    detailedDescription: "A mini e-commerce application featuring product browsing, cart management, and a streamlined checkout process.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: new URL('../assets/images/Mini Amazon.png', import.meta.url).href,
    github: 'https://github.com/yourusername/mini-amazon',
    demo: 'https://mini-amazon-demo.vercel.app',
    featured: false,
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Library Management System",
    description: "A digital library management system for tracking books, members, and transactions.",
    detailedDescription: "A complete library management solution with book inventory, member management, and borrowing/returning workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: new URL('../assets/images/Library Management System.jpg', import.meta.url).href,
    github: 'https://github.com/yourusername/library-management',
    demo: 'https://library-management-demo.vercel.app',
    featured: false,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Grocery Shop",
    description: "A local grocery shop management system with inventory and billing features.",
    detailedDescription: "A practical management tool for grocery stores to handle inventory, billing, and daily operations efficiently.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    image: new URL('../assets/images/Grocery Shop.jpg', import.meta.url).href,
    github: 'https://github.com/yourusername/grocery-shop',
    demo: 'https://grocery-shop-demo.vercel.app',
    featured: false,
    category: "Full Stack"
  }
]
