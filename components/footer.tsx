"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [newsletter, setNewsletter] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setNewsletter("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.footer
      className="border-t border-border bg-background/50 backdrop-blur"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12 p-6 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-accent/10 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Subscribe to get the latest articles, projects, and insights delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 md:w-auto w-full">
              <input
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                placeholder="your@email.com"
                className="px-4 py-2 rounded-lg bg-background border border-primary/20 focus:outline-none focus:border-primary transition-colors text-sm flex-grow md:flex-grow-0"
                required
              />
              <motion.button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors flex items-center gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                {subscribed ? "Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2">
              Prasannajeet
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer creating amazing web experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    className="hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5 text-muted-foreground text-sm">
              {["Web Development", "UI/UX Design", "Backend APIs", "Performance"].map((service) => (
                <li key={service} className="hover:text-primary transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card border border-primary/20 flex items-center justify-center hover:border-primary/50 hover:bg-card/80 transition-all"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon size={18} className="text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-border pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm gap-4">
            <p>© {currentYear} Prasannajeet. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ x: 2 }}>
                Privacy Policy
              </motion.a>
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ x: 2 }}>
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
