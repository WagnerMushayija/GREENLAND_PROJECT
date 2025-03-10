"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Loader } from "@googlemaps/js-api-loader"
import * as google from "@googlemaps/google-maps-services-js"

export default function Nearby() {
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    })

    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -1.9441, lng: 30.0619 }, // Kigali coordinates
        zoom: 14,
      })

      // Add markers for nearby attractions here
    })
  }, [])

  return (
    <section id="nearby" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nearby Attractions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="map" className="h-96 rounded-lg shadow-md"></div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span>Top-tier city hotels</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Bank headquarters & government offices</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span>Shopping malls, restaurants, and entertainment hubs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>Schools and hospitals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

