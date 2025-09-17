'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2024',
      date: new Date('2024-03-15'),
      time: '6:00 PM - 10:00 PM',
      location: 'BSRKV School Campus',
      description: 'Join us for our biggest reunion of the year with dinner, music, and networking.',
      type: 'Reunion',
      attendees: 150
    },
    {
      id: 2,
      title: 'Career Networking Workshop',
      date: new Date('2024-02-28'),
      time: '2:00 PM - 5:00 PM',
      location: 'Online Event',
      description: 'Learn about career opportunities and connect with industry professionals.',
      type: 'Workshop',
      attendees: 75
    },
    {
      id: 3,
      title: 'Sports Day Alumni Match',
      date: new Date('2024-04-10'),
      time: '9:00 AM - 4:00 PM',
      location: 'School Sports Complex',
      description: 'Relive your school days with friendly sports competitions.',
      type: 'Sports',
      attendees: 50
    }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Reunion':
        return 'bg-blue-100 text-blue-800'
      case 'Workshop':
        return 'bg-green-100 text-green-800'
      case 'Sports':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t miss out on these exciting events and opportunities to reconnect with your school community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">{event.attendees} attending</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {event.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                  {format(event.date, 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-primary-600" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                  {event.location}
                </div>
              </div>

              <button className="w-full btn-primary group-hover:bg-primary-700 transition-colors">
                Register Now
              </button>
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
            href="/events"
            className="btn-secondary inline-flex items-center"
          >
            View All Events
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default UpcomingEvents
