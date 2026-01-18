import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Products from "@/components/products"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
