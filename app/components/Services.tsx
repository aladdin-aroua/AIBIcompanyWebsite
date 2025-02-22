"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, PieChart, Smartphone } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Consultation Services",
    description:
      "We offer consultation services to define the right digital strategy, addressing your current and future needs at an optimal cost.",
  },
  {
    icon: PieChart,
    title: "BI Project Management",
    description:
      "For large-scale projects or when expertise is lacking in your organization, we provide a team with deep technical skills, organizational aptitude, and project management capabilities to develop tailored solutions that meet your needs while respecting your budgets.",
  },
  {
    icon: Smartphone,
    title: "AI Development",
    description:
      "To increase your performance and optimize decision-making, we develop custom, high-performance applications and artificial intelligence solutions.",
  },
]

export default function Services() {
  // Intersection Observer to trigger animations when in view
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // Container: fade in & stagger child animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  // Each item: fade in + slight slide up
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + optional subheading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Empowering your business with tailored solutions in consulting, BI project management, and mobile & AI development.
          </motion.p>
        </motion.div>

        {/* Three-Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center
                         text-center transform transition duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-4">
                <service.icon className="w-12 h-12 text-indigo-600" />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
