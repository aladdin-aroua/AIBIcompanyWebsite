'use client'

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

export default function About() {
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
    { icon: Users, title: "Collaboration", description: "We place collaboration at the heart of our DNA to maximize value." },
    { icon: Zap, title: "Performance", description: "Our team leverages proven expertise for efficient solutions." },
    { icon: Sliders, title: "Flexibility", description: "We adapt to your needs and constraints with agility." },
    { icon: Eye, title: "Transparency", description: "We believe in building trust through complete transparency." },
    { icon: CheckCircle, title: "Rigor", description: "We attach immense importance to precision and quality." },
    { icon: Star, title: "Excellence", description: "We strive for excellence in everything we do." }
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
              About AIBI Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            We are pioneers in AI and BI solutions, dedicated to transforming businesses through cutting-edge technology and data-driven insights.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To empower businesses with innovative AI and BI solutions, enabling data-driven decision-making and fostering growth across industries.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                Join Our Journey
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
                <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
                <button onClick={() => setIsContactFormOpen(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={4} />
                </div>
                <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
                  Send Message
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
