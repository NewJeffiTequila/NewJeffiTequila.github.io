
import { useEffect, useRef } from "react";
import { Code, Server, Database, Cpu } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('section-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 90% 10%, rgba(140, 180, 250, 0.15) 0%, transparent 20%)'
        }}
      />
      
      <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary font-medium text-sm mb-6">
            Sobre mim
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Transformando ideias em soluções de <span className="text-primary">software eficientes</span>
          </h2>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 mb-12">
            <p className="text-lg text-foreground/80 mb-6">
              Como Engenheiro de Software com foco em back-end, tenho dedicado minha carreira ao desenvolvimento de soluções rápidas e performáticas que impulsionam o sucesso dos projetos.
            </p>
            
            <p className="text-lg text-foreground/80">
              Com 6 anos de experiência trabalhando com diversas ferramentas e linguagens, busco constantemente a excelência técnica e a entrega de valor através de código limpo, eficiente e bem arquitetado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Server className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Back-end Especialista</h3>
                  <p className="text-foreground/70">
                    Desenvolvimento de APIs robustas, microserviços e sistemas escaláveis
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Database className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Banco de Dados</h3>
                  <p className="text-foreground/70">
                    Modelagem e otimização de bancos relacionais e NoSQL
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Desenvolvimento FullStack</h3>
                  <p className="text-foreground/70">
                    Experiência com tecnologias front-end para soluções completas
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Cpu className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
                  <p className="text-foreground/70">
                    Migração e gerenciamento de soluções em nuvem (AWS)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
