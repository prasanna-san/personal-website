"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"

const AnimatedArrow = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.span
      className="inline-block"
      animate={isHovered ? { x: 0 } : { x: [0, 3, 0] }}
      transition={
        isHovered
          ? { duration: 0.2 }
          : {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      →
    </motion.span>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Live School Website",
      description:
        "A comprehensive school management platform built with Next.js, featuring student dashboards, course management, and real-time notifications.",
      tags: ["Next.js", "Tailwind CSS", "MongoDB", "Express"],
      image: "/school-dashboard.png",
      link: "#",
    },
    {
      title: "Music Player App",
      description:
        "Feature-rich music player with playlist management, real-time search, and seamless audio playback across devices.",
      tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      image: "/modern-music-player.png",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, product catalog, and admin dashboard for inventory management.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "/ecommerce-store.png",
      link: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" variants={itemVariants}>
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed" variants={itemVariants}>
            Showcase of my best work demonstrating expertise in full-stack development and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 bg-card/50 hover:bg-card h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(138, 43, 226, 0.15)" }}
            >
              <motion.div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-transparent flex-shrink-0">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 flex-grow">
                    {project.title}
                  </h3>
                  <motion.div
                    className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 45 }}
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20 group-hover:border-primary/50 transition-colors duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(138, 43, 226, 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm group/link"
                  whileHover={{ x: 5 }}
                >
                  <span>View Project</span>
                  <AnimatedArrow />
                </motion.a>

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

export default Projects
