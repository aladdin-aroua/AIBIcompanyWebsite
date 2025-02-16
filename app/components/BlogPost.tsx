"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Business",
    content: "Artificial Intelligence (AI) is rapidly transforming the business landscape, offering unprecedented opportunities for innovation, efficiency, and growth. As we look to the future, it's clear that AI will play an increasingly central role in how companies operate and compete.\n\nOne of the most significant impacts of AI in business is in data analysis and decision-making. Machine learning algorithms can process vast amounts of data at incredible speeds, uncovering insights and patterns that would be impossible for humans to detect. This capability is enabling businesses to make more informed decisions, predict market trends, and personalize customer experiences like never before.\n\nAnother area where AI is making waves is in automation. From chatbots handling customer service inquiries to robotic process automation streamlining back-office tasks, AI is freeing up human workers to focus on more complex, creative, and strategic work. This shift is not only improving efficiency but also changing the nature of work itself.\n\nAI is also driving innovation in product development. Companies are using AI to design new products, optimize existing ones, and even create entirely new categories of goods and services. For example, AI-powered generative design tools are revolutionizing fields like architecture and industrial design.\n\nHowever, the rise of AI in business also brings challenges. Companies must navigate ethical considerations, ensure data privacy and security, and manage the workforce transitions that AI may bring. There's also the question of AI governance – how to ensure that AI systems are transparent, accountable, and aligned with human values.\n\nDespite these challenges, the potential benefits of AI in business are too significant to ignore. Companies that successfully integrate AI into their operations and strategy will likely find themselves with a substantial competitive advantage in the years to come.\n\nAs we look to the future, it's clear that AI will continue to evolve and surprise us with new applications and capabilities. Businesses that stay informed, adaptable, and proactive in their approach to AI will be best positioned to thrive in this exciting new era.",
    author: "Jane Doe",
    date: "May 15, 2023",
    image: "/placeholder.svg?height=400&width=800",
  },
  // ... other blog posts
]

export default function BlogPost({ id }: { id: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const post = blogPosts.find(post => post.id === id)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
          <div className="prose prose-lg">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
