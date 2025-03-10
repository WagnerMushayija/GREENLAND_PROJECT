"use client"

import { useEffect } from "react"
import L from "leaflet"
import { motion } from "framer-motion"

export default function Nearby() {
  useEffect(() => {
    // Check if the map is already initialized
    const mapElement = document.getElementById("map")
    if (mapElement && !mapElement._leaflet_id) { // Check if the map has been initialized
      // Initialize the map with Leaflet
      const map = L.map(mapElement).setView([-1.9441, 30.0619], 14) // Set Kigali coordinates and zoom level

      // Add tile layer (OpenStreetMap tiles)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
         attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
      }).addTo(map);

      // Create custom marker icons
      const YAH = L.icon({
        iconUrl: '/pin.png', // Replace with your custom image URL
        iconSize: [30, 30], // Size of the icon
        iconAnchor: [15, 30], // Anchor point of the icon (positioned at the bottom of the icon)
        popupAnchor: [0, -30], // Position of the popup relative to the icon
      })

      const restaurantIcon = L.icon({
        iconUrl: '/restaurant.png', // Replace with your custom image URL
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      })

      // Add markers for nearby attractions with custom icons
      L.marker([-1.949307, 30.068924], { icon: restaurantIcon }) // Greenland coordinates with custom icon
        .addTo(map)
        .bindPopup("<b>The Bistro R</b>")
        .openPopup()

      L.marker([-1.9453, 30.0667], { icon: YAH }) // The Bistro coordinates with custom icon
        .addTo(map)
        .bindPopup("<b>Greenland Plaza</b>")
        .openPopup()
    }
  }, []) // Empty dependency array to ensure the effect runs only once

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
                <img src="/pin.png" alt="Hotel Icon" className="w-6 h-6" />
                <span>Greenland Plaza</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/restaurant.png" alt="Restaurant Icon" className="w-6 h-6" />
                <span>5 Stars Vibrant Restaurants, Pubs and Bars</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/restaurant.png" alt="Hotel Icon" className="w-6 h-6" />
                <span>Top-tier city hotels</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/restaurant.png" alt="Restaurant Icon" className="w-6 h-6" />
                <span>5 Stars Vibrant Restaurants, Pubs and Bars</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
