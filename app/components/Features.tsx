"use client"

import { motion } from "framer-motion"
import { Brain, BarChart, Zap, ArrowRight, Cpu } from "lucide-react"
import { useInView } from "react-intersection-observer"

const features = [
  {
    name: "Advanced AI Integration",
    description: "Seamlessly integrate AI into your existing systems for smarter decision-making.",
    icon: Brain,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Real-time Analytics",
    description: "Get instant insights with our real-time BI dashboards and reporting tools.",
    icon: BarChart,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Predictive Modeling",
    description: "Forecast trends and make data-driven decisions with our predictive models.",
    icon: Zap,
    color: "from-green-400 to-cyan-500",
  },
  {
    name: "LLMs & Generative AI",
    description: "Harness the power of Large Language Models and Generative AI for innovative solutions.",
    icon: Cpu,
    color: "from-orange-400 to-red-500",
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Powerful Features for Your Business</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Our AI and BI solutions offer a range of features to help you make better decisions and drive growth.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="px-6 py-8 h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-4 text-gray-500 flex-grow">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

