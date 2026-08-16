import { motion } from 'framer-motion'
import { Award, BookOpen, CheckCircle2, FileDown } from 'lucide-react'
import { certifications } from '../../data/certifications'

const Certifications = () => {
  const getTypeIcon = (type) => {
    return type === 'training' ? BookOpen : Award
  }

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
          <p className="section-label">Certifications & Training</p>
          <h2 className="section-title">
            Credentials
          </h2>
          <p className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
            Professional certifications and training programs that have strengthened my technical foundation.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const TypeIcon = getTypeIcon(cert.type)
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-orange transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                    <TypeIcon size={14} />
                    {cert.type === 'training' ? 'Training' : 'Certification'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-text mb-2 whitespace-pre-line">
                  {cert.title}
                </h3>

                <p className="text-brand-orange font-medium mb-3">
                  {cert.issuer}
                </p>

                {cert.note && (
                  <p className="text-sm text-brand-orange bg-brand-orange/10 rounded-lg px-3 py-2 mb-3 border border-brand-orange/20">
                    {cert.note}
                  </p>
                )}

                {cert.completedDate && (
                  <div className="flex items-center gap-2 text-sm text-brand-secondary-text" style={{opacity: 0.75}}>
                    <CheckCircle2 size={16} className="text-brand-orange" />
                    <span>Completed {cert.completedDate}</span>
                  </div>
                )}

                {cert.file && (
                  <div className="pt-4 border-t border-brand-border">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-brand-bg rounded-lg hover:bg-brand-bright-orange transition-colors text-sm font-medium"
                    >
                      <FileDown size={16} />
                      View Certificate
                    </a>
                  </div>
                )}

                {cert.files && (
                  <div className="pt-4 border-t border-brand-border flex flex-wrap gap-2">
                    {cert.files.map((file, idx) => (
                      <a
                        key={idx}
                        href={file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange text-brand-bg rounded-lg hover:bg-brand-bright-orange transition-colors text-sm font-medium"
                      >
                        <FileDown size={16} />
                        View Certificate
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Certifications
