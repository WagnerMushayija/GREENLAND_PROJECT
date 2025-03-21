import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Greenland Plaza
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              Greenland Plaza is a premium residential development located in the heart of Kigali City Center. Our
              modern architecture and prime location offer an unparalleled living experience, combining luxury,
              convenience, and style.
            </p>
            <p className="text-lg text-gray-700">
              With state-of-the-art amenities and breathtaking views of the city, Greenland Plaza sets a new standard
              for urban living in Rwanda's capital.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <Image src="/about-1.jpg" alt="Greenland Plaza Exterior" width={300} height={200} className="rounded-lg" />
            <Image src="/about-2.jpg" alt="Greenland Plaza Interior" width={300} height={200} className="rounded-lg" />
            <Image src="/about-3.jpg" alt="Greenland Plaza Amenities" width={300} height={200} className="rounded-lg" />
            <Image src="/about-4.jpg" alt="Greenland Plaza View" width={300} height={200} className="rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

