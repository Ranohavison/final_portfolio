'use client'

import { useState } from 'react'
import { ExternalLink, Github, Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'
// import {PinContainer} from "../ui/3d-pin";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with advanced payment processing, real-time inventory management, and comprehensive admin dashboard. Built with modern architecture for scalability.",
      image: "https://images.pexels.com/photos/4968964/pexels-photo-4968964.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent analytics platform with machine learning insights, real-time data visualization, and predictive analytics for business intelligence.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "AWS"],
      category: "frontend",
      demoUrl: "#",
      githubUrl: "#",
      date: "2024",
      featured: true
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices ecosystem with API gateway, service discovery, and distributed monitoring. Handles millions of requests daily.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "RabbitMQ"],
      category: "backend",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Real-Time Collaboration Tool",
      description: "Team collaboration platform with real-time editing, video conferencing, and project management features. Built for remote teams.",
      image: "https://images.pexels.com/photos/8849297/pexels-photo-8849297.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Socket.io", "WebRTC", "Express", "PostgreSQL"],
      category: "fullstack",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      image: "https://images.pexels.com/photos/4968964/pexels-photo-4968964.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Plaid"],
      category: "mobile",
      demoUrl: "#",
      githubUrl: "#",
      date: "2023",
      featured: true
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Infrastructure as Code solution for automated cloud deployment, monitoring, and scaling across multiple cloud providers.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Terraform", "AWS", "Docker", "Ansible", "Prometheus"],
      category: "devops",
      demoUrl: "#",
      githubUrl: "#",
      date: "2022",
      featured: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'devops', label: 'DevOps' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-48 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Showcase of innovative solutions and technical achievements
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">🌟 Highlighted Work</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-2xl overflow-hidden card-hover group"
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-ocean-600 to-ocean-500 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.demoUrl}
                        className="flex items-center px-6 py-3 bg-gradient-to-r from-ocean-600 to-ocean-500 text-white font-semibold rounded-lg hover:from-ocean-700 hover:to-ocean-600 transition-colors duration-300 group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="flex items-center px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 w-[47.5%] sm:w-auto rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-ocean-600 to-ocean-500 text-white shadow-lg'
                    : 'glass-effect text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-ocean-600 to-ocean-500 text-white text-xs font-semibold rounded-full">
                        ⭐
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-white/80 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 text-white/90 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoUrl}
                      className="flex items-center text-ocean-400 hover:text-ocean-300 transition-colors duration-200 text-sm group"
                    >
                      <ExternalLink className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <Github className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* View More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects