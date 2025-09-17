'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Filter, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const news = [
    {
      id: 1,
      title: 'BSRKV Alumni Association Launches New Mentorship Program',
      excerpt: 'A comprehensive mentorship program connecting current students with successful alumni for career guidance and support. This initiative aims to bridge the gap between academic learning and real-world professional experience.',
      content: 'The BSRKV Alumni Association is excited to announce the launch of our new mentorship program...',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      date: new Date('2024-01-15'),
      category: 'Announcement',
      readTime: '3 min read',
      author: 'Alumni Association'
    },
    {
      id: 2,
      title: 'Alumni Success Story: From BSRKV to Silicon Valley',
      excerpt: 'Read about how Priya Sharma, Class of 2015, built her career in tech and now leads a team at a major tech company. Her journey from BSRKV to Silicon Valley is truly inspiring.',
      content: 'Priya Sharma graduated from BSRKV in 2015 with a passion for technology...',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
      date: new Date('2024-01-10'),
      category: 'Success Story',
      readTime: '5 min read',
      author: 'Editorial Team'
    },
    {
      id: 3,
      title: 'School Infrastructure Upgrades Funded by Alumni Donations',
      excerpt: 'Thanks to generous donations from our alumni community, we have successfully upgraded the science laboratories and library. These improvements will benefit current and future students.',
      content: 'The BSRKV school administration is pleased to announce significant infrastructure upgrades...',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      date: new Date('2024-01-05'),
      category: 'School News',
      readTime: '4 min read',
      author: 'School Administration'
    },
    {
      id: 4,
      title: 'Annual Alumni Awards 2024 - Nominations Open',
      excerpt: 'Nominations are now open for the Annual Alumni Awards 2024. Recognize outstanding achievements in various fields including professional excellence, community service, and innovation.',
      content: 'The BSRKV Alumni Association is pleased to announce that nominations are now open...',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop',
      date: new Date('2024-01-01'),
      category: 'Announcement',
      readTime: '2 min read',
      author: 'Awards Committee'
    },
    {
      id: 5,
      title: 'Alumni Research Collaboration with MIT',
      excerpt: 'Dr. Aisha Patel, Class of 2013, has initiated a research collaboration between BSRKV and MIT, focusing on sustainable energy solutions. This partnership opens new opportunities for current students.',
      content: 'We are excited to announce a groundbreaking research collaboration...',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=250&fit=crop',
      date: new Date('2023-12-28'),
      category: 'Research',
      readTime: '6 min read',
      author: 'Research Team'
    },
    {
      id: 6,
      title: 'Cultural Exchange Program with International Alumni',
      excerpt: 'A new cultural exchange program has been launched, connecting BSRKV alumni across different countries. This program promotes cultural understanding and global networking.',
      content: 'The BSRKV Alumni Association is proud to launch our new cultural exchange program...',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop',
      date: new Date('2023-12-20'),
      category: 'Cultural',
      readTime: '4 min read',
      author: 'Cultural Committee'
    }
  ]

  const categories = ['All', 'Announcement', 'Success Story', 'School News', 'Research', 'Cultural']

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Announcement':
        return 'bg-blue-100 text-blue-800'
      case 'Success Story':
        return 'bg-green-100 text-green-800'
      case 'School News':
        return 'bg-purple-100 text-purple-800'
      case 'Research':
        return 'bg-orange-100 text-orange-800'
      case 'Cultural':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || article.category === selectedCategory
    return matchesSearch && matchesCategory
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
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest happenings in our alumni community and school
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
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative">
                  <Image
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(filteredNews[0].category)}`}>
                      {filteredNews[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {format(filteredNews[0].date, 'MMM dd, yyyy')}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    {filteredNews[0].readTime}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{filteredNews[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredNews[0].excerpt}</p>
                  <Link
                    href={`/news/${filteredNews[0].id}`}
                    className="btn-primary inline-flex items-center"
                  >
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(1).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="card hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  {format(article.date, 'MMM dd, yyyy')}
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="text-xs text-gray-500">
                  By {article.author}
                </div>

                <Link
                  href={`/news/${article.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                >
                  Read More
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default NewsPage
