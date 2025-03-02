"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Briefcase, Code, BarChartIcon as ChartBar } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Careers() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const positions = [
    {
      title: t("careers.positions.0.title"),
      icon: Briefcase,
      description: t("careers.positions.0.description")
    },
    {
      title: t("careers.positions.1.title"),
      icon: Code,
      description: t("careers.positions.1.description")
    },
    {
      title: t("careers.positions.2.title"),
      icon: ChartBar,
      description: t("careers.positions.2.description")
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          {t("careers.title")}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t("careers.subtitle")}
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
            >
              <position.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{position.title}</h3>
              <p className="text-gray-600 mb-6">{position.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t("careers.contactTitle")}
          </h3>
          <p className="text-gray-600 mb-8">
            {t("careers.contactDescription")}{" "}
            <a href="mailto:info@fpai.ca" className="text-blue-500 hover:underline">
              info@fpai.ca
            </a>
            .
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
