"use client"

import { motion } from "framer-motion"
import { ArrowRight, Leaf, Globe, Award, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-amber-950/30" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Floating Spice Elements */}
        <motion.div
          className="absolute top-1/4 left-[10%] opacity-30"
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm border border-red-500/20 flex items-center justify-center text-4xl">
            🌶️
          </div>
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[15%] opacity-30"
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/30 to-yellow-500/30 backdrop-blur-sm border border-amber-500/20 flex items-center justify-center text-3xl">
            🧄
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-[20%] opacity-25"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 backdrop-blur-sm border border-green-500/20 flex items-center justify-center text-2xl">
            🌿
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-[20%] opacity-25"
          animate={{ y: [15, -15, 15], rotate: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/30 to-amber-500/30 backdrop-blur-sm border border-yellow-500/20 flex items-center justify-center text-3xl">
            ⭐
          </div>
        </motion.div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8"
          >
            <Leaf className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">Premium Indian Spices Exporter</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Bringing the</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              True Flavors of India
            </span>
            <br />
            <span className="text-white">to the World</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            <span className="text-white font-semibold">High Stakes Marketing</span> is your trusted exporter and supplier 
            of premium spice powders, masala blends, seasonings, and instant mixes. 
            We deliver pure, aromatic, and high-quality products sourced and processed 
            with strict hygiene and global standards.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 py-6 text-lg shadow-lg shadow-amber-500/30 group"
            >
              <a href="#contact" className="flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 hover:text-amber-400 px-8 py-6 text-lg bg-transparent"
            >
              <a href="#products">View Products</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-10 border-t border-amber-500/20"
          >
            {[
              { icon: Globe, value: "Worldwide", label: "Market Covered" },
              { icon: Package, value: "100+", label: "Products Range" },
              { icon: Award, value: "Premium", label: "Quality Grade" },
              { icon: Leaf, value: "Pure", label: "Natural Spices" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-3 group-hover:border-amber-500/40 transition-colors">
                  <stat.icon className="w-7 h-7 text-amber-500" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-amber-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
