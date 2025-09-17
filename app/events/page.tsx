'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Calendar, MapPin, Clock, Users, Filter, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')

  const events = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2024',
      date: new Date('2024-03-15'),
      time: '6:00 PM - 10:00 PM',
      location: 'BSRKV School Campus',
      description: 'Join us for our biggest reunion of the year with dinner, music, and networking opportunities. This is a great chance to reconnect with old friends and make new connections.',
      type: 'Reunion',
      attendees: 150,
      maxAttendees: 200,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Career Networking Workshop',
      date: new Date('2024-02-28'),
      time: '2:00 PM - 5:00 PM',
      location: 'Online Event',
      description: 'Learn about career opportunities and connect with industry professionals. Perfect for recent graduates and those looking to advance their careers.',
      type: 'Workshop',
      attendees: 75,
      maxAttendees: 100,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Sports Day Alumni Match',
      date: new Date('2024-04-10'),
      time: '9:00 AM - 4:00 PM',
      location: 'School Sports Complex',
      description: 'Relive your school days with friendly sports competitions. We will have cricket, football, and basketball matches.',
      type: 'Sports',
      attendees: 50,
      maxAttendees: 80,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Alumni Awards Ceremony',
      date: new Date('2024-05-20'),
      time: '7:00 PM - 9:00 PM',
      location: 'Grand Hotel Ballroom',
      description: 'Celebrate outstanding achievements of our alumni community. Awards will be given for various categories including professional excellence and community service.',
      type: 'Awards',
      attendees: 120,
      maxAttendees: 150,
      price: '$25',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Mentorship Program Launch',
      date: new Date('2024-03-05'),
      time: '3:00 PM - 5:00 PM',
      location: 'Online Event',
      description: 'Learn about our new mentorship program and how you can get involved as either a mentor or mentee.',
      type: 'Workshop',
      attendees: 40,
      maxAttendees: 60,
      price: 'Free',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Cultural Night 2024',
      date: new Date('2024-06-15'),
      time: '6:30 PM - 11:00 PM',
      location: 'Community Center',
      description: 'A night of cultural performances, food, and entertainment showcasing the diverse talents of our alumni community.',
      type: 'Cultural',
      attendees: 200,
      maxAttendees: 250,
      price: '$15',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop'
    }
  ]

  const categories = ['All', 'Reunion', 'Workshop', 'Sports', 'Awards', 'Cultural']
  const months = ['All', 'February', 'March', 'April', 'May', 'June']

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Reunion':
        return 'bg-blue-100 text-blue-800'
      case 'Workshop':
        return 'bg-green-100 text-green-800'
      case 'Sports':
        return 'bg-orange-100 text-orange-800'
      case 'Awards':
        return 'bg-purple-100 text-purple-800'
      case 'Cultural':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredEvents = events.filter(event => {
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || event.type === selectedCategory
    const matchesMonth = !selectedMonth || selectedMonth === 'All' || format(event.date, 'MMMM') === selectedMonth
    return matchesCategory && matchesMonth
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Alumni Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for exciting events, reunions, and networking opportunities throughout the year
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-900 px-2 py-1 rounded text-xs font-medium">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                </div>

                <div className="space-y-2">
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
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-primary-600" />
                    {event.attendees} / {event.maxAttendees} attending
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="w-full btn-primary group-hover:bg-primary-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your filters or check back later for new events.</p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="card bg-primary-50 border-primary-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Don&apos;t see an event you&apos;re interested in?</h3>
            <p className="text-gray-600 mb-4">Suggest an event or get involved in planning our next gathering.</p>
            <button className="btn-secondary">
              Suggest an Event
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EventsPage
