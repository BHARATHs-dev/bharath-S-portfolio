import { personal } from '../../data/personal'
import { motion } from 'framer-motion'
import { Target, CheckCircle2, Code2, Globe, Server, Database } from 'lucide-react'

const About = () => {
  const strengths = [
    "Full-stack application development",
    "Frontend UI development",
    "REST API integration",
    "MongoDB-based application development",
    "Authentication implementation",
    "Team coordination",
    "Task assignment and project coordination",
    "Working with real-world business requirements",
    "Learning and implementing new technologies"
  ]

  const featureCards = [
    {
      title: "Full Stack Development",
      description: "End-to-end application development using MERN stack with focus on scalable architecture and clean code.",
      icon: Code2
    },
    {
      title: "Frontend & UI",
      description: "Responsive, intuitive interfaces built with React, Tailwind CSS, and modern frontend tools.",
      icon: Globe
    },
    {
      title: "Backend & APIs",
      description: "Robust server-side logic with Node.js, Express.js, REST APIs, and secure authentication.",
      icon: Server
    },
    {
      title: "Database Design",
      description: "Efficient MongoDB schemas and data modeling for real-world business applications.",
      icon: Database
    }
  ]

   return (
      <div className="py-12 md:py-16 bg-brand-bg">
        <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
           <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div>
                <p className="section-label">About Me</p>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-text leading-tight mb-6">
                  {personal.about.heading}
                </h2>
              </div>
              <div className="text-brand-secondary-text leading-relaxed whitespace-pre-line text-lg" style={{opacity: 0.85}}>
                {personal.about.summary}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-orange transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange/20 transition-colors">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-2">
                    {card.title}
                  </h3>
                  <p className="text-brand-secondary-text text-sm leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
               className="mt-8 md:mt-12 bg-brand-card border border-brand-border rounded-2xl p-6 md:p-10"
            >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange flex-shrink-0">
                <Target size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">Career Goal</h3>
                <p className="text-brand-secondary-text text-lg leading-relaxed italic">
                  "{personal.about.goal}"
                </p>
              </div>
            </div>

             <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
                  <Target size={20} className="text-brand-orange" />
                  Career Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personal.about.careerInterests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-brand-bg text-brand-secondary-text rounded-full text-sm font-medium border border-brand-border"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-brand-orange" />
                  Key Strengths
                </h3>
                <ul className="space-y-2">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-brand-orange mt-1 flex-shrink-0">•</span>
                      <span className="text-brand-secondary-text">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
