'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Calendar } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'alumni@bsrkv.edu',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9:00 AM to 5:00 PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'BSRKV School Campus',
      description: '123 School Street, City, State 12345'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Fri: 9:00 AM - 5:00 PM',
      description: 'Saturday: 10:00 AM - 2:00 PM'
    }
  ]

  const departments = [
    {
      icon: Users,
      title: 'General Inquiries',
      email: 'info@bsrkv.edu',
      description: 'General questions about the alumni association'
    },
    {
      icon: Calendar,
      title: 'Events & Programs',
      email: 'events@bsrkv.edu',
      description: 'Questions about events, reunions, and programs'
    },
    {
      icon: MessageCircle,
      title: 'Support',
      email: 'support@bsrkv.edu',
      description: 'Technical support and account assistance'
    }
  ]

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions, suggestions, or support.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="events">Events & Programs</option>
                  <option value="support">Technical Support</option>
                  <option value="membership">Membership</option>
                  <option value="donation">Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-primary-600 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact by Department</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="card p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <dept.icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{dept.title}</h4>
                        <p className="text-sm text-primary-600">{dept.email}</p>
                        <p className="text-sm text-gray-600">{dept.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Our Campus</h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 School Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about our alumni association</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I join the alumni association?</h3>
              <p className="text-gray-600">Simply register on our website with your graduation details and contact information. Membership is free for all BSRKV graduates.</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I update my profile information?</h3>
              <p className="text-gray-600">Log into your account and go to the profile section to update your contact details, profession, and other information.</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I register for events?</h3>
              <p className="text-gray-600">Visit our events page, select the event you're interested in, and click the "Register Now" button to complete your registration.</p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I suggest an event or program?</h3>
              <p className="text-gray-600">Absolutely! We welcome suggestions from our alumni community. Contact our events team or use the contact form above.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage
