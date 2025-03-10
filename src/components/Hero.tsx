import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero-image.jpg"
        alt="Aerial view of Greenland Plaza"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Luxury Living in the Heart of Kigali
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-x-4"
        >
          <a
            href="#apartments"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
          >
            Explore Apartments
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Book a Visit
          </a>
        </motion.div>
      </div>
    </section>
  )
}

