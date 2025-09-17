'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Target, Award, Heart, Globe, BookOpen } from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { number: '2,500+', label: 'Active Alumni' },
    { number: '25+', label: 'Countries' },
    { number: '15+', label: 'Years Strong' },
    { number: '50+', label: 'Events Annually' }
  ]

  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community and the lasting bonds formed during our school years.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, supporting each other in our personal and professional journeys.'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'We are committed to giving back to our school and community through various service initiatives.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We leverage our diverse global network to create positive impact worldwide.'
    }
  ]

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'President',
      batch: '2010',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      bio: 'Cardiologist and passionate advocate for alumni engagement.'
    },
    {
      name: 'Rajesh Kumar',
      position: 'Vice President',
      batch: '2012',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      bio: 'Tech entrepreneur dedicated to fostering innovation and mentorship.'
    },
    {
      name: 'Priya Sharma',
      position: 'Secretary',
      batch: '2015',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      bio: 'Marketing professional focused on building strong community connections.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About BSRKV Alumni Association
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Connecting generations of BSRKV graduates worldwide, fostering lifelong relationships, 
              and supporting our school community through meaningful engagement and service.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To strengthen the bonds between BSRKV alumni worldwide, support the continued growth 
              and development of our alma mater, and create opportunities for meaningful engagement, 
              mentorship, and service within our community.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that the relationships formed during our school years are the foundation 
              for lifelong friendships and professional networks that can make a real difference 
              in our lives and communities.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be the most vibrant and engaged alumni community, known for our commitment to 
              excellence, service, and the continued success of BSRKV and its students.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where every BSRKV graduate feels connected to their school 
              community and empowered to make a positive impact in their chosen field and society.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-500 mb-3">Batch of {member.batch}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our History</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                The BSRKV Alumni Association was founded in 2009 by a group of passionate graduates 
                who recognized the need for a formal organization to maintain connections between 
                alumni and support their alma mater.
              </p>
              <p>
                Over the years, we have grown from a small group of dedicated individuals to a 
                thriving community of over 2,500 active members across 25+ countries. Our association 
                has organized hundreds of events, raised significant funds for school development, 
                and created countless opportunities for networking and mentorship.
              </p>
              <p>
                Today, we continue to build on this strong foundation, leveraging technology and 
                innovative programs to strengthen our community and support the next generation 
                of BSRKV graduates.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPage
