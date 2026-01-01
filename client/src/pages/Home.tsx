import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Modern Minimalist with Interactive Depth
 * - Smooth scroll navigation
 * - Animated sections with staggered reveals
 * - Responsive layout with mobile optimization
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
