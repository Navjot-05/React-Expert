import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * Design: Modern Minimalist with Interactive Depth
 * - Social links with hover effects
 * - Scroll to top button
 * - Copyright information
 */

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Navjot-05', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/navjot-singh-a99446399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:navthind0903@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Navjot Singh</h3>
            <p className="text-foreground/60">Frontend Developer | React Enthusiast | Web Designer</p>
          </motion.div>

          {/* Center Section - Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-border/50 bg-background/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300 hover-glow"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right Section - Scroll to Top */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 rounded-lg border border-border/50 bg-background/50 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300 hover-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-8 h-px bg-linear-to-r from-transparent via-border to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60"
        >
          <motion.p variants={itemVariants}>
            © 2024 Navjot Singh. All rights reserved.
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href="#"
                variants={itemVariants}
                whileHover={{ color: '#06b6d4' }}
                className="hover:text-primary transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
