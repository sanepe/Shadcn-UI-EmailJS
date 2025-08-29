import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
];

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.skills': 'Habilidades',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    
    // Home Section
    'home.greeting': '¡Hola! Soy',
    'home.name': 'Santiago Lepe',
    'home.title': 'Desarrollador Full Stack',
    'home.subtitle': 'Programando desde los 11 años con pasión y dedicación',
    'home.cta': 'Ver mi trabajo',
    'home.contact': 'Contáctame',
    
    // About Section
    'about.title': 'Sobre mí',
    'about.subtitle': 'Un joven desarrollador con gran experiencia',
    'about.intro': 'Soy Santiago Lepe, un estudiante y freelancer apasionado por la tecnología. Comencé mi viaje en la programación a los 11 años y desde entonces he estado explorando diferentes lenguajes y tecnologías.',
    'about.experience': 'Con experiencia en desarrollo web completo, automatización y microcontroladores, busco constantemente nuevos desafíos que me permitan crecer profesionalmente.',
    'about.certifications': 'Cuento con certificaciones internacionales de Coursera y otros proveedores reconocidos, lo que respalda mi conocimiento técnico y mi compromiso con el aprendizaje continuo.',
    'about.vision': 'Mi objetivo es destacar como nuevo talento en el mundo del desarrollo, aportando frescura, energía y soluciones innovadoras a cada proyecto.',
    
    // Projects Section
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Algunos de mis trabajos más destacados',
    'projects.loading': 'Cargando proyectos...',
    'projects.error': 'Error al cargar proyectos',
    'projects.viewMore': 'Ver más en GitHub',
    'projects.viewProject': 'Ver proyecto',
    
    // Services Section
    'services.title': 'Servicios',
    'services.subtitle': 'Lo que puedo ofrecer como freelancer',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Sitios web modernos y aplicaciones con las últimas tecnologías',
    'services.automation.title': 'Automatización',
    'services.automation.description': 'Scripts y herramientas para optimizar procesos y tareas',
    'services.microcontrollers.title': 'Microcontroladores',
    'services.microcontrollers.description': 'Proyectos con Arduino y sistemas embebidos',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías que domino',
    
    // Testimonials Section
    'testimonials.title': 'Testimonios',
    'testimonials.subtitle': 'Lo que dicen de mi trabajo',
    'testimonials.message': '¡Aún estoy empezando en freelance!',
    'testimonials.cta': '¡Sé de mis primeros testimonios y desbloquea mi potencial!',
    'testimonials.contact': 'Trabajemos juntos',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Hablemos sobre tu próximo proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar mensaje',
    'contact.form.success': '¡Mensaje enviado exitosamente!',
    'contact.form.error': 'Error al enviar el mensaje',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.made': 'Hecho con',
    'footer.by': 'por Santiago Lepe'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Home Section
    'home.greeting': 'Hello! I\'m',
    'home.name': 'Santiago Lepe',
    'home.title': 'Full Stack Developer',
    'home.subtitle': 'Programming since age 11 with passion and dedication',
    'home.cta': 'View my work',
    'home.contact': 'Contact me',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'A young developer with great experience',
    'about.intro': 'I\'m Santiago Lepe, a student and freelancer passionate about technology. I started my programming journey at age 11 and have been exploring different languages and technologies ever since.',
    'about.experience': 'With experience in full-stack web development, automation, and microcontrollers, I constantly seek new challenges that allow me to grow professionally.',
    'about.certifications': 'I hold international certifications from Coursera and other recognized providers, which backs my technical knowledge and commitment to continuous learning.',
    'about.vision': 'My goal is to stand out as new talent in the development world, bringing freshness, energy, and innovative solutions to every project.',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of my most notable work',
    'projects.loading': 'Loading projects...',
    'projects.error': 'Error loading projects',
    'projects.viewMore': 'View more on GitHub',
    'projects.viewProject': 'View project',
    
    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'What I can offer as a freelancer',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern websites and applications with the latest technologies',
    'services.automation.title': 'Automation',
    'services.automation.description': 'Scripts and tools to optimize processes and tasks',
    'services.microcontrollers.title': 'Microcontrollers',
    'services.microcontrollers.description': 'Arduino projects and embedded systems',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies I master',
    
    // Testimonials Section
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What they say about my work',
    'testimonials.message': 'I\'m still starting in freelance!',
    'testimonials.cta': 'Be one of my first testimonials and unlock my potential!',
    'testimonials.contact': 'Let\'s work together',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk about your next project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.error': 'Error sending message',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.made': 'Made with',
    'footer.by': 'by Santiago Lepe'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setLanguage(lang);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage.code);
  };

  const t = (key: string): string => {
    return translations[language.code][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};