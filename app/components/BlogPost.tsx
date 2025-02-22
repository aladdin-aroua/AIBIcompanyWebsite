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
    image: "/the-future-of-AI.webp?height=400&width=800",
  },
  {
    id: "2",
    title: "Leveraging Big Data for Better Decision-Making",
    content: "In today’s digital age, big data has become a cornerstone of modern business strategy, empowering organizations to make smarter, faster, and more informed decisions. As data volumes continue to grow, companies that harness its power gain a significant competitive edge.\n\nOne of the most impactful uses of big data lies in real-time decision-making. Advanced analytics platforms can process massive datasets almost instantly, providing actionable insights that drive better business outcomes. Whether it's optimizing supply chains, refining marketing strategies, or enhancing customer experiences, data-driven decisions lead to more effective operations.\n\nPredictive analytics further amplifies the value of big data. By analyzing historical patterns and current trends, businesses can anticipate future challenges and opportunities. This approach allows organizations to proactively adjust their strategies, mitigate risks, and capitalize on emerging trends.\n\nBig data is also transforming customer experiences. With deeper insights into user behavior and preferences, companies can deliver highly personalized products, services, and interactions. From tailored recommendations on e-commerce platforms to customized financial services, big data is reshaping how businesses connect with their audiences.\n\nHowever, leveraging big data comes with challenges. Data privacy, security, and governance must remain top priorities to ensure ethical use and compliance with regulations. Moreover, organizations need the right tools, infrastructure, and skilled talent to turn raw data into meaningful insights.\n\nDespite these challenges, the benefits of big data are undeniable. Companies that embrace a data-driven approach are better positioned to innovate, adapt to market changes, and achieve long-term success.\n\nAs technology continues to evolve, big data will remain at the heart of strategic decision-making. Businesses that invest in analytics and foster a data-centric culture will undoubtedly lead the way in the years to come.",
    author: "Emily Roberts",
    date: "June 10, 2024",
    image: "/leveraging-big-data.webp?height=400&width=800",
  },
  {
    id: "3",
    title: "The Rise of Natural Language Processing",
    content: "Natural Language Processing (NLP) is revolutionizing how humans interact with technology, enabling machines to understand, interpret, and respond to human language with remarkable accuracy. From enhancing customer service to transforming content creation, NLP is driving innovation across industries.\n\nOne of the most prominent applications of NLP is in **customer support**. AI-powered chatbots and virtual assistants can now handle complex queries, provide instant responses, and offer personalized solutions—improving efficiency while enhancing user satisfaction.\n\nIn **content creation**, NLP tools are streamlining workflows for writers, marketers, and creators. From generating blog posts and product descriptions to summarizing reports, these AI-driven platforms save time while maintaining quality.\n\n**Sentiment analysis** is another powerful use case. By analyzing customer feedback, social media posts, and reviews, businesses can gauge public sentiment, identify trends, and make informed decisions to improve products and services.\n\nHowever, as NLP continues to advance, challenges remain. Ensuring accuracy across different languages, dialects, and contexts requires ongoing refinement. Additionally, ethical considerations around bias and privacy must be addressed to maintain user trust.\n\nDespite these challenges, the future of NLP looks promising. As technology evolves, businesses that embrace NLP will unlock new opportunities for efficiency, innovation, and deeper customer connections.\n\nFrom chatbots to content generation, NLP is not just a trend—it's shaping the future of human-computer interaction. The question is no longer *if* businesses will adopt NLP but *how quickly* they can integrate it to stay competitive.",
    author: "Emily Roberts",
    date: "September 20, 2024",
    image: "/rise-of-nlp.webp?height=400&width=800",
  },
  {
    id: "4",
    title: "Blockchain in BI: A Game Changer",
    content: "Blockchain technology is transforming the world of business intelligence (BI), offering unparalleled data security, transparency, and integrity. As organizations increasingly rely on data-driven insights, blockchain ensures that the information fueling these decisions is trustworthy and tamper-proof.\n\nOne of the most significant advantages of blockchain in BI is **data immutability**. Once data is recorded on a blockchain, it cannot be altered or deleted, ensuring a single source of truth. This feature enhances the reliability of analytics, audits, and reporting, giving businesses greater confidence in their decision-making.\n\nBlockchain also improves **data transparency**. Each transaction is recorded in a distributed ledger, accessible to authorized stakeholders. This openness fosters trust among partners, clients, and regulators, while maintaining strict access controls.\n\nIn terms of **security**, blockchain’s decentralized nature makes it highly resilient to cyberattacks. Traditional databases are vulnerable to single points of failure, but blockchain distributes data across multiple nodes, significantly reducing risk.\n\nMoreover, blockchain streamlines **data sharing** between organizations. In industries like finance, healthcare, and supply chain management, secure, real-time data exchanges are revolutionizing operations and collaboration.\n\nHowever, adopting blockchain in BI comes with challenges. **Scalability, integration with existing systems, and regulatory considerations** must be carefully managed. Businesses need skilled professionals and robust strategies to implement blockchain effectively.\n\nDespite these challenges, the potential benefits are too significant to ignore. As blockchain technology matures, its role in BI will continue to grow, empowering organizations to make smarter, more secure decisions.\n\nThe future of BI lies not just in data analysis but in **trustworthy, transparent, and secure insights**—and blockchain is the key to unlocking that future.",
    author: "Michael Reed",
    date: "October 5, 2024",
    image: "/blockchain-in-bi.webp?height=400&width=800",
  },
  {
    id: "5",
    title: "The Ethics of AI: Navigating the Gray Areas",
    content: "As artificial intelligence (AI) continues to transform industries, it brings with it a range of ethical considerations that organizations must address. From privacy concerns to algorithmic bias, navigating the gray areas of AI ethics is essential for responsible innovation.\n\nOne of the most pressing issues is **bias in AI algorithms**. Since AI systems are trained on historical data, they can unintentionally reflect and even amplify existing biases. This can lead to unfair outcomes in areas like hiring, lending, and law enforcement, raising questions about accountability and fairness.\n\n**Data privacy and consent** are equally significant concerns. AI relies heavily on user data to function effectively, but collecting, storing, and analyzing this information must be done transparently and with user consent. Regulatory frameworks like GDPR and CCPA aim to address these concerns, but enforcement remains inconsistent across regions.\n\n**Transparency and explainability** are also crucial. As AI models become more complex, understanding how decisions are made becomes increasingly challenging. Black-box algorithms can undermine trust, especially when they affect sensitive areas such as healthcare, finance, or criminal justice.\n\nMoreover, **job displacement** is another ethical challenge. While AI automates repetitive tasks, it can also lead to workforce disruptions. Companies adopting AI should invest in employee reskilling and workforce transition programs to mitigate negative impacts.\n\nDespite these challenges, ethical AI development is possible. **Responsible AI frameworks**, third-party audits, and diverse development teams can help create fairer, more accountable systems. Collaboration between policymakers, technologists, and civil society is key to ensuring that AI serves humanity rather than harms it.\n\nUltimately, the future of AI hinges not only on technological advancement but also on the ethical choices we make today. By prioritizing fairness, privacy, and accountability, businesses can harness AI's potential while safeguarding individual rights and societal well-being.",
    author: "Sophia Bennett",
    date: "November 15, 2024",
    image: "/ethics-of-ai.webp?height=400&width=800",
  }  
  
  
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
