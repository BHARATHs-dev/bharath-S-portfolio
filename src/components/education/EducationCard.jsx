import { motion } from 'framer-motion'

const EducationCard = ({ education: edu, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-brand-navy rounded-xl p-5 md:p-6 shadow-md border border-brand-border hover:shadow-xl hover:border-brand-magenta/20 transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{edu.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-brand-pink mb-1">
            {edu.degree || edu.institution}
          </h3>
          {edu.field && (
            <p className="text-brand-magenta font-medium mb-2">{edu.field}</p>
          )}
          <p className="text-brand-muted-text mb-3">{edu.institution}</p>
          <div className="flex flex-wrap gap-2 text-sm text-brand-muted-text" style={{opacity: 0.75}}>
            <span>📅 {edu.duration}</span>
            {edu.cgpa && <span>📊 {edu.cgpa}</span>}
            {edu.status && <span className="text-brand-pink">{edu.status}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default EducationCard
