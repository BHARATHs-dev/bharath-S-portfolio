import { ExternalLink } from 'lucide-react'

const ProjectLinks = ({ github, demo }) => {
  return (
    <div className="flex gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-navy text-brand-muted-text rounded-lg text-sm border border-brand-border hover:bg-brand-border transition-colors"
        >
          <ExternalLink size={16} />
          GitHub
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-magenta/10 text-brand-pink rounded-lg text-sm border border-brand-magenta/20 hover:bg-brand-magenta/20 transition-colors"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}
    </div>
  )
}

export default ProjectLinks
