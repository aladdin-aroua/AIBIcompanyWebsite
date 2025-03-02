"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../context/LanguageContext"

export default function Blog() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      id: 1,
      title: t("blog.posts.0.title"),
      excerpt: t("blog.posts.0.excerpt"),
      author: t("blog.posts.0.author"),
      date: t("blog.posts.0.date"),
      image: "/the-future-of-AI.webp?height=200&width=300",
    },
    {
      id: 2,
      title: t("blog.posts.1.title"),
      excerpt: t("blog.posts.1.excerpt"),
      author: t("blog.posts.1.author"),
      date: t("blog.posts.1.date"),
      image: "/leveraging-big-data.webp?height=200&width=300",
    },
    {
      id: 3,
      title: t("blog.posts.2.title"),
      excerpt: t("blog.posts.2.excerpt"),
      author: t("blog.posts.2.author"),
      date: t("blog.posts.2.date"),
      image: "/rise-of-nlp.webp?height=200&width=300",
    },
  ]

  return (
    <section ref={ref} id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t("blog.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            {t("blog.subtitle")}
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
              <div className="bg-[#F0F6FF]">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                    {t("blog.readMore")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
