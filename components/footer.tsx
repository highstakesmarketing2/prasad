"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, ArrowUp, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "About Us", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

const products = [
  "Red Chilli Powder",
  "Turmeric Powder",
  "Garam Masala",
  "Biryani Masala",
  "Coriander Powder",
  "Cumin Powder",
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-neutral-950 border-t border-amber-500/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-black font-bold text-lg">HS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">High Stakes</h3>
                <p className="text-xs text-amber-500 tracking-wider">MARKETING</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted exporter and supplier of premium Indian spices, masala powders, 
              seasonings, and instant mixes. Bringing authentic flavors to the world.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://wa.me/917039119025"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </Link>
              <Link
                href="https://www.instagram.com/highstakesmarketing/"
                target="_blank"
                className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center hover:bg-pink-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="#products"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-500 text-sm mb-1">Contact Person</p>
                <p className="text-white font-medium">Prasad Parab</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  204 Excel Chs, Azad Nagar, Veera Desai Road, 
                  Andheri West, Mumbai - 400053
                </span>
              </li>
              <li>
                <Link href="tel:+917039119025" className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span>+91 7039119025</span>
                </Link>
              </li>
              <li>
                <Link href="mailto:contact@highstakesmarketing.in" className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-sm">contact@highstakesmarketing.in</span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} High Stakes Marketing. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Premium Indian Spices Exporter | Mumbai, India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-black" />
      </motion.button>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/917039119025"
        target="_blank"
        className="fixed bottom-8 left-8 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </footer>
  )
}
