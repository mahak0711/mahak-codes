'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon, Download, Check } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isResumeClicked, setIsResumeClicked] = useState(false)

  const handleResumeClick = () => {
    setIsResumeClicked(true)
    console.log('Resume button clicked')

    // Reset the icon after 2 seconds
    setTimeout(() => {
      setIsResumeClicked(false)
    }, 2000)
  }

  return (
    <nav>
      <div className="fixed top-0 z-40 w-full border-b border-gray-200/20 bg-gray-800/50 backdrop-blur-md">
        <div className="flex items-center justify-between px-10 py-3 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-28 flex-1 justify-center">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            
          </div>

          {/* Resume Button */}
          <a
            href="/Resume.pdf" // Path to the PDF file
            download="Resume.pdf" // File name for download
            onClick={handleResumeClick}
            className="hidden lg:flex px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors items-center hover:animate-pulse active:scale-95 transform transition-transform duration-100"
          >
            {isResumeClicked ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            Resume
          </a>

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
            <Link to="/" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              Home
            </Link>
            <Link to="/projects" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-200 hover:text-white transition-colors block">
              About
            </Link>
            

            <a
              href="/Resume.pdf" // Path to the PDF file
              download="Resume.pdf" // File name for download
              onClick={handleResumeClick}
              className="px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors flex items-center hover:animate-pulse active:scale-95 transform transition-transform duration-100"
            >
              {isResumeClicked ? (
                <Check className="h-4 w-4 mr-2" />
              ) : (
                <Download className="h-4 w-4 mr-2" />
              )}
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
