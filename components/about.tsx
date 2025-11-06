"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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

  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "AWS", level: 80 },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-card border border-primary/20 group">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Content overlay */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    className="text-6xl mb-4 inline-block"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    👨‍💻
                  </motion.div>
                  <p className="text-muted-foreground font-medium">Full Stack Developer</p>
                </motion.div>
              </div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: "inset 0 0 20px rgba(138, 43, 226, 0.3)",
                }}
              />
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance" variants={itemVariants}>
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
              </motion.h2>
              <motion.p className="text-muted-foreground leading-relaxed text-lg" variants={itemVariants}>
                I'm a passionate full-stack developer with expertise in modern web technologies. I love building
                scalable, performant applications that solve real-world problems. My journey in tech started with
                curiosity, and it has evolved into a career dedicated to creating exceptional digital experiences.
              </motion.p>
            </div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-xl font-semibold text-foreground">Key Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div key={skill.name} className="group" whileHover={{ x: 5 }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-primary/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
