'use client'

import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-white/80 flex items-center justify-center md:justify-start">
                Made with <Heart className="w-4 h-4 mx-2 text-red-400 fill-current animate-pulse" /> by Alex Morgan
              </p>
              <p className="text-white/60 text-sm mt-2">
                © 2024 All rights reserved. Built with Next.js & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-white/60 text-sm">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for work
              </div>
              
              <button
                onClick={scrollToTop}
                className="p-3 glass-effect rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50 text-sm">
              Designed and developed with passion for creating exceptional digital experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer