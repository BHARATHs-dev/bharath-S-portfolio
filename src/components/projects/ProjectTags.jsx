import SkillIcon from '../skills/SkillIcon'

const ProjectTags = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand-navy text-brand-muted-text rounded-md text-xs border border-brand-border"
        >
          <SkillIcon name={tech} size={14} />
          {tech}
        </span>
      ))}
    </div>
  )
}

export default ProjectTags
