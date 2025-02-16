"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  summary: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding AI",
    summary: "An introduction to artificial intelligence and its applications.",
    slug: "understanding-ai"
  },
  {
    id: 2,
    title: "The Future of BI",
    summary: "Exploring the future trends in business intelligence.",
    slug: "future-of-bi"
  },
  {
    id: 3,
    title: "Data Analytics in 2023",
    summary: "Key trends and technologies in data analytics for the coming year.",
    slug: "data-analytics-2023"
  }
]

export default function BlogList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Latest Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up-to-date with the latest trends and innovations in AI and BI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="flex items-center justify-between">
                  <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
