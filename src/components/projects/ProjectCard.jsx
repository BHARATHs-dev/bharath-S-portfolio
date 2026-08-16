import { motion } from 'framer-motion'

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-orange hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      style={{ boxShadow: '0 0 0 0 rgba(255,106,0,0)' }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,106,0,0.08)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(255,106,0,0)'}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-brand-orange text-brand-bg text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-brand-card/90 backdrop-blur-sm text-brand-secondary-text text-xs font-medium rounded-full border border-brand-border">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-orange transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-secondary-text text-sm mb-4 line-clamp-2" style={{opacity: 0.75}}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-brand-bg text-brand-muted-text rounded-md text-xs border border-brand-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-brand-bg text-brand-muted-text rounded-md text-xs border border-brand-border">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
