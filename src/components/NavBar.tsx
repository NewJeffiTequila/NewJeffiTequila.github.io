
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full transition-all duration-300 z-50 py-4",
        isScrolled ? 
          theme === "dark" ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-semibold flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">J</div>
          <span className="hidden sm:inline">Jefferson</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink label="Sobre" section="about" onClick={() => scrollToSection('about')} />
          <NavLink label="Experiência" section="experience" onClick={() => scrollToSection('experience')} />
          <NavLink label="Habilidades" section="skills" onClick={() => scrollToSection('skills')} />
          <NavLink label="Contato" section="contact" onClick={() => scrollToSection('contact')} />
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Toggle
            aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className="h-9 w-9 rounded-full"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <a 
            href="https://github.com/NewJeffiTequila" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jefferson-costa-968310166/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-all"
          >
            <span>Contato</span>
            <ArrowRight size={16} />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Toggle
            aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            pressed={theme === "dark"}
            onPressedChange={toggleTheme}
            className="h-9 w-9 rounded-full"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <button 
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-20 px-4">
          <nav className="flex flex-col space-y-6 items-center text-lg">
            <MobileNavLink label="Sobre" section="about" onClick={() => scrollToSection('about')} />
            <MobileNavLink label="Experiência" section="experience" onClick={() => scrollToSection('experience')} />
            <MobileNavLink label="Habilidades" section="skills" onClick={() => scrollToSection('skills')} />
            <MobileNavLink label="Contato" section="contact" onClick={() => scrollToSection('contact')} />
            
            <div className="flex items-center space-x-6 pt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ label, section, onClick }: { label: string; section: string; onClick: () => void }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsActive(rect.top <= 100 && rect.bottom >= 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [section]);
  
  return (
    <a 
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={cn(
        "relative text-foreground/80 hover:text-primary transition-colors py-1",
        isActive && "text-primary"
      )}
    >
      {label}
      <span 
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300",
          isActive && "w-full"
        )}
      />
    </a>
  );
};

const MobileNavLink = ({ label, section, onClick }: { label: string; section: string; onClick: () => void }) => {
  return (
    <a 
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="text-foreground hover:text-primary transition-colors py-2 px-4 w-full text-center"
    >
      {label}
    </a>
  );
};

export default NavBar;
