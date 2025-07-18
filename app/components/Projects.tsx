'use client'

import { useState } from 'react'
import { ExternalLink, Calendar } from 'lucide-react'
import Image from 'next/image'
import {filters, projects} from "@/app/data/projects";
import {FaGithub} from "react-icons/fa";
// import {PinContainer} from "../ui/3d-pin";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      
      <div className="w-full px-4 sm:px-12 md:px-20 xl:px-28 2xl:px-80 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Projets <span className="text-gradient">Phare</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Présentation des solutions innovantes et des réalisations techniques marquantes
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">🌟 Projets en Vedette</h3>
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
                        href={project.demoUrl !== "#" ? project.demoUrl : undefined}
                        onClick={project.demoUrl === "#" ? (e) => e.preventDefault() : undefined}
                        className={`flex items-center px-6 py-3 font-semibold rounded-lg transition-colors duration-300 group
    ${project.demoUrl === "#"
                          ? "bg-primary-600 cursor-not-allowed text-gray-500" // style disabled
                          : "bg-gradient-to-r from-ocean-600 to-ocean-500 text-white hover:from-ocean-700 hover:to-ocean-600"
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Live Demo
                      </a>

                      <a 
                        href={project.githubUrl}
                        className="flex items-center px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
                      >
                        <FaGithub className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
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
                      href={project.demoUrl !== "#" ? project.demoUrl : undefined}
                      onClick={project.demoUrl === "#" ? (e) => e.preventDefault() : undefined}
                      className={`flex items-center text-sm group transition-colors duration-200
    ${project.demoUrl === "#"
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-ocean-400 hover:text-ocean-300"
                      }`}
                    >
                      <ExternalLink className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>

                    <a 
                      href={project.githubUrl}
                      className="flex items-center text-white/70 hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <FaGithub className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* View More */}
          {/*<div className="text-center mt-16">*/}
          {/*  <button className="inline-flex items-center px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 group">*/}
          {/*    Tous les projets*/}
          {/*    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  )
}

export default Projects