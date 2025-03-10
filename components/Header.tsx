"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${
        scrolled ? "bg-white text-blue-900" : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Greenland Plaza
        </Link>
        <ul className="flex space-x-6">
          <li className="relative group">
            <Link
              href="#about"
              className="hover:text-gray-900 transition-all duration-300"
            >
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="#apartments"
              className="hover:text-gray-900 transition-all duration-300"
            >
              Apartments
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="#amenities"
              className="hover:text-gray-900 transition-all duration-300"
            >
              Amenities
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="#nearby"
              className="hover:text-gray-900 transition-all duration-300"
            >
              Nearby
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="#investment"
              className="hover:text-gray-900 transition-all duration-300"
            >
              Investment
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link
              href="#contact"
              className="hover:text-gray-900 transition-all duration-300"
            >
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
