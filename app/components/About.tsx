'use client'

import { Code, Palette, Database, Globe, Award, Users } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Compétences Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "bg-ocean-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Compétences Backend",
      description: "Node.js, Python, PostgreSQL, MySQL",
      color: "bg-ocean-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud & DevOps",
      // description: "AWS, Docker, Kubernetes, Microservices",
      description: "Docker",
      color: "bg-ocean-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Design centré utilisateur et prototypage",
      color: "bg-ocean-600"
    }
  ]

  const stats = [
    { number: "10+", label: "Projets réalisés" },
    { number: "1+", label: "Années d’expérience" },
    { number: "4+", label: "Retours positifs" },
    { number: "7+", label: "Technologies maîtrisées" }
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      
      <div className="w-full px-4 sm:px-12 md:px-20 xl:px-28 2xl:px-80 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              À propos de <span className="text-gradient">Moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-900 to-white mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Passionné par la création de solutions digitales qui font vraiment la différence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Full-Stack Developer Junior & Apprenant Passionné
                </h3>
                <div className="space-y-6 text-white/80 leading-relaxed">
                  <p>
                    Je suis actuellement en deuxième année de Génie Logiciel et Base de Données à ENI Fianarantsoa, où je découvre chaque jour un peu plus le monde passionnant du développement web. J’aime apprendre en pratiquant, que ce soit côté front-end ou back-end, et je m’efforce de créer des applications simples, efficaces et agréables à utiliser.
                  </p>
                  <p>
                    Je fais attention à écrire un code clair et organisé, tout en explorant les nouvelles technologies qui font évoluer le métier. Chaque projet est pour moi un défi qui m’aide à progresser et à mieux comprendre les bonnes pratiques du développement.
                  </p>
                  <p>
                    Au-delà du code, j’apprécie travailler en équipe, échanger des idées et construire des solutions qui ont du sens, prêt à apporter ma motivation et mon envie d’apprendre dans un environnement professionnel.
                  </p>
                </div>
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
                <h4 className="text-lg font-semibold text-white mb-2">Compétences techniques</h4>
                <p className="text-white/70">Progression en développement web et bases de données.</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-ocean-300 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Travail en équipe</h4>
                <p className="text-white/70">Participation active à des projets en groupe (2 à 5 membres).</p>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-12 h-12 text-ocean-300 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                <p className="text-white/70">Création d’applications utiles avec l’ambition de toucher toujours plus d’utilisateurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About