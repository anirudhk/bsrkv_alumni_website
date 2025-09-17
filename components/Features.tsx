'use client'

import { motion } from 'framer-motion'
import { Users, Calendar, BookOpen, MessageSquare, Briefcase, Heart } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Users,
      title: 'Alumni Directory',
      description: 'Search and connect with fellow alumni from your batch, department, or location.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Calendar,
      title: 'Events & Reunions',
      description: 'Stay updated with upcoming events, reunions, and networking opportunities.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Memory Lane',
      description: 'Share and browse through photos, stories, and memories from your school days.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: MessageSquare,
      title: 'Discussion Forums',
      description: 'Engage in meaningful conversations and discussions with the alumni community.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Access job opportunities, mentorship programs, and career guidance.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Heart,
      title: 'Give Back',
      description: 'Contribute to scholarships, school development, and community initiatives.',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Connected
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides all the tools and features you need to maintain lifelong connections with your school community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
