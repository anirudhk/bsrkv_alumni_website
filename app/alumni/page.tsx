'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Search, Filter, MapPin, Briefcase, Calendar, ExternalLink } from 'lucide-react'

const AlumniPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBatch, setSelectedBatch] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedProfession, setSelectedProfession] = useState('')

  const alumni = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      batch: '2010',
      profession: 'Cardiologist',
      location: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'Mount Sinai Hospital'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      batch: '2012',
      profession: 'Software Engineer',
      location: 'Bangalore, India',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'Google'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      batch: '2015',
      profession: 'Marketing Director',
      location: 'London, UK',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'Unilever'
    },
    {
      id: 4,
      name: 'Michael Chen',
      batch: '2008',
      profession: 'Investment Banker',
      location: 'Singapore',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'Goldman Sachs'
    },
    {
      id: 5,
      name: 'Dr. Aisha Patel',
      batch: '2013',
      profession: 'Research Scientist',
      location: 'Boston, USA',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'MIT'
    },
    {
      id: 6,
      name: 'David Wilson',
      batch: '2011',
      profession: 'Entrepreneur',
      location: 'San Francisco, USA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      linkedin: '#',
      company: 'TechStart Inc.'
    }
  ]

  const batches = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  const locations = ['New York, USA', 'Bangalore, India', 'London, UK', 'Singapore', 'Boston, USA', 'San Francisco, USA']
  const professions = ['Cardiologist', 'Software Engineer', 'Marketing Director', 'Investment Banker', 'Research Scientist', 'Entrepreneur']

  const filteredAlumni = useMemo(() => {
    return alumni.filter(person => {
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           person.company.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBatch = !selectedBatch || person.batch === selectedBatch
      const matchesLocation = !selectedLocation || person.location === selectedLocation
      const matchesProfession = !selectedProfession || person.profession === selectedProfession

      return matchesSearch && matchesBatch && matchesLocation && matchesProfession
    })
  }, [searchTerm, selectedBatch, selectedLocation, selectedProfession])

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
              Alumni Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow BSRKV alumni from around the world. Search by name, batch, location, or profession.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-8"
        >
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, profession, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Batches</option>
                  {batches.map(batch => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                <select
                  value={selectedProfession}
                  onChange={(e) => setSelectedProfession(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Professions</option>
                  {professions.map(profession => (
                    <option key={profession} value={profession}>{profession}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredAlumni.length} of {alumni.length} alumni
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedBatch('')
                  setSelectedLocation('')
                  setSelectedProfession('')
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-center">
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
                <p className="text-gray-600 text-sm mb-1">{person.profession}</p>
                <p className="text-gray-500 text-xs mb-3">{person.company}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                    {person.location}
                  </div>
                </div>

                <a
                  href={person.linkedin}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Filter className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No alumni found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AlumniPage
