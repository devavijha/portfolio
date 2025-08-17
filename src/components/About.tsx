'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main content - single column layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Passionate Developer & Problem Solver
            </motion.h3>
            
            <motion.div 
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                I&apos;m a Computer Science Engineering student with <strong className="text-purple-600">2+ years of experience</strong> in building 
                scalable web applications, AI-driven solutions, and optimizing system performance. My passion lies 
                in creating innovative digital experiences that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in full-stack development with expertise in modern frameworks like React.js, Node.js, 
                and Next.js. My experience spans from building interactive learning platforms to developing 
                real-time management systems and AI-powered applications.
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Core Technologies</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'React.js', color: 'from-blue-400 to-blue-600', icon: '⚛️' },
                { name: 'Node.js', color: 'from-green-400 to-green-600', icon: '🟢' },
                { name: 'Python', color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
                { name: 'TypeScript', color: 'from-blue-500 to-blue-700', icon: '📘' },
                { name: 'Next.js', color: 'from-gray-600 to-gray-800', icon: '▲' },
                { name: 'AI/ML', color: 'from-purple-400 to-purple-600', icon: '🤖' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <span>{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: '2+', label: 'Years Experience', color: 'purple', icon: '💼' },
              { value: '15+', label: 'Projects Completed', color: 'blue', icon: '🚀' },
              { value: '9.39', label: 'GPA Score', color: 'green', icon: '🎓' },
              { value: '8+', label: 'Certifications', color: 'orange', icon: '🏆' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl"
            >
              <h4 className="text-2xl font-bold mb-4">Ready to collaborate?</h4>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to work on innovative projects and contribute to meaningful solutions. 
                Let&apos;s build something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 shadow-lg"
              >
                Get In Touch 
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
