'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import AnimatedPerson from '@/components/AnimatedPerson'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript',
  'Axios', 'Redux', 'Rest API', 'Highcharts', 'MaterialUI',
  'Gitlab', 'NPM', 'Terminal & VSCode', 'Next.js', 'Jest.js', 'React Native'
]

const experiences = [
  {
    role: 'Associate Frontend Engineer',
    company: 'Packet Systems Indonesia - Crampas.ai',
    period: 'Apr 2024 – May 2025',
    description: [
      'Developed crampas.ai website using React.js and Next.js',
      'Built reusable components and implemented state management',
      'Integrated APIs and ensured cross-browser compatibility',
      'Optimized performance and maintained team collaboration',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js, Highcharts, Typescript, Material UI, Next.js',
  },
  {
    role: 'Middle Frontend Developer',
    company: 'SALT - PT.Ako Media Asia - MyOrbit Telkomsel',
    period: 'Apr 2023 – Feb 2024',
    description: [
      'Designed Redux pattern and integrated UI for MyOrbit Web',
      'Adapted design for Android app using React Native',
      'Improved tracker features and maintained cross-platform consistency',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js, Highcharts, Typescript',
  },
  {
    role: 'Junior Frontend Developer',
    company: 'SALT - PT.Ako Media Asia - MyOrbit Telkomsel',
    period: 'Nov 2021 – Mar 2023',
    description: [
      'Sliced and integrated UI designs for MyOrbit CMS',
      'Connected app to CMS for dynamic content across platforms',
      'Implemented React Hooks and tested features',
    ],
    stack: 'Jest.js, React-Native, Axios, Redux, React.js',
  },
  {
    role: 'Bootcamp Student Mobile Hybrid Development',
    company: 'Flexia App',
    period: 'June 2021 – Oct 2021',
    description: [
      'Learned React Native mobile development with Firebase',
      'Built tutoring service app with authentication and notifications',
    ],
    stack: 'React Native, Firebase',
  }
]

export default function Home() {
  const { theme } = useTheme()
  
  return (
    <div className="space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-center py-20 px-8 rounded-3xl shadow-2xl border transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 border-indigo-500/30'
            : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 border-blue-300/30'
        }`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8"
          >
            <AnimatedPerson />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-6xl font-extrabold mb-4 bg-gradient-to-r bg-clip-text text-transparent leading-tight py-2 ${
              theme === 'dark'
                ? 'from-white to-cyan-100'
                : 'from-gray-800 to-gray-900'
            }`}
          >
            Ario Budi Widagdo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-3xl font-semibold mb-8 ${
              theme === 'dark' ? 'text-cyan-100' : 'text-gray-800'
            }`}
          >
            Frontend Engineer
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`max-w-3xl leading-relaxed text-xl font-light text-center mx-auto ${
              theme === 'dark' ? 'text-white/90' : 'text-gray-700'
            }`}
          >
            During the 3.5 years I worked as a software engineer, I focused on coding well and efficiently,
            while being passionate about my work and always paying attention to technological developments.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`mt-10 space-y-3 text-lg font-medium text-center ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-600'
            }`}
          >
            <p className="flex items-center justify-center gap-3">📧 ariobwidagdo@gmail.com</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent relative ${
            theme === 'dark'
              ? 'from-cyan-400 to-purple-400'
              : 'from-blue-600 to-purple-600'
          }`}
        >
          Skills
          <div className={`absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r rounded-full ${
            theme === 'dark'
              ? 'from-cyan-400 to-purple-400'
              : 'from-blue-600 to-purple-600'
          }`}></div>
        </motion.h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              viewport={{ once: true }}
              className={`px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all cursor-default select-none transform border ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border-cyan-400/30 hover:border-cyan-400/50'
                  : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 border-blue-300/50 hover:border-blue-400/70'
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold mb-12 bg-gradient-to-r bg-clip-text text-transparent relative ${
            theme === 'dark'
              ? 'from-cyan-400 to-purple-400'
              : 'from-blue-600 to-purple-600'
          }`}
        >
          Experience
          <div className={`absolute -bottom-2 left-0 w-28 h-1 bg-gradient-to-r rounded-full ${
            theme === 'dark'
              ? 'from-cyan-400 to-purple-400'
              : 'from-blue-600 to-purple-600'
          }`}></div>
        </motion.h2>
        <div className="space-y-8">
          {experiences.map(({ role, company, period, description, stack }, index) => (
            <motion.article
              key={role + company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${
                 theme === 'dark'
                   ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-indigo-500/30'
                   : 'bg-gradient-to-br from-white to-gray-50 border-blue-200/50'
               }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                 theme === 'dark'
                   ? 'from-cyan-500/10 to-purple-500/10'
                   : 'from-blue-500/10 to-purple-500/10'
               }`}></div>
                <div className="relative z-10">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2 ${
                      theme === 'dark'
                        ? 'from-cyan-400 to-purple-400'
                        : 'from-blue-600 to-purple-600'
                    }`}
                  >
                    {role}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className={`italic text-lg mb-6 font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {company} • {period}
                  </motion.p>
                  <motion.ul 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`space-y-3 mb-6 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    {description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r rounded-full mt-2 flex-shrink-0 ${
                          theme === 'dark'
                            ? 'from-cyan-400 to-purple-400'
                            : 'from-blue-600 to-purple-600'
                        }`}></div>
                        <span className="text-lg leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </motion.ul>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-xl border ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-cyan-400/20'
                        : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300/30'
                    }`}
                  >
                    <p className={`font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      <span className={`font-bold ${
                        theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
                      }`}>Tech Stack:</span> {stack}
                    </p>
                  </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
