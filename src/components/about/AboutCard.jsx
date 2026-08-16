import { motion } from 'framer-motion'

const AboutCard = ({ title, children, icon: Icon, color = "magenta" }) => {
  const colorClasses = {
    magenta: "text-brand-magenta bg-brand-magenta/10",
    pink: "text-brand-pink bg-brand-pink/10",
    accent: "text-brand-accent bg-brand-accent/10",
    navy: "text-brand-text bg-brand-navy/10",
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-brand-navy rounded-2xl p-6 shadow-lg border border-brand-border"
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClasses[color] || colorClasses.magenta}`}>
          <Icon size={24} />
        </div>
      )}
      <h3 className="text-xl font-bold text-brand-text mb-3">{title}</h3>
      <div className="text-brand-muted-text" style={{opacity: 0.8}}>{children}</div>
    </motion.div>
  )
}

export default AboutCard
