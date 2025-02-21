"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business",
    excerpt: "Explore how artificial intelligence is reshaping the business landscape and what it means for your company.",
    author: "Jane Doe",
    date: "May 15, 2023",
    image: "/the-future-of-AI.webp?height=200&width=300",
  },
  {
    id: 2,
    title: "Leveraging Big Data for Better Decision Making",
    excerpt: "Learn how to harness the power of big data analytics to drive informed business decisions.",
    author: "John Smith",
    date: "June 2, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "The Rise of Natural Language Processing",
    excerpt: "Discover how NLP is transforming customer service, content creation, and more.",
    author: "Alice Johnson",
    date: "June 20, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Blockchain in BI: A Game Changer",
    excerpt: "Uncover how blockchain technology is revolutionizing business intelligence and data security.",
    author: "Bob Wilson",
    date: "July 5, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "The Ethics of AI: Navigating the Gray Areas",
    excerpt: "Delve into the ethical considerations surrounding AI implementation in various industries.",
    author: "Eva Green",
    date: "July 18, 2023",
    image: "/placeholder.svg?height=200&width=300",
  },
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
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-1">•</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
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
