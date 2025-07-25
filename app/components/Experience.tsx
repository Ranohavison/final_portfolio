'use client'

import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of microservices architecture serving 1M+ users with 99.9% uptime",
        "Mentored team of 8 junior developers and established coding standards",
        "Improved application performance by 40% through optimization and caching strategies",
        "Collaborated with product team to deliver 15+ major features on schedule"
      ],
      technologies: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Docker"],
      achievements: [
        "Employee of the Year 2023",
        "Led migration to microservices",
        "Reduced deployment time by 60%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Built and maintained customer-facing web applications from scratch",
        "Developed RESTful APIs and integrated 10+ third-party services",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Worked directly with clients to gather requirements and deliver solutions"
      ],
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Redis", "GCP"],
      achievements: [
        "Launched 3 major products",
        "Increased user engagement by 35%",
        "Built scalable architecture"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: [
        "Created responsive websites for 20+ clients across various industries",
        "Collaborated with designers to implement pixel-perfect UIs",
        "Optimized websites for performance achieving 95+ Lighthouse scores",
        "Maintained and updated existing client websites and applications"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Sass", "jQuery", "WordPress"],
      achievements: [
        "100% client satisfaction rate",
        "Delivered 20+ projects on time",
        "Improved site speeds by 50%"
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"></div>
      
      <div className="w-full px-4 sm:px-12 md:px-20 xl:px-44 2xl:px-80 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              My career progression and key achievements in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-600 via-white to-ocean-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-ocean-500 to-white rounded-full border-4 border-ocean-950 shadow-lg"></div>

                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'
                }`}>
                  <div className="glass-effect p-8 rounded-2xl card-hover">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center text-white/60 text-sm mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                        <div className="flex items-center text-ocean-300">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <span className="hidden sm:block text-white/40">•</span>
                        <div className="flex items-center text-white/70">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      
                      <span className="inline-block px-3 py-1 bg-ocean-500/20 text-ocean-300 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="text-white/80 mb-6 space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-ocean-400 mr-3 mt-1.5 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/90 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white/90 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Key Achievements:
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-ocean-300 text-sm">
                            <span className="w-2 h-2 bg-ocean-300 rounded-full mr-3 flex-shrink-0"></span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-20 glass-effect p-8 rounded-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">1M+</div>
                <div className="text-white/70">Users Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-white/70">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience