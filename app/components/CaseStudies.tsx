"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Building2, Briefcase, Stethoscope, ShoppingCart, Truck, Lightbulb } from "lucide-react"
import { useLanguage } from '../context/LanguageContext'

const industries = [
  {
    name: "Finance",
    icon: Briefcase,
    description: "Optimize risk assessment, fraud detection, and algorithmic trading with our AI solutions.",
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
    description: "Enhance patient care with predictive diagnostics and personalized treatment plans.",
  },
  {
    name: "Retail",
    icon: ShoppingCart,
    description: "Improve customer experience and inventory management with AI-driven insights.",
  },
  {
    name: "Manufacturing",
    icon: Truck,
    description: "Optimize production processes and predict maintenance needs with our BI tools.",
  },
  {
    name: "Energy",
    icon: Lightbulb,
    description: "Forecast demand, optimize distribution, and improve sustainability with AI analytics.",
  },
  {
    name: "Real Estate",
    icon: Building2,
    description: "Leverage market trends and property valuation models for informed decision-making.",
  },
]

export default function IndustryApplications() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            {t('caseStudies.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            {t('caseStudies.subtitle')}
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

