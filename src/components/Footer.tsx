
import { ArrowRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-secondary to-transparent py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-semibold flex items-center space-x-2">
                <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">J</div>
                <span>Jefferson</span>
              </a>
              <p className="text-foreground/70 mt-2 max-w-xs">
                Engenheiro de Software com foco em back-end, construindo soluções eficientes e robustas.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <button 
                onClick={scrollToTop}
                className="bg-secondary hover:bg-primary/10 text-primary px-4 py-2 rounded-md flex items-center mb-4 transition-colors"
              >
                <span>Voltar ao topo</span>
                <ArrowUp size={16} className="ml-2" />
              </button>
              
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
              >
                <span>Entre em contato</span>
                <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Jefferson. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Sobre
              </a>
              <a 
                href="#experience" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Experiência
              </a>
              <a 
                href="#skills" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Habilidades
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-foreground/60 hover:text-primary text-sm transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
