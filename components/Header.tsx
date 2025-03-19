"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Determine if we're at the top of the page
      setIsAtTop(currentScrollPos < 50)
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 ${
        isAtTop ? "bg-transparent shadow-sm" : "bg-white/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${isAtTop ? "text-white" : "text-gray-800"}`}>
          Greenland Plaza
        </Link>

        {/* Desktop Menu - hidden on mobile */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="#about"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#apartments"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              Apartments
            </Link>
          </li>
          <li>
            <Link
              href="#amenities"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              Amenities
            </Link>
          </li>
          <li>
            <Link
              href="#nearby"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              Nearby
            </Link>
          </li>
          <li>
            <Link
              href="#investment"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              Investment
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`${
                isAtTop ? "text-white" : "text-gray-800"
              } hover:opacity-90 relative after:absolute after:bottom-[-4px] after:left-0 after:bg-current after:h-[1px] after:w-0 hover:after:w-full after:transition-all after:duration-300`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          className={`md:hidden focus:outline-none ${isAtTop ? "text-white" : "text-gray-800"}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - slides in from the right */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-16 left-0 right-0 z-[10]"
        >
          <ul className="flex flex-col py-4">
            <li>
              <Link
                href="#about"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#apartments"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Apartments
              </Link>
            </li>
            <li>
              <Link
                href="#amenities"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
            </li>
            <li>
              <Link
                href="#nearby"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Nearby
              </Link>
            </li>
            <li>
              <Link
                href="#investment"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Investment
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block px-6 py-3 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

