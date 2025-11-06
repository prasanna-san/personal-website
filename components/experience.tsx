"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: "Edubiz Networks",
      role: "Frontend Engineer",
      period: "June 2025 - July 2025",
      description: "Leading frontend development, architecting component systems, and mentoring junior developers.",
      achievements: ["Mentored 5+ developers", "Led design system initiative", "Deployed on Vercel"],
    },
    {
      company: "ChefAtHome LPP",
      role: "Graphic Designer",
      period: "April 2023 - June 2023",
      description: "Developed and maintained multiple full-stack applications, improved performance by 40%.",
      achievements: ["Delivered 15+ projects", "Designer of the Week", "Team lead on 3 initiatives"],
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mb-16 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : "hidden"}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : "hidden"}
            transition={{ delay: 0.2 }}
          >
            A journey through diverse roles and impactful projects spanning modern web development.
          </motion.p>
        </motion.div>

        <motion.div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {index < experiences.length - 1 && (
                <motion.div
                  className="absolute left-7 top-12 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                />
              )}

              <motion.div
                className="absolute left-0 top-1 flex items-center justify-center"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary border-4 border-background ring-2 ring-primary/50"
                  animate={{ boxShadow: ["0 0 0 0 rgba(138, 43, 226, 0.7)", "0 0 0 8px rgba(138, 43, 226, 0)"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <motion.div className="pl-20 pb-2 group/card" whileHover={{ x: 8 }}>
                <div className="p-6 rounded-xl border border-primary/20 bg-card/50 group-hover/card:border-primary/50 group-hover/card:bg-card transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold group-hover/card:text-primary transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 whitespace-nowrap font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="pt-16 border-t border-border"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
          }}
        >
          <motion.h3
            className="text-3xl font-bold mb-12 text-center text-balance"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : "hidden"}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </motion.h3>

          <motion.div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { title: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
              { title: "Tools", skills: ["Git", "Docker", "AWS", "Vercel", "VS Code"] },
            ].map((category) => (
              <motion.div
                key={category.title}
                className="group/skill p-6 rounded-xl border border-primary/20 hover:border-primary/50 hover:bg-card transition-all duration-300 bg-card/50"
                whileHover={{ y: -8 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h4 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      className="text-muted-foreground text-sm flex items-center group/skill-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover/skill-item:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
