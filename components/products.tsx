"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    title: "Basic Spice Powders",
    description: "Pure and aromatic essential spices for everyday cooking",
    products: ["Red Chilli Powder", "Turmeric Powder", "Coriander Powder", "Cumin Powder", "Black Pepper"],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    emoji: "🌶️"
  },
  {
    title: "Indian Masala Powders",
    description: "Authentic blends crafted for traditional Indian dishes",
    products: ["Garam Masala", "Biryani Masala", "Sambar Masala", "Chole Masala", "Kitchen King"],
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30",
    emoji: "⭐"
  },
  {
    title: "Premium Seasonings",
    description: "International herbs and seasonings for global cuisines",
    products: ["Pizza Seasoning", "Pasta Seasoning", "Peri Peri Masala", "Mixed Herbs", "Oregano"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    emoji: "🌿"
  },
  {
    title: "Instant Mixes",
    description: "Ready-to-use mixes for quick and delicious preparations",
    products: ["Dhokla Mix", "Pakora Mix", "Poha Masala", "Idli Dosa Mix", "Chutney Powder"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    emoji: "🍲"
  },
]

const featuredProducts = [
  { name: "Kashmiri Red Chilli Powder", form: "Fine Powder", purity: "100%", shelfLife: "12 Months" },
  { name: "Authentic Garam Masala", form: "Blended Powder", purity: "99%", shelfLife: "12 Months" },
  { name: "Premium Turmeric Powder", form: "Fine Powder", purity: "100%", shelfLife: "18 Months" },
  { name: "Aromatic Biryani Masala", form: "Coarse Blend", purity: "99%", shelfLife: "12 Months" },
  { name: "Pure Coriander Powder", form: "Fine Powder", purity: "100%", shelfLife: "12 Months" },
  { name: "Black Pepper Powder", form: "Fine Powder", purity: "100%", shelfLife: "18 Months" },
]

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
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
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Global Spices
            </span>{" "}
            Collection
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A complete range of Indian masalas, pure spice powders, herbs, seasonings, 
            and instant mixes crafted for everyday cooking, premium blends, and international cuisines.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group p-6 rounded-2xl bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor} hover:border-amber-500/50 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{category.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 text-xs rounded-full bg-black/30 text-gray-300 border border-white/10"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Featured <span className="text-amber-500">Premium Products</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-neutral-900/50 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-2xl">
                  🌿
                </div>
                <h4 className="text-lg font-semibold text-white mb-4 pr-14">{product.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Form:</span>
                    <span className="text-gray-300">{product.form}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Purity:</span>
                    <span className="text-amber-500 font-medium">{product.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shelf Life:</span>
                    <span className="text-gray-300">{product.shelfLife}</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 border-amber-500/30 text-amber-500 hover:bg-amber-500/10 bg-transparent"
                >
                  <a href="#contact">Enquiry Now</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            We export premium-quality Indian spices in flexible quantities, catering to both 
            small trial orders and large bulk shipments as per global buyer requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 group"
          >
            <a href="#contact" className="flex items-center gap-2">
              Request Product Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
