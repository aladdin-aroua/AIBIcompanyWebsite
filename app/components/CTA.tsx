"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-800 to-blue-700 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-blue-200 font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-white/20 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-blue-200 font-semibold mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-white/20 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                  required
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-blue-200 font-semibold mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/20 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                  required
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">
                  {t('contact.info.email')}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">
                  {t('contact.info.phone')}
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">
                  {t('contact.info.address')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}