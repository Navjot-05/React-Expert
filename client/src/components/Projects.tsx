import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Projects Component
 * Design: Modern Minimalist with Interactive Depth
 * - Staggered project card animations
 * - Hover effects revealing project details
 * - Technology tags with smooth transitions
 */

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product filtering, shopping cart, and checkout flow.',
      image: '/images/ecommerce.png',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Redux'],
      link: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: '/images/taskmanager.png',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, animated portfolio showcasing frontend development skills and projects.',
      image: '/images/code-pattern.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      link: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search and detailed forecasts.',
      image: '/images/weather.png',
      technologies: ['React', 'API Integration', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system for creating and sharing blog posts with rich text editing.',
      image: '/images/blog.png',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Markdown'],
      link: '#',
      github: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts and metrics.',
      image: '/images/socialmedia.png',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Git'],
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A selection of projects that demonstrate my skills in frontend development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative  h-full"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-75 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-muted-foreground text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                      >
                        View Project
                        <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-primary/50 text-foreground hover:bg-primary/10"
                      >
                        <Github size={16} />
                      </Button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
