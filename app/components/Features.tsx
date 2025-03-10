"use client"

import { motion } from "framer-motion"
import { MessagesSquare, ClipboardList, Cpu } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../context/LanguageContext"

export default function Features() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      name: t("services.items.0.title"),
      description: t("features.items.0.description"),
      icon: MessagesSquare,
      color: "from-blue-400 to-indigo-500",
    },
    {
      name: t("services.items.1.title"),
      description: t("features.items.1.description"),
      icon: ClipboardList,
      color: "from-purple-400 to-pink-500",
    },
    {
      name: t("services.items.2.title"),
      description: t("features.items.2.description"),
      icon: Cpu,
      color: "from-green-400 to-cyan-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("features.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t("features.subtitle")}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="px-6 py-8 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-gray-500 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}