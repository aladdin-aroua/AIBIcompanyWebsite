'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  // Container and item animations for staggered transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Top Decorative Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg className="w-full h-16" fill="currentColor" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L80,80C160,96,320,128,480,154.7C640,181,800,203,960,181.3C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto flex flex-col items-center space-y-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Title with Gradient Text */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
            >
              {t('about.title')}
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl text-gray-700 font-bold text-center"
            >
              {t('about.subtitle')}
            </motion.h2>

            {/* Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl"
            >
              {t('about.intro')}
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            >
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {t('about.values.collaboration')}
                </h3>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {t('about.values.performance')}
                </h3>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {t('about.values.flexibility')}
                </h3>
              </motion.div>
            </motion.div>

            {/* Mission / Closing Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl"
            >
              {t('about.mission')}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-indigo-600 text-white hover:bg-indigo-700 flex items-center transition-colors"
              >
                {t('about.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-16" fill="currentColor" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,197.3C640,181,800,171,960,149.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
