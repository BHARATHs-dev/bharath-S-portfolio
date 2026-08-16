import { motion } from 'framer-motion'
import { GraduationCap, School } from 'lucide-react'
import { education } from '../../data/education'

const Education = () => {
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
          <p className="section-label">Education</p>
          <h2 className="section-title">
            Academic Background
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
            My academic journey and educational background.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-8 hover:border-brand-orange transition-all duration-300"
            >
              {edu.type === 'undergraduate' ? (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-brand-orange" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-brand-text">
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <span className="px-3 py-1 bg-brand-bg text-brand-orange rounded-full text-sm font-medium border border-brand-border">
                          {edu.field}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-brand-secondary-text font-medium mb-1" style={{opacity: 0.85}}>
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-brand-secondary-text" style={{opacity: 0.7}}>
                      <span className="flex items-center gap-1">
                        📅 {edu.duration}
                      </span>
                      {edu.cgpa && (
                        <span className="flex items-center gap-1">
                          📊 CGPA: {edu.cgpa}
                        </span>
                      )}
                      {edu.status && (
                        <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange rounded-lg text-xs font-medium border border-brand-orange/20">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <School className="text-brand-orange" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-text mb-2">
                      {edu.institution}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {edu.details.map((detail, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 bg-brand-bg rounded-lg border border-brand-border"
                        >
                          <span className="font-semibold text-brand-text">
                            {detail.level}
                          </span>
                          <span className="text-brand-muted-text" style={{opacity: 0.6}}>—</span>
                          <span className="text-brand-muted-text">{detail.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
