"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast, Toaster } from "react-hot-toast"
import { useLanguage } from "../context/LanguageContext"

export default function Contact() {
  const { t } = useLanguage()
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
      toast.error(t("contact.errors.required"))
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
        toast.success(t("contact.success"))
        setFormState({ name: "", email: "", message: "" })
      } else {
        toast.error(result.error || t("contact.errors.failed"))
      }
    } catch (error) {
      console.error("Failed to send message:", error)
      toast.error(t("contact.errors.error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 bg-gradient-to-r from-indigo-800 to-blue-700 text-white relative overflow-hidden"
    >
      <Toaster position="bottom-right" />

      {/* Background animation */}
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
              repeat: Infinity,
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
          <h2 className="text-3xl font-extrabold sm:text-4xl">{t("contact.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8">
              {["name", "email", "message"].map((field) => (
                <div key={field} className="mb-6">
                  <label htmlFor={field} className="block text-blue-200 font-semibold mb-2">
                    {t(`contact.form.${field}`)}
                  </label>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      name={field}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 bg-white/20 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                      required
                      placeholder={t(`contact.placeholders.${field}`)}
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formState[field as keyof typeof formState]}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/20 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-200"
                      required
                      placeholder={t(`contact.placeholders.${field}`)}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                {loading ? t("contact.sending") : t("contact.button")}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">{t("contact.infoTitle")}</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">info@fpai.ca</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">+1 (514) 291-5123</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-300 mr-4" />
                <span className="text-blue-100">1190 Rue du Fort #303, Montréal, QC H3H 2B5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
