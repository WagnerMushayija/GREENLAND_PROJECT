"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/hero-4.jpg"
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
            href="https://www.booking.com/hotel/rw/greenland-plaza.html?aid=356980&label=gog235jc-1FCAsowwFCD2dyZWVubGFuZC1wbGF6YUgzWANowwGIAQGYATG4ARfIAQzYAQHoAQH4AQOIAgGoAgO4AqaFvL4GwAIB0gIkNjQzNDU5YTItMjVlMS00YTUzLTkyYzQtZGI3NjAzYzllNjc12AIF4AIB&sid=ba7feb5b38336ff837f7c5e1f63918b5&dest_id=-2181358&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1741619893&srpvid=ce396b94ab0d07dd&type=total&ucfs=1&"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
          >
            Book a Visit
          </a>
        </motion.div>
      </div>
    </section>
  )
}

