import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Greenland Plaza</h3>
            <p className="text-gray-400">Luxury Living in the Heart of Kigali</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#apartments" className="text-gray-400 hover:text-white">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-gray-400 hover:text-white">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#nearby" className="text-gray-400 hover:text-white">
                  Nearby
                </Link>
              </li>
              <li>
                <Link href="#investment" className="text-gray-400 hover:text-white">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Greenland Plaza, Kigali City Center, Rwanda</p>
            <p className="text-gray-400">Phone: +250 123 456 789</p>
            <p className="text-gray-400">Email: info@greenlandplaza.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Greenland Plaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

