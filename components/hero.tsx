"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [parallaxY, setParallaxY] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Spring Boot Developer",
    "Next.js Developer",
    "React.js Developer",
  ]

  useEffect(() => {
    // Typewriter effect
    const currentRole = roles[currentRoleIndex]
    const typeSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        } else {
          // Finished typing, wait 2 seconds then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, currentRoleIndex, isDeleting])

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.5)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
        {/* Primary gradient orb */}
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-primary/25 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Accent gradient orb */}
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl mix-blend-screen"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        {/* Additional subtle orb for depth */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl mix-blend-screen -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient">
              Hi, I'm Prasannajeet
            </span>
          </motion.h1>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight min-h-[1.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {" "}
              <span className="inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px]">
                {displayedText}
                <span className="inline-block w-0.5 h-[0.9em] bg-primary ml-1.5 align-middle animate-blink">|</span>
              </span>
            </span>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            who transforms ideas into fast, scalable, and user-centric digital solutions. I believe in building fast and shipping fast, iterating quickly to meet business needs.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(138, 43, 226, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(138, 43, 226, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("#about")}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2 hover:border-primary/80 transition-colors duration-300"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
