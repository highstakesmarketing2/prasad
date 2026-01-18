"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Building2, Users, Globe, Award } from "lucide-react"

const companyHighlights = [
  { icon: Building2, label: "Nature of Business", value: "Exporter, Supplier, Trader" },
  { icon: Users, label: "Team Size", value: "Dedicated Team" },
  { icon: Globe, label: "Market Covered", value: "Worldwide" },
  { icon: Award, label: "Quality Focus", value: "Premium Grade" },
]

const whyChooseUs = [
  "100% Pure & Natural Spices",
  "Strict Quality Control",
  "Hygienic Processing",
  "Flexible Order Quantities",
  "Competitive Pricing",
  "Timely Delivery",
  "Custom Packaging Options",
  "Global Shipping Support",
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              High Stakes Marketing
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="text-amber-500 font-semibold">High Stakes Marketing</span> is a growing 
              Exporter, Supplier, and Trader of premium spice powders, masala blends, seasonings, 
              and instant mixes based in Mumbai, India.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We deliver pure, aromatic, and high-quality products sourced and processed with strict 
              hygiene and global standards. With a focus on reliability, authenticity, and customer 
              satisfaction, we bring the true flavors of India to kitchens across the world.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We export premium-quality Indian spices in flexible quantities, catering to both 
              small trial orders and large bulk shipments as per global buyer requirements. Our 
              commitment to quality and customer service makes us a trusted partner for businesses 
              worldwide.
            </p>

            {/* Company Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {companyHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black/30 border border-amber-500/20 rounded-xl p-4"
                >
                  <item.icon className="w-8 h-8 text-amber-500 mb-2" />
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-3xl p-8 border border-amber-500/20">
              {/* Decorative Spices */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {["🌶️", "⭐", "🌿", "🧄", "🍂", "✨"].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="aspect-square rounded-2xl bg-black/30 border border-amber-500/20 flex items-center justify-center text-4xl"
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-2">
                  &ldquo;Bringing Authentic Indian Flavors to the World&rdquo;
                </p>
                <p className="text-amber-500">High Stakes Marketing</p>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-4 shadow-lg shadow-amber-500/30"
            >
              <p className="text-black font-bold text-lg">Mumbai, India</p>
              <p className="text-black/70 text-sm">Export Hub</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          id="why-us"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/30 border border-amber-500/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Why Choose <span className="text-amber-500">High Stakes Marketing?</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
