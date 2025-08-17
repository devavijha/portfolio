'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey in Computer Science and Engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <GraduationCap className="h-16 w-16 opacity-20" />
              </div>
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Bachelor of Technology
                </motion.h3>
                <motion.p 
                  className="text-xl text-purple-100 mb-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Computer Science Engineering
                </motion.p>
                <motion.div 
                  className="flex items-center gap-2 text-purple-100"
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>2022 - 2026</span>
                </motion.div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side - University info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">JAIN University</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Pursuing a comprehensive Computer Science Engineering program with focus on modern software development, 
                    data structures, algorithms, and emerging technologies including AI and machine learning.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Current GPA: <strong className="text-purple-600">9.39/10</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Major: Computer Science Engineering</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-purple-600" />
                      <span className="text-gray-700">Expected Graduation: 2026</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right side - Key courses and achievements */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <h5 className="text-xl font-semibold text-gray-800 mb-4">Key Coursework</h5>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Database Management Systems',
                      'Machine Learning',
                      'Web Development',
                      'Computer Networks',
                      'Software Engineering',
                      'Cloud Computing'
                    ].map((course, idx) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
                        className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-purple-100 transition-colors"
                      >
                        {course}
                      </motion.div>
                    ))}
                  </div>

                  <h5 className="text-xl font-semibold text-gray-800 mb-4">Academic Highlights</h5>
                  <div className="space-y-2">
                    {[
                      'Consistently maintained 9+ GPA',
                      'Dean\'s List for academic excellence',
                      'Active member of Computer Science Club',
                      'Participated in multiple hackathons'
                    ].map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.4, delay: 1.6 + idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Academic Performance Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Academic Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">9.39</div>
                <div className="text-purple-100">Current GPA</div>
                <div className="text-xs text-purple-200 mt-1">out of 10.0</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-purple-100">Years Program</div>
                <div className="text-xs text-purple-200 mt-1">2022 - 2026</div>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-purple-100">Core Subjects</div>
                <div className="text-xs text-purple-200 mt-1">completed</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
