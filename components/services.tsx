"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: "⚡",
      title: "Web Development",
      description: "Building fast, responsive websites with modern frameworks and best practices.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Ensuring your applications work flawlessly across all devices and screen sizes.",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Designing scalable APIs and databases to power your applications.",
    },
    {
      icon: "🚀",
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and user experience.",
    },
    {
      icon: "🔐",
      title: "Security",
      description: "Implementing best practices to keep your applications and data secure.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" variants={itemVariants}>
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed" variants={itemVariants}>
            Comprehensive solutions tailored to bring your vision to life with cutting-edge technology and expert
            execution.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative rounded-xl border border-primary/20 bg-card/50 p-6 overflow-hidden hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-4xl mb-4 inline-block"
                  whileHover={{ rotateZ: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
