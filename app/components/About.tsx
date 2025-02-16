"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Zap, Sliders, Eye, CheckCircle, Star } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Maximizing value through teamwork",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Leveraging expertise for efficiency",
    },
    {
      icon: Sliders,
      title: "Flexibility",
      description: "Adapting to your unique needs",
    },
  ]

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-extrabold mb-4 text-gray-900">
            Our Core Values
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            At AIBI Solutions, our values are the foundation of everything we do. They guide our decisions, shape our
            culture, and drive our commitment to excellence.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mb-6 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <motion.a
            variants={itemVariants}
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Partner with Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

