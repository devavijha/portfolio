'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, TrendingUp, Edit, ShoppingCart } from 'lucide-react'

const experienceData = [
  {
    company: 'TechnoSports Media Group',
    position: 'Web Developer & SEO Manager',
    period: '2023 - Present',
    description: 'Led website optimization initiatives that increased organic traffic by 40%. Developed responsive web applications and implemented SEO strategies for multiple sports media platforms.',
    achievements: [
      'Increased organic traffic by 40%',
      'Optimized page load speeds by 60%',
      'Implemented advanced SEO strategies',
      'Built responsive web applications'
    ],
    icon: TrendingUp,
    color: 'from-green-500 to-blue-500'
  },
  {
    company: 'CollegeDekho',
    position: 'Freelance Content Writer',
    period: '2022 - 2023',
    description: 'Created SEO-optimized educational content focusing on academic programs, career guidance, and institutional reviews. Wrote comprehensive articles that helped students make informed decisions.',
    achievements: [
      'Published 50+ educational articles',
      'Improved content engagement by 35%',
      'Researched and wrote career guides',
      'Collaborated with editorial teams'
    ],
    icon: Edit,
    color: 'from-purple-500 to-pink-500'
  },
  {
    company: 'Pack Your Bag',
    position: 'Web Developer',
    period: '2022',
    description: 'Specialized in Shopify store optimization and development. Enhanced e-commerce functionality, improved user experience, and implemented SEO best practices for better search visibility.',
    achievements: [
      'Optimized Shopify store performance',
      'Enhanced e-commerce functionality',
      'Improved conversion rates by 25%',
      'Implemented mobile-first design'
    ],
    icon: ShoppingCart,
    color: 'from-orange-500 to-red-500'
  }
]

const ExperienceCard = ({ experience, index, isLast }: { 
  experience: typeof experienceData[0]; 
  index: number;
  isLast: boolean;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = experience.icon

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-20 w-px h-full bg-gradient-to-b from-purple-300 to-transparent"></div>
      )}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="flex items-start gap-6 mb-12"
      >
        {/* Icon */}
        <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
          <Icon className="text-white h-6 w-6" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {experience.position}
                </h3>
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  {experience.company}
                </h4>
              </div>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {experience.period}
              </span>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {experience.description}
            </p>

            <div className="space-y-2">
              <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {experience.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey showcasing growth, impact, and continuous learning in web development and digital marketing
          </p>
        </motion.div>

        <div className="relative">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={experience.company} 
              experience={experience} 
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <Briefcase className="mx-auto mb-4 h-12 w-12" />
            <h3 className="text-2xl font-bold mb-4">Looking for New Opportunities</h3>
            <p className="text-purple-100 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
