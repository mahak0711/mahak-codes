'use client'

import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon, Download, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isResumeClicked, setIsResumeClicked] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const location = useLocation()

  const handleResumeClick = () => {
    setIsResumeClicked(true)
    setTimeout(() => setIsResumeClicked(false), 2000)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <nav>
      <motion.div
        className={`fixed top-0 z-40 w-full border-b transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'border-gray-200/20 bg-gray-800/30 backdrop-blur-md'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
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
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="relative text-sm text-gray-400 hover:text-white transition-colors py-1"
              >
                {label}
                {location.pathname === to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            href="/Resume.pdf"
            download="Resume.pdf"
            onClick={handleResumeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors items-center"
          >
            {isResumeClicked ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            Resume
          </motion.a>

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
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={to}
                      className={`text-sm font-medium transition-colors block py-2 px-2 rounded ${
                        location.pathname === to
                          ? 'text-orange-400'
                          : 'text-gray-200 hover:text-white'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <a
                    href="/Resume.pdf"
                    download="Resume.pdf"
                    onClick={() => {
                      handleResumeClick()
                      setMobileMenuOpen(false)
                    }}
                    className="px-4 py-2 text-sm text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors flex items-center mt-2 w-fit"
                  >
                    {isResumeClicked ? (
                      <Check className="h-4 w-4 mr-2" />
                    ) : (
                      <Download className="h-4 w-4 mr-2" />
                    )}
                    Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  )
}
