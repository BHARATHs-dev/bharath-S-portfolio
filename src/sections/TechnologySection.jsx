import { skillCategories } from '../data/skills'
import SkillCard from '../components/skills/SkillCard'
import TechnologyCloud from '../components/skills/TechnologyCloud'
import { motion } from 'framer-motion'

const TechnologySection = () => {
  return (
    <section id="skills" className="scroll-mt-20 bg-brand-bg py-12 md:py-16">
      <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <p className="section-label">My Tech Stack</p>
          <h2 className="section-title">
            Technical Skills
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </motion.div>

        <div className="mb-16">
          <TechnologyCloud categories={skillCategories} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologySection
