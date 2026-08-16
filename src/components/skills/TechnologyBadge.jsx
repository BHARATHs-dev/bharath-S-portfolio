import SkillIcon from './SkillIcon'

import SkillIcon from './SkillIcon'

const TechnologyBadge = ({ name, color = 'orange' }) => {
  const colorClasses = {
    blue: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    green: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    purple: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    pink: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    slate: 'bg-brand-border/10 text-brand-secondary-text border-brand-border',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border ${colorClasses[color] || colorClasses.orange}`}
    >
      <SkillIcon name={name} size={16} />
      {name}
    </span>
  )
}

export default TechnologyBadge
