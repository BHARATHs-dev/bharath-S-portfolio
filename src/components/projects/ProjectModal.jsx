import { motion } from 'framer-motion'
import { X, ExternalLink, Tag } from 'lucide-react'
import SkillIcon from '../skills/SkillIcon'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm" onClick={onClose}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-brand-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-brand-border"
      >
        <div className="sticky top-0 bg-brand-card border-b border-brand-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-brand-text">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-border rounded-lg transition-colors text-brand-secondary-text"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-5 md:p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />

          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium mb-4 border border-brand-orange/20">
              {project.category}
            </span>
            <p className="text-brand-secondary-text text-lg leading-relaxed" style={{opacity: 0.85}}>
              {project.detailedDescription || project.description}
            </p>
          </div>

          {project.problem && project.solution && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4">
                <h3 className="font-semibold text-brand-orange mb-2">Problem</h3>
                <p className="text-brand-secondary-text text-sm" style={{opacity: 0.8}}>{project.problem}</p>
              </div>
              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4">
                <h3 className="font-semibold text-brand-orange mb-2">Solution</h3>
                <p className="text-brand-secondary-text text-sm" style={{opacity: 0.8}}>{project.solution}</p>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-brand-text mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-bg text-brand-secondary-text rounded-lg text-sm border border-brand-border"
                >
                  <SkillIcon name={tech} size={16} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.highlights && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-brand-text mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-brand-secondary-text" style={{opacity: 0.85}}>
                    <span className="text-brand-orange mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-brand-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-brand-bg rounded-lg hover:bg-brand-bright-orange transition-colors"
              >
                <ExternalLink size={18} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-bright-orange text-brand-bg rounded-lg hover:bg-brand-orange transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal
