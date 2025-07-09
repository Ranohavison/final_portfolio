'use client'

import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 92, color: "from-pointer to-gradient-start/70" },
        { name: "Next.js", level: 87, color: "from-gray-600 to-gray-400" },
        { name: "TypeScript", level: 90, color: "from-yellow-500 to-yellow-300" },
        { name: "Tailwind CSS", level: 93, color: "from-teal-500 to-cyan-400" },
        { name: "Vue.js", level: 86, color: "from-green-500 to-emerald-400" },
        { name: "Angular", level: 83, color: "from-amber-500 to-amber-300" },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92, color: "from-green-600 to-green-400" },
        { name: "Python", level: 95, color: "from-yellow-500 to-yellow-300" },
        { name: "MySql", level: 93, color: "from-orange-600 to-orange-400" },
        { name: "PostgreSQL", level: 88, color: "from-blue-700 to-blue-500" },
        // { name: "MongoDB", level: 82, color: "from-green-700 to-green-500" },
        { name: "Express.js", level: 90, color: "from-gray-700 to-gray-500" },
        { name: "Laravel", level: 91, color: "from-purple-500 to-purple-400" },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        // { name: "AWS", level: 85, color: "from-orange-500 to-yellow-400" },
        { name: "Docker", level: 83, color: "from-blue-600 to-blue-400" },
        { name: "Git", level: 83, color: "from-gray-600 to-gray-400" },
        // { name: "Kubernetes", level: 75, color: "from-blue-700 to-purple-600" },
        // { name: "CI/CD", level: 88, color: "from-purple-600 to-pink-500" },
        // { name: "Terraform", level: 70, color: "from-purple-700 to-purple-500" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocean-400 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set spanning modern web technologies and cloud platforms
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-ocean-500 to-ocean-400 text-white shadow-lg scale-105'
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
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="text-xl font-bold text-white mb-4">Tools & Workflow</h4>
              <p className="text-white/70">Git, VS Code, Figma, Postman, Jest, Cypress</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center card-hover">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="text-xl font-bold text-white mb-4">Mobile Development</h4>
              <p className="text-white/70">React Native, Flutter, Progressive Web Apps</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center card-hover">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold text-white mb-4">Emerging Tech</h4>
              <p className="text-white/70">AI/ML Integration, GraphQL, WebAssembly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills