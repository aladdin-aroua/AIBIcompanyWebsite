"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, PieChart, Smartphone } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Lightbulb,
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
    },
    {
      icon: PieChart,
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
    },
    {
      icon: Smartphone,
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
    },
  ]

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center
                         text-center transform transition duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
