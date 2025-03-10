import { motion } from "framer-motion"

export default function Investment() {
  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Investment & Rental Plan
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">4-Year Monthly Guaranteed Rental Plan</h3>
            <p className="text-lg text-gray-700 mb-6">
              From January 2024 to December 2027, we offer a guaranteed monthly rental plan for investors, providing a
              stable and predictable return on your investment.
            </p>
            <h4 className="text-xl font-semibold mb-2">Benefits for Investors:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Guaranteed monthly income</li>
              <li>Professional property management</li>
              <li>Potential for capital appreciation</li>
              <li>Hassle-free ownership experience</li>
            </ul>
            <p className="text-lg text-gray-700">
              With Greenland Plaza's prime location and high-quality construction, your investment is poised for
              excellent returns in Kigali's growing real estate market.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

