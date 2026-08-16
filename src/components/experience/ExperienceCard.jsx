import { motion } from 'framer-motion'

const ExperienceCard = ({ experience: exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-brand-navy rounded-xl p-5 md:p-6 shadow-md border ${
        exp.featured ? 'border-brand-magenta/30 ring-2 ring-brand-magenta/10' : 'border-brand-border'
      } hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{exp.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-brand-text mb-1">
            {exp.role || exp.program}
          </h3>
          <p className="text-brand-pink font-medium mb-2">{exp.company}</p>
          <div className="flex flex-wrap gap-2 text-sm text-brand-muted-text" style={{opacity: 0.7}} mb-3>
            <span>📅 {exp.duration || `Completed ${exp.completionDate}`}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(exp.technologies || exp.focus || []).slice(0, 5).map((tech, i) => (
              <span key={i} className="px-2 py-1 bg-brand-navy text-brand-muted-text rounded text-xs border border-brand-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard
