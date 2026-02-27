'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset <= 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToBottom}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 group"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" />

          <motion.div
            className="relative rounded-full p-3 backdrop-blur-xl border border-orange-500/30"
            style={{
              background: 'linear-gradient(135deg, rgba(255,107,0,0.9), rgba(229,93,0,0.9))',
              boxShadow: '0 0 20px rgba(255,107,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(255,107,0,0.5)' }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, 6, 0] }}
            transition={{
              y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <ChevronDown className="w-5 h-5 text-white" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
