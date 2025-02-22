'use client'

import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import About from "./components/About"
import CaseStudies from "./components/CaseStudies"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Blog from "./components/Blog"
import Careers from './components/Careers'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <About />
        <Blog />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

