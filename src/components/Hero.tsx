
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(140, 180, 250, 0.2) 0%, transparent 25%), radial-gradient(circle at 80% 70%, rgba(140, 180, 250, 0.1) 0%, transparent 20%)'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block rounded-full px-4 py-1.5 bg-primary/10 text-primary font-medium text-sm mb-6 opacity-0 animate-slide-up">
              Engenheiro de Software Back-end
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-slide-up-delayed">
              Olá, me chamo <span className="text-primary">Jefferson</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl opacity-0 animate-slide-up-delayed-med">
              Engenheiro de Software com foco em back-end, especializado em soluções rápidas e performáticas com 6 anos de experiência.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-delayed-long">
              <button 
                onClick={scrollToAbout}
                className="bg-primary text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-all hover:shadow-lg hover:translate-y-[-2px]"
              >
                <span>Mais sobre mim</span>
                <ArrowDown size={18} />
              </button>
              
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-secondary text-foreground px-6 py-3 rounded-md flex items-center space-x-2 transition-colors hover:bg-secondary/80"
              >
                <span>Entre em contato</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
