'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alex.morgan@example.com",
      link: "mailto:alex.morgan@example.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      label: "GitHub", 
      url: "#",
      color: "hover:bg-gray-700"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn", 
      url: "#",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      label: "Twitter", 
      url: "#",
      color: "hover:bg-sky-500"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      label: "Discord", 
      url: "#",
      color: "hover:bg-indigo-600"
    }
  ]

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-400 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center p-6 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300 group card-hover"
                    >
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                        <p className="text-white/70">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-6 text-white">Follow Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center justify-center p-4 glass-effect rounded-xl text-white/70 hover:text-white transition-all duration-300 group card-hover ${social.color}`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </div>
                      <span className="ml-3 font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass-effect p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4 text-white">Availability</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-white/80">Available for new projects</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-ocean-400 rounded-full mr-3"></div>
                    <span className="text-white/80">Response time: 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    <span className="text-white/80">Timezone: PST (UTC-8)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 glass-effect border border-white/20 rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 glass-effect border border-white/20 rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 glass-effect border border-white/20 rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 glass-effect border border-white/20 rounded-xl focus:ring-2 focus:ring-ocean-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-400 text-white font-semibold rounded-xl hover:from-ocean-400 hover:to-ocean-300 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact