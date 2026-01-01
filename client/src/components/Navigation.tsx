import { motion } from 'framer-motion'; 
import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleDownload = () => {
    toast.success("Downloading CV…");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text cursor-pointer"
        >
          NS
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Get In Touch Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/Navjot-Singh-CV.pdf"
              download="Navjot-Singh-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2">
                <Download size={18} />
                Download My CV
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-card border-t border-border/50"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">

          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10 }}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
            >
              {item.label}
            </motion.a>
          ))}

          {/* Mobile Get in Touch */}
          <motion.div whileTap={{ scale: 0.97 }}>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
              onClick={() => {
                setIsOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Mobile Download */}
          <motion.div whileTap={{ scale: 0.97 }}>
            <a
              href="/Navjot_Singh_CV.pdf"
              download="Navjot-Singh-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownload}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2 flex items-center gap-2">
                <Download size={18} />
                Download My CV
              </Button>
            </a>
          </motion.div>

        </div>
      </motion.div>
    </motion.nav>
  );
}
