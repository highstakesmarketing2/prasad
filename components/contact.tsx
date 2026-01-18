"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Enquiry from Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Product Interest:* ${formData.product}

*Message:*
${formData.message}
    `.trim()
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/917039119025?text=${encodedMessage}`, '_blank')
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring authentic Indian spices to your business? Contact us for inquiries, 
            quotes, or to discuss your requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {/* Contact Person */}
              <div className="bg-neutral-900/50 border border-amber-500/20 rounded-xl p-6">
                <p className="text-gray-500 text-sm mb-1">Contact Person</p>
                <p className="text-white text-xl font-semibold">Prasad Parab</p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 bg-neutral-900/50 border border-amber-500/20 rounded-xl p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Address</p>
                  <p className="text-white">
                    204 Excel Chs, Azad Nagar,<br />
                    Veera Desai Road, Andheri West,<br />
                    Mumbai, Maharashtra - 400053, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <Link 
                href="tel:+917039119025"
                className="flex items-start gap-4 bg-neutral-900/50 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Mobile</p>
                  <p className="text-white text-lg font-semibold">+91 7039119025</p>
                </div>
              </Link>

              {/* Email */}
              <Link 
                href="mailto:contact@highstakesmarketing.in"
                className="flex items-start gap-4 bg-neutral-900/50 border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <p className="text-white">contact@highstakesmarketing.in</p>
                </div>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500">Connect with us:</span>
              <Link
                href="https://wa.me/917039119025"
                target="_blank"
                className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center hover:bg-green-500/20 transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-green-500" />
              </Link>
              <Link
                href="https://www.instagram.com/highstakesmarketing/"
                target="_blank"
                className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center hover:bg-pink-500/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-neutral-900/50 border border-amber-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">We&apos;ll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-black/50 border-amber-500/20 focus:border-amber-500 text-white placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-black/50 border-amber-500/20 focus:border-amber-500 text-white placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 234 567 8900"
                        className="bg-black/50 border-amber-500/20 focus:border-amber-500 text-white placeholder:text-gray-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="bg-black/50 border-amber-500/20 focus:border-amber-500 text-white placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm text-gray-400 mb-2">
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md bg-black/50 border border-amber-500/20 focus:border-amber-500 text-white outline-none"
                    >
                      <option value="">Select a product category</option>
                      <option value="Basic Spice Powders">Basic Spice Powders</option>
                      <option value="Indian Masala Powders">Indian Masala Powders</option>
                      <option value="Premium Seasonings">Premium Seasonings</option>
                      <option value="Instant Mixes">Instant Mixes</option>
                      <option value="Custom Requirements">Custom Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your requirements, quantity needed, etc."
                      className="bg-black/50 border-amber-500/20 focus:border-amber-500 text-white placeholder:text-gray-600 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message via WhatsApp
                        <MessageCircle className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-500 text-sm">
                    Or call us directly at{" "}
                    <Link href="tel:+917039119025" className="text-amber-500 hover:underline">
                      +91 7039119025
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
