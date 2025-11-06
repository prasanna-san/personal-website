"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
              together.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-card/50 border border-primary/20 rounded-xl p-8 space-y-6 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Project subject"
                required
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Your message..."
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(138, 43, 226, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} className={submitted ? "hidden" : "inline"} />
              <span>{submitted ? "Message Sent Successfully!" : "Send Message"}</span>
            </motion.button>
          </motion.form>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 },
              },
            }}
          >
            {[
              { icon: Mail, label: "Email", value: "contact@prasannajeet.dev" },
              { icon: Phone, label: "Phone", value: "+91 8957758898" },
              { icon: MapPin, label: "Location", value: "India" },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="text-center p-6 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-card transition-all duration-300 group/contact"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover/contact:bg-primary/20 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon size={24} className="text-primary" />
                </motion.div>
                <p className="text-muted-foreground text-sm font-medium">{item.label}</p>
                <p className="font-semibold mt-2 text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
