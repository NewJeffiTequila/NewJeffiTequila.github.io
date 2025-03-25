
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-fade-in');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          section.classList.add('section-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
