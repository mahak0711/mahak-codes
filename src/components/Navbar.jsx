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
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,107,0,0.08),0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent backdrop-blur-md'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Bottom border line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.15), transparent)' }}
        />

        <div className="flex items-center justify-between px-10 py-3.5 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <motion.img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-8 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,107,0,0.4)]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-28 flex-1 justify-center">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1.5 px-1 ${
                  location.pathname === to ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {label}
                {location.pathname === to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #ff6b00, #ff8533)',
                      boxShadow: '0 0 8px rgba(255,107,0,0.4)',
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
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
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,107,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex px-5 py-2 text-sm font-medium text-white rounded-lg items-center gap-2 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #ff6b00, #e55d00)',
              border: '1px solid rgba(255,140,51,0.3)',
            }}
          >
            <AnimatePresence mode="wait">
              {isResumeClicked ? (
                <motion.span key="check" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}>
                  <Check className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span key="download" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                  <Download className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
            Resume
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <XIcon className="h-5 w-5 text-zinc-200" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <MenuIcon className="h-5 w-5 text-zinc-200" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, height: 'auto', filter: 'blur(0px)' }}
              exit={{ opacity: 0, height: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl overflow-hidden border-t border-white/5"
            >
              <div className="p-4 space-y-1">
                {navLinks.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={to}
                      className={`text-sm font-medium transition-all block py-2.5 px-3 rounded-lg ${
                        location.pathname === to
                          ? 'text-orange-400 bg-orange-500/10'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
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
                  transition={{ delay: 0.18, duration: 0.3 }}
                  className="pt-2"
                >
                  <a
                    href="/Resume_Mahak.pdf"
                    download="Resume_Mahak.pdf"
                    onClick={() => {
                      handleResumeClick()
                      setMobileMenuOpen(false)
                    }}
                    className="px-4 py-2.5 text-sm font-medium text-white rounded-lg transition-colors flex items-center gap-2 w-fit"
                    style={{ background: 'linear-gradient(135deg, #ff6b00, #e55d00)' }}
                  >
                    {isResumeClicked ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Download className="h-4 w-4" />
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
