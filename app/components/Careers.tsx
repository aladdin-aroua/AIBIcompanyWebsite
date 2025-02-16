"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Briefcase, Code, BarChartIcon as ChartBar } from 'lucide-react'

export default function Careers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const positions = [
    { title: "AI Research Scientist", icon: Briefcase, description: "Push the boundaries of AI technology and contribute to groundbreaking research." },
    { title: "Full Stack AI Developer", icon: Code, description: "Build intelligent applications that leverage the latest in AI and machine learning." },
    { title: "Data Analyst & BI Specialist", icon: ChartBar, description: "Transform complex data into actionable insights that drive business decisions." },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Join Our Team of Innovators
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At AIBI Solutions, we're always on the lookout for brilliant minds to help us shape the future of AI and BI. If you're passionate about pushing the boundaries of technology, we want to hear from you.
        </motion.p>

        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
            >
              <position.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{position.title}</h3>
              <p className="text-gray-600 mb-6">{position.description}</p>
              <a href="#" className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300">
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't see a perfect fit?</h3>
          <p className="text-gray-600 mb-8">
            We're always interested in meeting talented individuals. Send your resume to{" "}
            <a href="mailto:careers@aibi-solutions.com" className="text-blue-500 hover:underline">
              careers@aibi-solutions.com
            </a>
            , and let's start a conversation about your future with us.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            View All Openings <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
