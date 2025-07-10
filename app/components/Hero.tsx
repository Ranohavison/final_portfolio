'use client'

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import {BackgroundGradientAnimation} from "@/app/ui/background-gradient-animation";
// import { motion } from "motion/react"

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundGradientAnimation />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">

            <h1 className="text-5xl text-7xl lg:text-8xl font-bold mb-3 mb-6">
              <span className="block text-white mb-1 mb-2"> Bonjour, je suis</span>
              <span className="block text-gradient animate-pulse">
                Ranohavison Mandresy
              </span>
            </h1>

            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-3xl text-white/90 mb-4 font-light">
                Développeur Full-Stack Junior
              </p>
              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Je conçois des expériences numériques exceptionnelles grâce aux technologies modernes. Spécialisé en React, Next.js, Node.js et architecture cloud.
              </p>
              <p className="text-base text-white/60 max-w-2xl mx-auto">
                Passionné par la création d’applications performantes, d’interfaces élégantes et de systèmes backend robustes qui ont un réel impact.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-6 justify-center mb-16 animate-slide-up">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary ocean-glow"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary hidden"
            >
              Get In Touch
            </button>
            <a href={"/fichiers/CV.pdf"} className="flex items-center justify-center px-6 py-4 glass-effect text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300" download>
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-4 text-xl glass-effect rounded-full text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 group"
                aria-label={social.label}
              >
                <social.icon size={24} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-2 hidden sm:block left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-all duration-300 animate-bounce group"
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