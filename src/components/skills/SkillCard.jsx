import { motion } from 'framer-motion'
import { Code2, Globe, Server, Database, Layers, Toolbox } from 'lucide-react'
import SkillIcon from './SkillIcon'

const iconComponents = {
  Code2,
  Globe,
  Server,
  Database,
  Layers,
  Toolbox,
}

const SkillCard = ({ category, index }) => {
  const CategoryIcon = iconComponents[category.icon] || Toolbox

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-brand-card border border-brand-border rounded-2xl p-5 md:p-6 hover:border-brand-orange transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <CategoryIcon size={24} />
        <h3 className="text-xl font-bold text-brand-text">{category.title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 bg-brand-bg text-brand-secondary-text rounded-lg text-sm font-medium border border-brand-border hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
          >
            <SkillIcon name={skill} size={16} />
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillCard
