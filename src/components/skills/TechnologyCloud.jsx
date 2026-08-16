import { motion } from 'framer-motion'
import SkillIcon from './SkillIcon'

const TechnologyCloud = ({ categories }) => {
  const allSkills = categories.flatMap(cat =>
    cat.skills.map(skill => ({ name: skill, category: cat.title, color: cat.color }))
  )

  const rowOne = [...allSkills, ...allSkills]
  const rowTwo = [...allSkills].reverse()

  const SkillPill = ({ skill, index }) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-brand-border bg-brand-card text-brand-secondary-text hover:border-brand-orange hover:text-brand-orange transition-all duration-200 whitespace-nowrap mx-2 cursor-default"
    >
      <SkillIcon name={skill.name} size={18} />
      <span>{skill.name}</span>
    </motion.span>
  )

  return (
    <div className="relative py-10 overflow-hidden space-y-4">
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {rowOne.map((skill, index) => (
          <SkillPill key={`r1-${index}`} skill={skill} index={index} />
        ))}
      </div>
      <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
        {rowTwo.map((skill, index) => (
          <SkillPill key={`r2-${index}`} skill={skill} index={index} />
        ))}
      </div>
    </div>
  )
}

export default TechnologyCloud
