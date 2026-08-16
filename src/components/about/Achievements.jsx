import { motion } from 'framer-motion'
import { Trophy, Users, Rocket, Briefcase, Sprout } from 'lucide-react'
import { achievements } from '../../data/achievements'

const iconMap = {
  Trophy: Trophy,
  Users: Users,
  Rocket: Rocket,
  Briefcase: Briefcase,
  Sprout: Sprout,
}

const Achievements = () => {
  return (
     <div className="py-12 md:py-16">
       <div className="mx-auto w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
           className="text-center mb-10"
        >
          <p className="section-label">Achievements</p>
          <h2 className="section-title">
            Milestones
          </h2>
          <p className="section-subtitle">
            Key milestones and accomplishments throughout my journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 md:p-6 rounded-2xl border border-brand-border bg-brand-card hover:border-brand-orange transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-brand-orange">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-brand-secondary-text leading-relaxed" style={{opacity: 0.85}}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Achievements
