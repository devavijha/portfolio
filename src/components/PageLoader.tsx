'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('')

  const fullText = 'Abhishek Jha'
  
  useEffect(() => {
    // Animate the typing effect
    let index = 0
    const typeText = () => {
      if (index < fullText.length) {
        setLoadingText(fullText.slice(0, index + 1))
        index++
        setTimeout(typeText, 100)
      } else {
        // Wait a bit after typing is complete, then hide loader
        setTimeout(() => {
          setIsLoading(false)
        }, 800)
      }
    }

    // Start typing animation after a brief delay
    setTimeout(typeText, 500)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          
          {/* Animated Orbs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo/Initial */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              className="mb-8"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-black text-white">AJ</span>
              </div>
            </motion.div>

            {/* Typing Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {loadingText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-purple-400"
              >
                |
              </motion.span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-gray-400 text-lg font-light tracking-wide"
            >
              Portfolio Loading...
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
              className="mt-8 mx-auto max-w-xs"
            >
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Slide-out Animation Panels */}
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-950 to-purple-900"
          />
          <motion.div
            initial={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-slate-950 to-slate-900"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
