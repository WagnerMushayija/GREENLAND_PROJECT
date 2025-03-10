import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Greenland Plaza
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="#apartments" className="text-gray-600 hover:text-gray-900">
              Apartments
            </Link>
          </li>
          <li>
            <Link href="#amenities" className="text-gray-600 hover:text-gray-900">
              Amenities
            </Link>
          </li>
          <li>
            <Link href="#nearby" className="text-gray-600 hover:text-gray-900">
              Nearby
            </Link>
          </li>
          <li>
            <Link href="#investment" className="text-gray-600 hover:text-gray-900">
              Investment
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}

