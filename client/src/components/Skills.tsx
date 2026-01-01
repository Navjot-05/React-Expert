import { motion } from 'framer-motion';
import { Code2, Palette, GitBranch } from 'lucide-react';

/**
 * Skills Component
 * Design: Modern Minimalist with Interactive Depth
 * - Animated skill cards with hover lift effect
 * - Organized skill categories
 * - Interactive constellation visualization
 */

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code2,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Styling & Design',
      icon: Palette,
      skills: ['Tailwind CSS', 'CSS-in-JS', 'Responsive Design', 'UI/UX Principles', 'Framer Motion'],
      color: 'from-amber-400 to-orange-500',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'Branching Strategies', 'Collaboration'],
      color: 'from-emerald-400 to-teal-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and practices that enable me to build exceptional web experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card Content */}
                <div className="relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-6 inline-block p-3 rounded-lg bg-linear-to-br from-primary/20 to-accent/20"
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{category.title}</h3>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium hover-glow transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
          {[
            { name: 'React & JavaScript', level: 95 },
            { name: 'Tailwind CSS', level: 98 },
            { name: 'Git & GitHub', level: 90 },
            { name: 'HTML & CSS', level: 96 },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-foreground">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-card rounded-full overflow-hidden border border-border/50">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-linear-to-r from-primary to-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
