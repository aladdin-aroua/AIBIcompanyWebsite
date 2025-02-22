"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, Lightbulb, PieChart, Smartphone, Brain } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useLanguage } from '../context/LanguageContext'

const services = [
  {
    mainService: "Consultation Services",
    subService: "Machine Learning and BI Solutions",
    href: "/services/consultation-services",
    icon: Lightbulb,
  },
  {
    mainService: "BI Project Management",
    subService: "Computer Vision AI",
    href: "/services/bi-project-management",
    icon: PieChart,
  },
  {
    mainService: "AI Development",
    subService: "Chatbot Development Services",
    href: "/services/business-services",
    icon: Smartphone,
  },
]

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: "/", color: "text-[#3b82f6]" },
    { name: t('nav.about'), href: "/about", color: "text-white" },
    { name: t('nav.blog'), href: "/blog", color: "text-white" },
    { name: t('nav.contact'), href: "/contact", color: "text-white" },
  ]

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-[#1a1a1a]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
        {/* Logo and company name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 transform transition-transform duration-300 hover:scale-110">
              {/* Replaced Brain icon with the SVG logo */}
              <img src="/fpai_logo.svg" alt="FPAI Logo" className="h-full w-full object-contain" />
            </div>
          </Link>
        </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Centered Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center flex-grow space-x-8">
            {navItems.map((item, index) => (
              <Link key={item.name} href={item.href} className="relative group">
                <motion.span
                  className={`${item.color} hover:text-blue-400 transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>
                {pathname === item.href && (
                  <motion.div layoutId="underline" className="absolute left-0 top-full h-0.5 w-full bg-blue-500" />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                className="flex items-center space-x-1 text-[#3b82f6] hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('nav.services')}</span>
                <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[600px] bg-white/90 backdrop-blur-md shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200"
                  >
                    <div className="divide-y divide-gray-200">
                      {services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={service.href}
                            className="flex items-center justify-between p-4 hover:bg-blue-50 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl">
                                {typeof service.icon === 'string' ? service.icon : <service.icon />}
                              </span>
                              <div>
                                <div className="text-[#3b82f6] font-medium">{service.mainService}</div>
                                <div className="text-gray-900 mt-1">{service.subService}</div>
                              </div>
                            </div>
                            <ChevronDown className="h-5 w-5 text-gray-400 transform -rotate-90" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${item.color} block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}