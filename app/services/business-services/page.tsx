"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Layers, Rocket } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Link from 'next/link'

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
            AI Development & Machine Learning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-200"
          >
            We develop custom AI-powered applications to automate processes and enhance business performance.
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
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
        >
          Our mission is to automate your workflows and boost efficiency by developing high-performance AI applications tailored to your business needs.  
          Whether it's predictive analytics, intelligent automation, or deep learning solutions, we integrate AI seamlessly to optimize your processes.
        </motion.p>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
          Ready to Integrate AI into Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
        >
          Contact us today to explore AI solutions that will transform your operations and drive efficiency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/contact" passHref>
            <a className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition">
              Contact Us
            </a>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

// AI Development Service Data
const services = [
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
]
