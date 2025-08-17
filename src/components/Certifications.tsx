'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const certificationsData = [
  {
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM via Coursera',
    date: '2024',
    description: 'Comprehensive machine learning program covering supervised and unsupervised learning, deep learning, and practical ML applications.',
    logo: '🔵',
    color: 'from-blue-600 to-blue-800',
    credentialUrl: 'https://coursera.org/verify/professional-cert/ML-IBM'
  },
  {
    title: 'Google Cloud Technical Series',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Technical training series covering cloud computing fundamentals, architecture, and Google Cloud Platform services.',
    logo: '☁️',
    color: 'from-red-500 to-yellow-500',
    credentialUrl: 'https://cloud.google.com/certification'
  },
  {
    title: 'Cybersecurity for Everyone',
    issuer: 'University of Maryland via Coursera',
    date: '2023',
    description: 'Comprehensive cybersecurity course covering fundamental security concepts, risk management, and best practices.',
    logo: '🛡️',
    color: 'from-green-600 to-teal-600',
    credentialUrl: 'https://coursera.org/verify/cybersecurity'
  },
  {
    title: 'Python Programming Basics',
    issuer: 'University of Michigan via Coursera',
    date: '2023',
    description: 'Fundamental Python programming concepts including data structures, algorithms, and object-oriented programming.',
    logo: '🐍',
    color: 'from-yellow-500 to-green-500',
    credentialUrl: 'https://coursera.org/verify/python-basics'
  },
  {
    title: 'Linux Fundamentals',
    issuer: 'Linux Professional Institute',
    date: '2023',
    description: 'Essential Linux skills including command line usage, system administration, and shell scripting.',
    logo: '🐧',
    color: 'from-gray-700 to-black',
    credentialUrl: 'https://lpi.org/verify'
  },
  {
    title: 'Web Development Bootcamp',
    issuer: 'The Complete Web Developer Course',
    date: '2022',
    description: 'Full-stack web development including HTML, CSS, JavaScript, Node.js, and database management.',
    logo: '🌐',
    color: 'from-purple-600 to-pink-600',
    credentialUrl: 'https://webdev-bootcamp.com/verify'
  }
]

const CertificationCard = ({ certification, index }: { 
  certification: typeof certificationsData[0]; 
  index: number;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group perspective-1000"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-1">
        {/* Header with gradient */}
        <div className={`h-24 bg-gradient-to-r ${certification.color} flex items-center justify-center relative overflow-hidden`}>
          <div className="text-4xl">{certification.logo}</div>
          <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition-colors leading-tight">
                {certification.title}
              </h3>
              <p className="text-purple-600 font-semibold text-sm mt-1">
                {certification.issuer}
              </p>
            </div>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium ml-2">
              {certification.date}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {certification.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications and courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificationsData.map((certification, index) => (
            <CertificationCard key={certification.title} certification={certification} index={index} />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-purple-100">Certifications</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-purple-100">Learning Hours</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-100">Tech Domains</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
