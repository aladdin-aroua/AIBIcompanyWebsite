"use client"

import { motion } from "framer-motion"
import { Users, Zap, Sliders, Eye, CheckCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function About() {
  const values = [
    { icon: Users, title: "Collaboration", description: "Maximizing value through teamwork", color: "blue" },
    { icon: Zap, title: "Performance", description: "Expertise for efficiency and speed", color: "purple" },
    { icon: Sliders, title: "Flexibility", description: "Adapting to unique business needs", color: "pink" },
    { icon: Eye, title: "Transparency", description: "Building trust through openness", color: "indigo" },
    { icon: CheckCircle, title: "Rigor", description: "Ensuring precision in every detail", color: "cyan" },
    { icon: Star, title: "Excellence", description: "Striving for the highest standards", color: "teal" },
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
      {/* Simplified Background */}
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
          <h2 className="text-4xl font-bold text-gray-900">Our Core Values</h2>
          <p className="text-lg text-gray-600 mt-4">
            These principles drive our commitment to excellence and guide everything we do.
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

        {/* CTA Section */}
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
            Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        </motion.div>
      </div>
    </section>
  )
}
