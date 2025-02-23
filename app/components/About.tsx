"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Zap, Sliders, Eye, CheckCircle, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRef } from "react"

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "Maximizing value through teamwork",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Leveraging expertise for efficiency",
      color: "purple",
    },
    {
      icon: Sliders,
      title: "Flexibility",
      description: "Adapting to your unique needs",
      color: "pink",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Building trust through openness",
      color: "indigo",
    },
    {
      icon: CheckCircle,
      title: "Rigor",
      description: "Ensuring precision in every detail",
      color: "cyan",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for the highest standards",
      color: "teal",
    },
  ]

  const colorMap: { [key: string]: string } = {
    blue: "bg-blue-500/10 text-blue-600 ring-blue-500/20",
    purple: "bg-purple-500/10 text-purple-600 ring-purple-500/20",
    pink: "bg-pink-500/10 text-pink-600 ring-pink-500/20",
    indigo: "bg-indigo-500/10 text-indigo-600 ring-indigo-500/20",
    cyan: "bg-cyan-500/10 text-cyan-600 ring-cyan-500/20",
    teal: "bg-teal-500/10 text-teal-600 ring-teal-500/20",
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* Elegant geometric background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated gradient circles */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                opacity: { duration: 2, delay: i * 0.3 },
                scale: { duration: 12, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                x: { duration: 12, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 12, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute rounded-full mix-blend-multiply filter blur-3xl"
              style={{
                background: [
                  "radial-gradient(circle at center, rgba(96, 165, 250, 0.3), transparent 70%)",
                  "radial-gradient(circle at center, rgba(129, 140, 248, 0.3), transparent 70%)",
                  "radial-gradient(circle at center, rgba(167, 139, 250, 0.3), transparent 70%)",
                  "radial-gradient(circle at center, rgba(192, 132, 252, 0.3), transparent 70%)",
                ][i],
                width: `${600 + i * 100}px`,
                height: `${600 + i * 100}px`,
                left: `${i * 25 - 25}%`,
                top: `${i * 15 - 15}%`,
              }}
            />
          ))}
        </div>

        {/* Elegant grid pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f91a_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f91a_1px,transparent_1px)]"
          style={{ backgroundSize: "4rem 4rem" }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-7xl font-bold tracking-tight text-gray-900 mb-8"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At FPAI, our values are the foundation of everything we do. They guide our decisions, shape our culture, and
            drive our commitment to excellence.
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
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`absolute -inset-px rounded-3xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:blur-md ${
                  colorMap[value.color].split(" ")[0]
                }`}
              />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-gray-200 hover:ring-2 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-2xl ${colorMap[value.color]} p-3 ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <value.icon className="w-full h-full" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 text-center"
        >
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="relative group px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Partner with Us</span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ArrowRight className="relative z-10 w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

