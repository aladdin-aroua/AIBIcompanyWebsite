"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import Link from 'next/link'

const images = [
  "/first-home-page.webp?height=600&width=1200&text=AI+Solutions",
  "/second-home-page.webp?height=600&width=1200&text=Business+Intelligence",
  "/third-home-page.webp?height=600&width=1200&text=Data+Analytics",
]

export default function Hero() {
  const { t } = useLanguage()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Fallback (Ensures No White Flash) */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage] || "/placeholder.svg"}
            alt={`Slide ${currentImage + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block">{t("hero.title")}</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              {t("hero.subtitle")}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg mx-auto text-xl sm:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("hero.secondsubtitle")}
          </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/about" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                {t("hero.button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                {t("hero.buttonContact")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentImage ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}
