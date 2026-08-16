import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { useState } from 'react'

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
     <div className="py-16">
       <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <p className="section-label">Featured Projects</p>
          <h2 className="section-title">
            My Work
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto" style={{opacity: 0.75}}>
            A selection of projects showcasing my full-stack development skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default ProjectSection
