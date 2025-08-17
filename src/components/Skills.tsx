'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillsData = {
  languages: [
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'JavaScript', level: 88, icon: '🟨' },
    { name: 'SQL', level: 80, icon: '🗄️' }
  ],
  frameworks: [
    { name: 'React.js', level: 90, icon: '⚛️' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Express.js', level: 82, icon: '🚀' },
    { name: 'Flask', level: 75, icon: '🌶️' }
  ],
  databases: [
    { name: 'MongoDB', level: 85, icon: '🍃' },
    { name: 'MySQL', level: 80, icon: '🐬' },
    { name: 'NoSQL', level: 78, icon: '📊' }
  ],
  concepts: [
    { name: 'OOP', level: 88, icon: '📦' },
    { name: 'DSA', level: 85, icon: '⚗️' },
    { name: 'DBMS', level: 82, icon: '🗃️' },
    { name: 'ML/AI', level: 80, icon: '🤖' },
    { name: 'Cloud Computing', level: 75, icon: '☁️' }
  ],
  tools: [
    { name: 'Git', level: 88, icon: '📝' },
    { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Docker', level: 70, icon: '🐳' }
  ]
}

const SkillCard = ({ category, skills, delay = 0 }: {
  category: string;
  skills: Array<{ name: string; level: number; icon: string }>;
  delay?: number;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
      whileHover={{ y: -10 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6 group-hover:text-purple-600 transition-colors">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: delay + 0.1 * index }}
            className="group/skill"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium text-gray-700 group-hover/skill:text-purple-600 transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="text-sm font-bold text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: delay + 0.2 * index }}
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-900" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and concepts I use to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard category="Languages" skills={skillsData.languages} delay={0.1} />
          <SkillCard category="Frameworks" skills={skillsData.frameworks} delay={0.2} />
          <SkillCard category="Databases" skills={skillsData.databases} delay={0.3} />
          <SkillCard category="Concepts" skills={skillsData.concepts} delay={0.4} />
          <SkillCard category="Tools" skills={skillsData.tools} delay={0.5} />
          
          {/* Additional card for summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white flex flex-col justify-center items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-purple-100">
              Continuously exploring new technologies and expanding my skill set to stay ahead in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
