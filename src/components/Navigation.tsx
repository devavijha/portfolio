'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer group"
            onClick={() => scrollToSection('#home')}
          >
            <div className={`text-3xl font-black tracking-tight transition-all duration-300 ${
              scrolled 
                ? 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text' 
                : 'text-white drop-shadow-lg'
            }`}>
              <span className="relative">
                AJ
                <motion.div
                  className={`absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-purple-100 to-blue-100' 
                      : 'bg-white/10'
                  }`}
                  style={{ zIndex: -1 }}
                />
              </span>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                  scrolled 
                    ? 'text-gray-700 hover:text-purple-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100' 
                      : 'bg-white/10 backdrop-blur-sm border border-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  style={{ zIndex: 1 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:bg-purple-50 hover:text-purple-600' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`lg:hidden overflow-hidden ${
            isOpen ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200/50' : ''
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -30,
                  scale: isOpen ? 1 : 0.9,
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className="relative block w-full text-left py-4 px-6 text-xl font-medium text-gray-700 hover:text-purple-600 transition-all duration-300 rounded-xl group"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full group-hover:h-8 transition-all duration-300"
                  style={{ transform: 'translateY(-50%)' }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
