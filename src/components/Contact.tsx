import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 90%, rgba(140, 180, 250, 0.15) 0%, transparent 20%)'
        }}
      />
      
      <div ref={sectionRef} className="container mx-auto px-4 section-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary font-medium text-sm mb-6">
            Contato
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Vamos <span className="text-primary">conversar?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Email</h3>
                    <a href="mailto:contato@jeffitequila.com" className="text-foreground/70 hover:text-primary transition-colors">
                      contato@jeffitequila.com                    
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1">Localização</h3>
                    <p className="text-foreground/70">Imperatriz/MA</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-semibold mb-3">Me encontre online</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/jefferson-costa-968310166/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] p-3 rounded-lg transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/NewJeffiTequila" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800/10 hover:bg-gray-800/20 text-gray-800 p-3 rounded-lg transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Envie uma mensagem</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 animate-fade-in">
                    <p className="font-medium">Mensagem enviada com sucesso!</p>
                    <p className="text-sm mt-1">Obrigado pelo contato. Retornarei em breve.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                        placeholder="Como posso ajudar?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md flex items-center justify-center transition-all disabled:opacity-70 w-full"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send size={18} className="mr-2" />
                          Enviar mensagem
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
