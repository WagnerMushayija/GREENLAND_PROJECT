import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Apartments from "../components/Apartments"
import Amenities from "../components/Amenities"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Nearby from "../components/Nearby"
import Investment from "../components/Investment"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Apartments />
      <Amenities />
      <Nearby />
      <Investment />
      <Contact />
      <Footer />
    </main>
  )
}

