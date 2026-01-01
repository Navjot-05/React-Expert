import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero Component
 * Design: Modern Minimalist with Interactive Depth
 * - Animated background with network effect
 * - Staggered text animations
 * - Social links with hover effects
 */

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Navjot-05', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/navjot-singh-a99446399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:navthind0903@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-background/40 via-background/60 to-background" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 z-10 relative"
      >
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="gradient-text">Navjot Singh</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
            A passionate <span className="text-primary font-semibold">Frontend Developer</span> crafting beautiful, interactive experiences with React, Tailwind CSS, and modern web technologies.
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-foreground/60 mb-8 max-w-2xl">
            I specialize in building responsive, performant web applications with clean code and intuitive user interfaces. Let's create something amazing together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg bg-card border border-border/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
