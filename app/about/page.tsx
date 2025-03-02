"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowRight, Users, Zap, Sliders, Eye, CheckCircle, Star, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

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

  const values = [
    { icon: Users, title: t("aboutPage.values.0.title"), description: t("aboutPage.values.0.description") },
    { icon: Zap, title: t("aboutPage.values.1.title"), description: t("aboutPage.values.1.description") },
    { icon: Sliders, title: t("aboutPage.values.2.title"), description: t("aboutPage.values.2.description") },
    { icon: Eye, title: t("aboutPage.values.3.title"), description: t("aboutPage.values.3.description") },
    { icon: CheckCircle, title: t("aboutPage.values.4.title"), description: t("aboutPage.values.4.description") },
    { icon: Star, title: t("aboutPage.values.5.title"), description: t("aboutPage.values.5.description") },
  ]

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white min-h-screen overflow-hidden">
      <Header />

      <main className="pt-20 pb-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold text-center mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              {t("aboutPage.title")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            {t("aboutPage.description")}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <value.icon className="w-8 h-8 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("aboutPage.missionTitle")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("aboutPage.missionDescription")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                {t("aboutPage.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{t("aboutPage.contactTitle")}</h2>
                <button onClick={() => setIsContactFormOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.name")}</label>
                  <Input id="name" placeholder={t("contact.placeholders.name")} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.email")}</label>
                  <Input id="email" type="email" placeholder={t("contact.placeholders.email")} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t("contact.form.message")}</label>
                  <Textarea id="message" placeholder={t("contact.placeholders.message")} rows={4} />
                </div>
                <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                  {t("contact.button")}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
