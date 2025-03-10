import { motion } from "framer-motion"
import {
  PocketIcon as Pool,
  Dumbbell,
  Car,
  CableCarIcon as Elevator,
  Power,
  Sun,
  Shield,
  ReceiptIcon as Reception,
  Wifi,
} from "lucide-react"

const amenities = [
  { icon: Pool, text: "Swimming pool" },
  { icon: Dumbbell, text: "Fully equipped gym" },
  { icon: Car, text: "Double-story basement parking" },
  { icon: Elevator, text: "Elevators" },
  { icon: Power, text: "Backup generators" },
  { icon: Sun, text: "Solar water heating" },
  { icon: Shield, text: "24/7 security with CCTV" },
  { icon: Reception, text: "Reception area" },
  { icon: Wifi, text: "High-speed optic fiber internet" },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Key Features & Amenities
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md"
            >
              <amenity.icon className="w-8 h-8 text-gray-800" />
              <span className="text-lg text-gray-700">{amenity.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

