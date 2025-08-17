'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    title: 'AlgoXpert',
    description: 'Interactive DSA learning platform with Judge0 API integration and AI-driven explanations. Features real-time code execution, algorithm visualization, and personalized learning paths.',
    tech: ['React.js', 'Node.js', 'Judge0 API', 'MongoDB', 'AI/ML'],
    image: '🧠',
    color: 'from-purple-500 to-pink-500',
    githubUrl: 'https://github.com/devavijha/DSA',
    liveUrl: 'https://dsa-omega.vercel.app/',
    features: ['AI Code Analysis', 'Real-time Execution', 'Progress Tracking']
  },
  {
    title: 'Restaurant Management System',
    description: 'Real-time restaurant management platform with live table tracking, QR code ordering system, and dynamic dashboard with analytics and inventory management.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'MySQL', 'QR Codes'],
    image: '🍽️',
    color: 'from-green-500 to-blue-500',
    githubUrl: 'https://github.com/devavijha/Real-time-Restaurant-Management-System',
    liveUrl: 'https://real-time-restaurant-management-system.vercel.app/',
    features: ['Real-time Updates', 'QR Ordering', 'Analytics Dashboard']
  },
  {
    title: 'Startupathon',
    description: 'Comprehensive hackathon management platform built with React and TypeScript. Features team formation, project submission, judging system, and real-time leaderboards.',
    tech: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: '🚀',
    color: 'from-orange-500 to-red-500',
    githubUrl: 'https://github.com/devavijha/Startup-clone',
    liveUrl: 'https://startup-clone.vercel.app/',
    features: ['Team Management', 'Live Judging', 'Real-time Leaderboard']
  }
]

const ProjectCard = ({ project, index }: { 
  project: typeof projectsData[0]; 
  index: number;
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
        {/* Project Image/Icon */}
        <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
          <div className="text-6xl">{project.image}</div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              variant="default" 
              size="sm"
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions and applications I&apos;ve built using modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to see more projects?</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for a complete collection of my work, including experimental projects and contributions to open source.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full"
              onClick={() => window.open('https://github.com/devavijha', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
