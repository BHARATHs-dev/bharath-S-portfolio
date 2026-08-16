import { personal } from '../../data/personal'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,106,0,0.12),transparent_35%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,106,0,0.06),transparent_30%)]"></div>

      <div className="mx-auto w-full py-16 relative z-10 px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4"
            >
              {personal.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.2] tracking-tight whitespace-pre-line"
            >
              {personal.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-brand-secondary-text max-w-lg leading-relaxed"
            >
              {personal.supportingText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-nowrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-brand-bg rounded-lg hover:bg-brand-bright-orange transition-colors font-medium shadow-lg shadow-brand-orange/25 text-sm md:text-base"
              >
                {personal.cta.projects}
                <ArrowRight size={18} />
              </a>
              {personal.resume && (
                <a
                  href={personal.resume}
                  download="Bharath_S_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-brand-secondary-text border border-brand-border rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors font-medium text-sm md:text-base"
                >
                  <Download size={18} />
                  {personal.cta.resume}
                </a>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-brand-orange/15 rounded-full blur-[100px]"></div>
              <div className="relative w-full aspect-square rounded-full border-2 border-brand-border overflow-hidden shadow-2xl">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-brand-orange/20"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
