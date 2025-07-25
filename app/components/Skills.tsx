'use client'

import { useState } from 'react'
import {skillCategories} from "@/app/data/skills";
import {FaHandsHelping, FaTools} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa6";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      
      <div className="w-full px-4 sm:px-12 md:px-20 xl:px-44 2xl:px-80 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-6">
              Compétences <span className="text-gradient">Techniques</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Maîtrise progressive des technologies web modernes et des plateformes cloud.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-ocean-600 to-ocean-500 text-white shadow-lg'
                    : 'glass-effect text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="glass-effect p-8 sm:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-12 text-white">
              {skillCategories[activeCategory].title} Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <span className="text-white/70 font-medium">{skill.level}%</span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl text-center card-hover">
              <div className="flex justify-center text-4xl text-ocean-400 mb-4"><FaTools size={30}/></div>
              <h4 className="text-xl font-bold text-white mb-4">Outils & Méthodes</h4>
              <p className="text-white/70">Git, VS Code, Figma, Postman, Cypress</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center card-hover">
              <div className="flex justify-center text-4xl text-ocean-400 mb-4"><FaLaptopCode size={30}/></div>
              <h4 className="text-xl font-bold text-white mb-4">Centres d’intérêt tech</h4>
              <p className="text-white/70">Développement web front-end et back-end, Design UX/UI</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center card-hover">
              <div className="flex justify-center text-4xl text-ocean-400 mb-4"><FaHandsHelping size={30} /></div>
              <h4 className="text-xl font-bold text-white mb-4">Soft Skills</h4>
              <p className="text-white/70">Communication, travail en équipe, gestion du temps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills