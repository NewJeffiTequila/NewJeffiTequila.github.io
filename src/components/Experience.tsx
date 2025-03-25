
import { useEffect, useRef } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Raro Labs",
    period: "julho de 2022 - janeiro de 2025",
    duration: "2 anos 7 meses",
    description: "Trabalhando no projeto de transformação digital do processo de consultoria de inovação da GAC group, ajudando a criar o projeto MyGAC, que visa melhorar a análise dos projetos de inovação usados na lei do bem pelas empresas. Projeto principal usa o framework codeigniter. Migração para AWS do projeto. Criação de microserviços em NodeJS. Trabalhando também no projeto LOVECRM na parte de backend com NestJS e clean arch"
  },
  {
    title: "CTO",
    company: "GoGamers Oficial",
    period: "julho de 2022 - dezembro de 2022",
    duration: "6 meses",
    description: "Plataforma que visa a evolução de jogadores de eSports o acompanhando do início da carreira até o profissional."
  },
  {
    title: "Desenvolvedor Backend",
    company: "704 Apps",
    period: "março de 2022 - julho de 2022",
    duration: "5 meses",
    description: "Desenvolvimento de soluções back-end com PHP e NestJS para aplicativos de mobilidade urbana white label, ajuste no sistema de automação de criação dos projetos, atuando também na parte de infraestrutura com a plataforma Digital Ocean"
  },
  {
    title: "Desenvolvedor FullStack",
    company: "Geduc Soluções Tecnológicas",
    period: "julho de 2021 - março de 2022",
    duration: "9 meses",
    description: "Desenvolvimento de soluções tecnológicas educacionais, atuando tanto no back-end quanto no front-end utilizando PHP com o framework Adiant e NestJS e infrastrutura na AWS."
  },
  {
    title: "Desenvolvedor FullStack",
    company: "Gênesis Soluções Tecnológicas LTDA",
    period: "novembro de 2020 - junho de 2021",
    duration: "8 meses",
    description: "Desenvolvimento de soluções tecnológicas educacionais, atuando tanto no back-end quanto no front-end utilizando PHP com o framework Adiant e NestJS e infrastrutura na AWS."
  },
  {
    title: "Desenvolvedor Web",
    company: "Darsh Soluções Educativas",
    period: "julho de 2019 - abril de 2020",
    duration: "10 meses",
    description: "Desenvolvimento de aplicações web para o setor educacional utilizando Laravel."
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-transparent to-secondary/30">
      <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary font-medium text-sm mb-6">
            Experiência Profissional
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Minha <span className="text-primary">trajetória profissional</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="timeline-item"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-x-1">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <div className="flex items-center text-sm text-foreground/70 mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-medium text-primary">{experience.company}</span>
                    <span className="mx-2 text-foreground/40">•</span>
                    <span className="text-sm text-foreground/60">{experience.duration}</span>
                  </div>
                  
                  <p className="text-foreground/80">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="mt-12 text-center">
            <a 
              href="#"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>Veja meu currículo completo</span>
              <ArrowUpRight size={18} className="ml-1" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
