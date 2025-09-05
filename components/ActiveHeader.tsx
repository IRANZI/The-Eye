'use client'

import { Eye } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ActiveHeader() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about']
      const scrollPosition = window.scrollY + 100 // Offset for fixed header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 64 // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <Eye className="w-12 h-12 text-primary" />
            </div>
            <span className="text-xl font-bold text-secondary">The Eye</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, 'hero')}
              className={`transition-colors ${
                activeSection === 'hero' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className={`transition-colors ${
                activeSection === 'about' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              About
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
            <Link href="/signup" className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium">
             Get Started
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  )
}
