'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon, Download, Check } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isResumeClicked, setIsResumeClicked] = useState(false)

  const handleResumeClick = () => {
    setIsResumeClicked(true)
    // Add your resume download logic here
    console.log('Resume button clicked')
    
    // Reset the icon after 2 seconds
    setTimeout(() => {
      setIsResumeClicked(false)
    }, 2000)
  }

  return (
    <nav>
      <div className="fixed top-0 z-40 w-full border-b border-gray-200/20 bg-transparent">
        <div className="flex items-center justify-between px-10 py-2 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-200">
              Your Logo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-28 flex-1 justify-center">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Resume Button */}
          <button
            onClick={handleResumeClick}
            className="hidden lg:flex px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors items-center hover:animate-pulse active:scale-95 transform transition-transform duration-100"
          >
            {isResumeClicked ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-200" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-4 py-2 space-y-4">
            <Link href="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              Contact
            </Link>
            
            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeClick}
              className="px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors flex items-center hover:animate-pulse active:scale-95 transform transition-transform duration-100"
            >
              {isResumeClicked ? (
                <Check className="h-4 w-4 mr-2" />
              ) : (
                <Download className="h-4 w-4 mr-2" />
              )}
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

