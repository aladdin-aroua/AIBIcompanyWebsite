"use client"

import { motion } from "framer-motion"
import { Users, Zap, Sliders, Eye, CheckCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Users,
      title: t("about.values.0.title"),
      description: t("about.values.0.description"),
      color: "blue"
    },
    {
      icon: Zap,
      title: t("about.values.1.title"),
      description: t("about.values.1.description"),
      color: "purple"
    },
    {
      icon: Sliders,
      title: t("about.values.2.title"),
      description: t("about.values.2.description"),
      color: "pink"
    },
    {
      icon: Eye,
      title: t("about.values.3.title"),
      description: t("about.values.3.description"),
      color: "indigo"
    },
    {
      icon: CheckCircle,
      title: t("about.values.4.title"),
      description: t("about.values.4.description"),
      color: "cyan"
    },
    {
      icon: Star,
      title: t("about.values.5.title"),
      description: t("about.values.5.description"),
      color: "teal"
    },
  ]

  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    pink: "bg-pink-100 text-pink-600",
    indigo: "bg-indigo-100 text-indigo-600",
    cyan: "bg-cyan-100 text-cyan-600",
    teal: "bg-teal-100 text-teal-600",
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-100">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(96,165,250,0.1),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg ${colorMap[value.color]} flex items-center justify-center mb-4`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-transform hover:scale-105"
            >
              {t("about.button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
