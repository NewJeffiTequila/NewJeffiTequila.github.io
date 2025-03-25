
import { useEffect, useRef } from "react";

const backendSkills = [
  "Node.js", "Express", "NestJS", "TypeScript", "JavaScript", "Python", 
  "Java", "Spring Boot", "REST APIs", "GraphQL", "PHP", "Laravel"
];

const databaseSkills = [
  "SQL", "PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB", 
  "ORM (Sequelize, TypeORM)", "Modelagem de Dados"
];

const infrastructureSkills = [
  "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", 
  "Microserviços", "Serverless", "DevOps"
];

const frontendSkills = [
  "HTML", "CSS", "React", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"
];

const Skills = () => {
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
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-transparent">
      <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary font-medium text-sm mb-6">
            Habilidades
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Minhas <span className="text-primary">competências técnicas</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Back-end</h3>
              <div className="flex flex-wrap">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Banco de Dados</h3>
              <div className="flex flex-wrap">
                {databaseSkills.map((skill, index) => (
                  <span key={index} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Infraestrutura</h3>
              <div className="flex flex-wrap">
                {infrastructureSkills.map((skill, index) => (
                  <span key={index} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-primary">Front-end</h3>
              <div className="flex flex-wrap">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Sobre minhas habilidades</h3>
            <p className="text-foreground/80 mb-4">
              Como engenheiro de software com foco em back-end, tenho experiência sólida em desenvolvimento de APIs, microsserviços e sistemas distribuídos. 
              Minha experiência inclui trabalho com várias tecnologias e frameworks, permitindo-me escolher as ferramentas certas para cada projeto.
            </p>
            <p className="text-foreground/80">
              Estou constantemente aprendendo e me atualizando com as mais recentes tecnologias e melhores práticas no desenvolvimento de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
