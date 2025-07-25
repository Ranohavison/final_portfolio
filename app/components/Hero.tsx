'use client'

import { ArrowDown, Download } from 'lucide-react'
import {BackgroundGradientAnimation} from "@/app/ui/background-gradient-animation";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";
// import { motion } from "motion/react"

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundGradientAnimation />
      </div>

      <div className="w-full px-4 sm:px-12 md:px-20 xl:px-44 2xl:px-80 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-8">
              <span className="block text-white mb-2"> Bonjour, je suis</span>
              <span className="block text-gradient animate-pulse">
                Ranohavison Mandresy
              </span>
            </h1>

            <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-2 sm:mb-3 font-light">
                Développeur Full-Stack Junior
              </p>
              <p className="text-md md:text-xl text-white/75 mb-2 sm:mb-3 leading-relaxed">
                Je conçois des expériences numériques exceptionnelles grâce aux technologies modernes. Spécialisé en React, Next.js, Node.js et architecture cloud.
              </p>
              <p className="text-md md:text-lg text-white/75 max-w-2xl mx-auto">
                Passionné par la création d’applications performantes, d’interfaces élégantes et de systèmes backend robustes qui ont un réel impact.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-6 justify-center mb-4 sm:mb-6 text-sm sm:text-lg animate-slide-up">
            <button
              onClick={() => scrollToSection('#projects')}
              className="hidden sm:inline-block btn-primary ocean-glow"
            >
              Mes projets
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="inline-block sm:hidden btn-primary ocean-glow"
            >
              Projets
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary hidden"
            >
              Get In Touch
            </button>
            <a href={"/fichiers/CV.pdf"} className="flex items-center justify-center px-6 py-2 sm:py-3 glass-effect text-white font-medium text-lg sm:text-xl rounded-lg hover:bg-white/10 transition-all duration-300" download>
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Télécharger CV</span>
              <span className="sm:hidden">CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: FiGithub, href: 'https://github.com/Ranohavison', label: 'GitHub' },
              { icon: FiLinkedin, href: 'www.linkedin.com/in/ranohavison-ranohavison-fortunah-mandresy-488040375', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:ranohavison399@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 sm:p-3 glass-effect rounded-full text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 group"
                aria-label={social.label}
              >
                <social.icon className="group-hover:scale-110 transition-transform duration-200 h-6 w-6 md:h-6 md:w-6" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-[0.01rem] hidden sm:block left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-all duration-300 animate-bounce group"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Scroll Down</span>
              <ArrowDown size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default Hero