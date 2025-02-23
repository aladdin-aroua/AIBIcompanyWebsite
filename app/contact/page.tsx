"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from "react-hot-toast"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState.name || !formState.email || !formState.message) {
      toast.error("All fields are required.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("🎉 Message sent successfully!")
        setFormState({ name: "", email: "", message: "" })
      } else {
        toast.error(result.error || "❌ Failed to send message.")
      }
    } catch (err) {
      toast.error("⚠️ An error occurred while sending the message.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Toaster position="bottom-right" reverseOrder={false} />
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Get in Touch
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          >
            Have a question or want to work together? We'd love to hear from you!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-gray-700 text-white placeholder-gray-400 border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-100">Email</h3>
                  <p className="text-gray-300">contact@fpai.ca</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-100">Phone</h3>
                  <p className="text-gray-300">+1 (514) 291-5123</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-gray-100">Address</h3>
                  <p className="text-gray-300">1190 Rue du Fort #303, Montréal, QC H3H 2B5</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
