'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'BSRKV Alumni Association Launches New Mentorship Program',
      excerpt: 'A comprehensive mentorship program connecting current students with successful alumni for career guidance and support.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      date: new Date('2024-01-15'),
      category: 'Announcement',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Alumni Success Story: From BSRKV to Silicon Valley',
      excerpt: 'Read about how Priya Sharma, Class of 2015, built her career in tech and now leads a team at a major tech company.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop',
      date: new Date('2024-01-10'),
      category: 'Success Story',
      readTime: '5 min read'
    },
    {
      id: 3,
      title: 'School Infrastructure Upgrades Funded by Alumni Donations',
      excerpt: 'Thanks to generous donations from our alumni community, we have successfully upgraded the science laboratories and library.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop',
      date: new Date('2024-01-05'),
      category: 'School News',
      readTime: '4 min read'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Announcement':
        return 'bg-blue-100 text-blue-800'
      case 'Success Story':
        return 'bg-green-100 text-green-800'
      case 'School News':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

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
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings in our alumni community and school
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/news"
            className="btn-secondary inline-flex items-center"
          >
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsSection
