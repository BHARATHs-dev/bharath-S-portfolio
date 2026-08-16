import { motion } from 'framer-motion'

const CertificationCard = ({ certification: cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-brand-navy rounded-xl p-6 shadow-md border border-brand-border hover:shadow-xl hover:border-brand-magenta/20 transition-shadow"
    >
      <div className="text-3xl mb-3">{cert.icon}</div>
      <h3 className="text-lg font-bold text-brand-text mb-1">{cert.title}</h3>
      <p className="text-brand-pink font-medium mb-2">{cert.issuer}</p>
      {cert.note && (
        <p className="text-sm text-brand-magenta bg-brand-magenta/10 rounded-lg px-3 py-2 border border-brand-magenta/20">
          {cert.note}
        </p>
      )}
    </motion.div>
  )
}

export default CertificationCard
