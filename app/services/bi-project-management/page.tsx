"use client"

import { motion } from "framer-motion"
import { BarChart, Briefcase, Settings } from "lucide-react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function BiProjects() {
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
            BI Project Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-200"
          >
            Empowering businesses with data-driven decision-making and tailored BI solutions.
          </motion.p>
        </div>
      </section>

      {/* About BI Project Management */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-700 leading-relaxed"
        >
          For large-scale projects or when expertise is lacking within your organization, we provide a highly skilled team with deep technical knowledge, organizational expertise, and project management capabilities to develop custom solutions tailored to your needs while staying within your budget.  
          <br /><br />
          From concept to implementation, our experts work closely with your teams to deliver BI solutions that enhance data analysis, improve decision-making, and drive business performance.
        </motion.p>
      </section>

      {/* Service Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          Transform Your Business with BI Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto"
        >
          Contact us today to explore data-driven solutions that empower your business growth and efficiency.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Contact Us
        </motion.a>
      </section>

      <Footer />
    </div>
  )
}

// BI Project Management Service Data
const services = [
  {
    icon: BarChart,
    title: "Advanced Data Analytics",
    description: "Gain real-time insights and predictive analytics to enhance decision-making.",
  },
  {
    icon: Briefcase,
    title: "BI Strategy & Implementation",
    description: "From data collection to visualization, we craft BI solutions tailored to your needs.",
  },
  {
    icon: Settings,
    title: "Process Automation",
    description: "Optimize workflows with AI-powered automation and intelligent data management.",
  },
]
