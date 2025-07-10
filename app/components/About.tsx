'use client'

import { Code, Palette, Database, Globe, Award, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Mastery",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "bg-ocean-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Excellence",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "bg-ocean-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "AWS, Docker, Kubernetes, Microservices",
      color: "bg-ocean-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered design and prototyping",
      color: "bg-ocean-600"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Happy Clients" },
    { number: "15+", label: "Technologies" }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating digital solutions that make a real impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Full-Stack Developer & Problem Solver
                </h3>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    With over 5 years of experience in web development, I specialize in creating 
                    robust, scalable applications that deliver exceptional user experiences. 
                    My journey began with a curiosity for technology and has evolved into a 
                    passion for crafting innovative digital solutions.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying current with 
                    emerging technologies. Whether building responsive frontends, designing 
                    efficient APIs, or architecting cloud infrastructure, I approach each 
                    project with meticulous attention to detail.
                  </p>
                  <p>
                    Beyond coding, I&apos;m passionate about mentoring developers, contributing to
                    open-source projects, and sharing knowledge with the tech community.
                  </p>
                </div>à
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="glass-effect p-6 rounded-xl text-center card-hover">
                    <div className="text-2xl font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="glass-effect p-8 rounded-2xl card-hover group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-ocean-950">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="glass-effect p-8 rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="w-12 h-12 text-ocean-300 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Certified Professional</h4>
                <p className="text-white/70">AWS Solutions Architect & Google Cloud Professional</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-ocean-300 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Team Leadership</h4>
                <p className="text-white/70">Led cross-functional teams of 5-10 developers</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-ocean-300 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Global Impact</h4>
                <p className="text-white/70">Applications serving 1M+ users worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About