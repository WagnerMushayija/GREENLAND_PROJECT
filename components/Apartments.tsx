"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const apartmentTypes = [
  { type: "1-bedroom", price: "$82,000 - $97,000", rental: "$615 - $725/month", image: "/room-1.jpg" },
  { type: "2-bedroom", price: "$125,000 - $149,000", rental: "$935 - $1,115/month", image: "/room-2.jpg" },
  { type: "3-bedroom", price: "$158,000 - $187,000", rental: "$1,185 - $1,400/month", image: "/room-3.jpg" },
]

function ApartmentModel() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function Apartments() {
  const [selectedType, setSelectedType] = useState(apartmentTypes[0])

  return (
    <section id="apartments" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Apartment Types & Prices
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Buttons & Info */}
          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {apartmentTypes.map((apt) => (
                <button
                  key={apt.type}
                  onClick={() => setSelectedType(apt)}
                  className={`py-2 px-4 rounded-full ${
                    selectedType.type === apt.type ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {apt.type}
                </button>
              ))}
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">{selectedType.type}</h3>
              <p className="text-lg mb-2">Price: {selectedType.price}</p>
              <p className="text-lg mb-4">Rental: {selectedType.rental}</p>
              <a
                href="https://www.booking.com/hotel/rw/greenland-plaza.html?aid=356980&label=gog235jc-1FCAsowwFCD2dyZWVubGFuZC1wbGF6YUgzWANowwGIAQGYATG4ARfIAQzYAQHoAQH4AQOIAgGoAgO4AqaFvL4GwAIB0gIkNjQzNDU5YTItMjVlMS00YTUzLTkyYzQtZGI3NjAzYzllNjc12AIF4AIB&sid=ba7feb5b38336ff837f7c5e1f63918b5&dest_id=-2181358&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1741619893&srpvid=ce396b94ab0d07dd&type=total&ucfs=1&"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* Right Section - Image Display */}
          <div className="h-96 flex justify-center items-center bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={selectedType.image}
              alt={selectedType.type}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

