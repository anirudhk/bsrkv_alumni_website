'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, Globe, Award } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '2,500+',
      label: 'Active Alumni',
      description: 'Connected worldwide'
    },
    {
      icon: Calendar,
      value: '50+',
      label: 'Events Annually',
      description: 'Reunions & networking'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries',
      description: 'Global presence'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Strong',
      description: 'Building community'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Alumni Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving community of BSRKV alumni making their mark around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
