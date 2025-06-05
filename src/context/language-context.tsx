import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt-br';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'en': {
    // Navbar
    'home': 'Home',
    'about': 'About',
    'skills': 'Skills',
    'projects': 'Projects',
    'contact': 'Contact',
    'contactMe': 'Contact Me',

    // Hero
    'greeting': 'Hi, I\'m',
    'role': 'Full Stack Developer',
    'heroDescription': 'I build modern web applications with cutting-edge technologies. Passionate about creating intuitive and performant user experiences.',
    'viewWork': 'View My Work',

    // About
    'aboutMe': 'About Me',
    'aboutTitle': 'Full Stack Developer with a passion for creating exceptional digital experiences',
    'aboutDescription1': 'I\'m a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless, user-friendly experiences that solve real-world problems.',
    'aboutDescription2': 'My journey in web development began recently, and I\'m constantly learning and adapting to new technologies to deliver the best solutions.',

    // Skills
    'mySkills': 'My Skills',
    'frontend': 'Frontend',
    'backend': 'Backend',
    'databaseDevOps': 'Database & DevOps',

    // Projects
    'myProjects': 'My Projects',
    'liveDemo': 'Live Demo',
    'viewCode': 'View Code',

    // Contact
    'getInTouch': 'Get In Touch',
    'letsTalk': 'Let\'s Talk',
    'contactDescription': 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the contact form or via my contact information.',
    'name': 'Name',
    'email': 'Email',
    'message': 'Message',
    'yourName': 'Your name',
    'yourEmail': 'your.email@example.com',
    'howCanIHelp': 'How can I help you?',
    'sendMessage': 'Send Message',
    'location': 'Location',

    // Footer
    'quickLinks': 'Quick Links',
    'allRightsReserved': 'All rights reserved.',
    'designedBuilt': 'Designed & Built with',
  },
  'pt-br': {
    // Navbar
    'home': 'Início',
    'about': 'Sobre',
    'skills': 'Habilidades',
    'projects': 'Projetos',
    'contact': 'Contato',
    'contactMe': 'Fale Comigo',

    // Hero
    'greeting': 'Olá, eu sou',
    'role': 'Desenvolvedor Full Stack',
    'heroDescription': 'Eu construo aplicações web modernas com tecnologias de ponta. Apaixonado por criar experiências intuitivas e de alto desempenho.',
    'viewWork': 'Ver Meus Projetos',

    // About
    'aboutMe': 'Sobre Mim',
    'aboutTitle': 'Desenvolvedor Full Stack com paixão por criar experiências digitais excepcionais',
    'aboutDescription1': 'Sou um Desenvolvedor Full Stack apaixonado com experiência na construção de aplicações web modernas. Com uma base sólida em tecnologias frontend e backend, crio experiências intuitivas e amigáveis que resolvem problemas reais.',
    'aboutDescription2': 'Minha jornada no desenvolvimento web começou recentemente, e estou constantemente aprendendo e me adaptando a novas tecnologias para entregar as melhores soluções.',

    // Skills
    'mySkills': 'Minhas Habilidades',
    'frontend': 'Frontend',
    'backend': 'Backend',
    'databaseDevOps': 'Banco de Dados & DevOps',

    // Projects
    'myProjects': 'Meus Projetos',
    'liveDemo': 'Demo ao Vivo',
    'viewCode': 'Ver Código',

    // Contact
    'getInTouch': 'Entre em Contato',
    'letsTalk': 'Vamos Conversar',
    'contactDescription': 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão. Sinta-se à vontade para entrar em contato através do formulário ou via minhas informações de contato.',
    'name': 'Nome',
    'email': 'Email',
    'message': 'Mensagem',
    'yourName': 'Seu nome',
    'yourEmail': 'seu.email@exemplo.com',
    'howCanIHelp': 'Como posso ajudar você?',
    'sendMessage': 'Enviar Mensagem',
    'location': 'Localização',

    // Footer
    'quickLinks': 'Links Rápidos',
    'allRightsReserved': 'Todos os direitos reservados.',
    'designedBuilt': 'Projetado e Construído com',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-br');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};