"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, Briefcase, Stethoscope, ShoppingCart, Truck, Lightbulb } from "lucide-react"
import { useLanguage } from '../context/LanguageContext'

export default function IndustryApplications() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const industries = [
    {
      name: t("industries.items.0.name"),
      icon: Briefcase,
      description: t("industries.items.0.description"),
    },
    {
      name: t("industries.items.1.name"),
      icon: Stethoscope,
      description: t("industries.items.1.description"),
    },
    {
      name: t("industries.items.2.name"),
      icon: ShoppingCart,
      description: t("industries.items.2.description"),
    },
    {
      name: t("industries.items.3.name"),
      icon: Truck,
      description: t("industries.items.3.description"),
    },
    {
      name: t("industries.items.4.name"),
      icon: Lightbulb,
      description: t("industries.items.4.description"),
    },
    {
      name: t("industries.items.5.name"),
      icon: Building2,
      description: t("industries.items.5.description"),
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t('industries.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            {t('industries.subtitle')}
          </p>
        </motion.div>

        <div className="mt-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } mb-16 last:mb-0`}
            >
              <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-12">
                  <industry.icon className="h-16 w-16 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}