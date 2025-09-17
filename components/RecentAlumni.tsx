'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const RecentAlumni = () => {
  const alumni = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      batch: '2010',
      profession: 'Cardiologist',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      batch: '2012',
      profession: 'Software Engineer',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      batch: '2015',
      profession: 'Marketing Director',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'Michael Chen',
      batch: '2008',
      profession: 'Investment Banker',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      linkedin: '#'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recent Alumni Spotlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet some of our accomplished alumni who are making a difference in their fields
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {alumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-primary-600/20 group-hover:bg-primary-600/30 transition-colors duration-200"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-primary-600 font-medium mb-2">Batch of {person.batch}</p>
              <p className="text-gray-600 text-sm mb-2">{person.profession}</p>
              <p className="text-gray-500 text-xs mb-4">{person.location}</p>
              
              <a
                href={person.linkedin}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
              >
                Connect
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/alumni"
            className="btn-primary inline-flex items-center"
          >
            View All Alumni
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentAlumni
