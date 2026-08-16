import { motion } from 'framer-motion'
import { Briefcase, Code2, Users, Calendar, ExternalLink } from 'lucide-react'
import { experience } from '../../data/experience'

const Experience = () => {
  const getDuration = (item) => {
    if (item.duration) {
      if (typeof item.duration === 'string') return item.duration
      if (item.duration.start && item.duration.end) {
        return `${item.duration.start} – ${item.duration.end}`
      }
    }
    if (item.completionDate) return `Completed ${item.completionDate}`
    return "Dates to be confirmed"
  }

  return (
     <div className="py-16 bg-brand-bg">
       <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <p className="section-label">Internships & Experience</p>
          <h2 className="section-title">
            Professional Journey
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
            My professional journey through internships and practical development programs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-border"></div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-5 w-6 h-6 bg-brand-bg border-2 border-brand-orange rounded-full flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>

                  <div className={`bg-brand-card rounded-2xl p-6 shadow-sm border ${
                    item.featured ? 'border-brand-orange/30 ring-2 ring-brand-orange/10' : 'border-brand-border'
                  }`}>
                    {item.type === 'internship' ? (
                      <>
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-brand-text">
                              {item.role}
                            </h3>
                            <p className="text-brand-orange font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-bg text-brand-secondary-text rounded-full text-sm border border-brand-border">
                            <Calendar size={14} />
                            {getDuration(item)}
                          </span>
                        </div>

                        {item.project && (
                          <div className="mb-4">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-lg text-sm font-medium border border-brand-orange/20">
                              <Code2 size={16} />
                              {item.project}
                            </span>
                          </div>
                        )}

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-brand-muted-text mb-2 uppercase tracking-wider">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-lg text-sm border border-brand-orange/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-brand-muted-text mb-2 uppercase tracking-wider">
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-brand-secondary-text" style={{opacity: 0.8}}>
                                <span className="text-brand-orange mt-1">•</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {item.repositories && (
                          <div className="mt-4 pt-4 border-t border-brand-border">
                            <h4 className="text-sm font-semibold text-brand-muted-text mb-2">
                              Repositories
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(item.repositories).map(([type, name]) => (
                                <span
                                  key={type}
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-brand-bg text-brand-secondary-text rounded-lg text-sm border border-brand-border"
                                >
                                  <ExternalLink size={12} />
                                  {name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-brand-text">
                              {item.program}
                            </h3>
                            <p className="text-brand-orange font-medium">
                              {item.company}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-bg text-brand-secondary-text rounded-full text-sm border border-brand-border">
                            <Calendar size={14} />
                            {getDuration(item)}
                          </span>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-brand-muted-text mb-2 uppercase tracking-wider">
                            Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.focus.map((area, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-lg text-sm border border-brand-orange/20"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
