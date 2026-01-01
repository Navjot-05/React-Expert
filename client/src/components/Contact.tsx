import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/**
 * Contact Component
 * Design: Modern Minimalist with Interactive Depth
 * - Contact form with smooth animations
 * - Social links and contact information
 * - Form validation and feedback
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "navthind0903@gmail.com",
      href: "mailto:navthind0903@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8209404143",
      href: "tel:+91 8209404143",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kesarisinghpur,SGNR",
      href: "https://maps.app.goo.gl/t98zTNLVaVG2MmT97",
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Get in Touch
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map(info => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Follow Me
              </h4>
              <div className="flex gap-4">
  {[
    {
      name: "GitHub",
      href: "https://github.com/Navjot-05",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/navjot-singh-a99446399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <FaLinkedin />,
    },
    {
      name: "Twitter",
      href: "mailto:navthind0903@gmail.com",
      icon: <MdEmail />,
    },
  ].map((social) => (
    <motion.a
      key={social.name}
      href={social.href}           // <-- use the actual link
      target="_blank"              // <-- open in new tab
      rel="noopener noreferrer"    // <-- security
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 flex items-center justify-center text-xl hover-glow transition-all duration-300"
      aria-label={social.name}
    >
      {social.icon}
    </motion.a>
  ))}
</div>

            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                  <Send
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </motion.div>

              {/* Form Status */}
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-primary font-medium"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
