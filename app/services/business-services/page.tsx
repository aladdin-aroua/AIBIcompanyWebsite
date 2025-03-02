"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Layers, Rocket } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'

// Switch language here: 'en' or 'fr'
const language = 'en'

const translations = {
  en: {
    title: "AI Development & Machine Learning",
    subtitle: "We develop custom AI-powered applications to automate processes and enhance business performance.",
    description: `Our mission is to automate your workflows and boost efficiency by developing high-performance AI applications tailored to your business needs.  
Whether it's predictive analytics, intelligent automation, or deep learning solutions, we integrate AI seamlessly to optimize your processes.`,
    services: [
      {
        icon: BrainCircuit,
        title: "AI-Powered Automation",
        description: "Automate complex business processes with intelligent AI-driven workflows.",
      },
      {
        icon: Layers,
        title: "Deep Learning & Neural Networks",
        description: "Utilize cutting-edge deep learning models to enhance predictions and decision-making.",
      },
      {
        icon: Rocket,
        title: "Custom AI Solutions",
        description: "We build AI models tailored to your specific industry needs and challenges.",
      },
    ],
    ctaTitle: "Ready to Integrate AI into Your Business?",
    ctaSubtitle: "Contact us today to explore AI solutions that will transform your operations and drive efficiency.",
    contactButton: "Contact Us",
  },
  fr: {
    title: "Développement IA & Machine Learning",
    subtitle: "Nous développons des applications personnalisées basées sur l'IA pour automatiser les processus et améliorer la performance de votre entreprise.",
    description: `Notre mission est d'automatiser vos workflows et de maximiser l'efficacité grâce à des applications IA haute performance adaptées à vos besoins métier.  
Qu'il s'agisse d'analytique prédictive, d'automatisation intelligente ou de solutions de deep learning, nous intégrons l'IA pour optimiser vos processus.`,
    services: [
      {
        icon: BrainCircuit,
        title: "Automatisation Intelligente",
        description: "Automatisez des processus complexes grâce à des workflows pilotés par l'IA.",
      },
      {
        icon: Layers,
        title: "Deep Learning & Réseaux Neuronaux",
        description: "Exploitez des modèles avancés pour améliorer les prédictions et la prise de décision.",
      },
      {
        icon: Rocket,
        title: "Solutions IA Sur-Mesure",
        description: "Nous concevons des modèles IA adaptés aux besoins et défis spécifiques de votre secteur.",
      },
    ],
    ctaTitle: "Prêt à intégrer l'IA dans votre entreprise ?",
    ctaSubtitle: "Contactez-nous dès aujourd'hui pour découvrir des solutions IA qui transformeront vos opérations et votre efficacité.",
    contactButton: "Contactez-nous",
  },
}

const content = translations[language]

export default function MachineLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold sm:text-6xl"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-200"
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      {/* About AI Development */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed whitespace-pre-line"
        >
          {content.description}
        </motion.p>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center">
                <service.icon className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          {content.ctaTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
        >
          {content.ctaSubtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition">
            {content.contactButton}
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
