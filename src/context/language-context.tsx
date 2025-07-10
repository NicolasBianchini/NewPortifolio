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
    'unavailable': 'Unavailable',

    // Project titles
    'projectImobTitle': 'Real Estate Search System',
    'projectTriunfoTitle': 'Laundry Management System',
    'projectFGJNTitle': 'Law Firm Management System',
    'projectFinanceTitle': 'Financial Control System',
    'projectFinatrixTitle': 'Financial Management System with WhatsApp Bot',
    'projectRafisHotwheelsTitle': 'Rafis Hotwheels',
    'projectPokedexTitle': 'Pokedex',
    'projectMenteFemininaTitle': 'Feminine Mind',
    'projectLavaFacilTitle': 'Laundry Company Website',
    'projectPortfolioTitle': 'My Portfolio',
    'projectLeitorFiscalTitle': 'Fiscal Reader',

    // Project descriptions
    'projectImobDesc': 'With a modern and easy-to-use interface, Imob connects you to the best opportunities in the real estate market. Ideal for those seeking agility, security, and a good experience when negotiating a property.',
    'projectTriunfoDesc': 'Laundry management system with client management, invoicing, and other business functionalities.',
    'projectFGJNDesc': 'The system is a law firm management system with functionalities for managing clients, cases, lawyers, etc.',
    'projectFinanceDesc': 'The Expense Analysis website is an online tool to organize and track your personal finances. It allows you to record expenses, view interactive charts, and categorize spending, making daily financial control easier. Ideal for those who want to better understand where their money is going.',
    'projectPokedexDesc': 'The Pokédex website is an interactive application that allows you to explore information about various Pokémon. With an interface inspired by the original Pokédex, users can search for Pokémon by name or number, view images, types, abilities, and other information. It\'s a fun and educational tool for franchise fans.',
    'projectMenteFemininaDesc': 'The website addresses women\'s mental health in different contexts, such as work, motherhood, and social relationships. It presents information, data, and reflections with the aim of raising awareness about the challenges faced by women and the importance of psychological care.',
    'projectLavaFacilDesc': 'Website for a small laundry company to help promote their services and attract more customers.',
    'projectPortfolioDesc': 'My personal portfolio with information about me, my projects, my skills, and contacts.',
    'projectFinatrixDesc': 'Finatrix is a financial management system with a WhatsApp bot that allows you to manage your finances and get personalized financial advice.',
    'projectRafisHotwheelsDesc': 'Rafis Hotwheels is a website dedicated to showcasing a personal collection of Hot Wheels cars. It features descriptions and images of various models, highlighting the author\'s appreciation for miniature automotive replicas. It\'s a visual and informative space for enthusiasts of the collection hobby, focusing on organization, identification, and appreciation of the collected items.',
    'projectLeitorFiscalDesc': 'The website displayed in the image is an online platform focused on reading and analyzing fiscal documents in XML format. With a clean and modern design, it allows users to drag or select XML files (CF-e, NFC-e, NF-e, CT-e) for extraction of fiscal information. The goal is to simplify the visualization and management of electronic fiscal documents, being useful for companies, accountants, and professionals in the fiscal area.',

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
    'unavailable': 'Indisponível',

    // Project titles
    'projectImobTitle': 'Sistema de Busca Imóveis',
    'projectTriunfoTitle': 'Sistema de Gerenciamento de uma lavanderia',
    'projectFGJNTitle': 'Sistema de gerenciamento de uma empresa de advocacia',
    'projectFinanceTitle': 'Sistema para controle financeiro',
    'projectFinatrixTitle': 'Sistema de gerenciamento de gastos com bot de whatsapp',
    'projectRafisHotwheelsTitle': 'Rafis Hotwheels',
    'projectPokedexTitle': 'Pokedex',
    'projectMenteFemininaTitle': 'Mente Feminina',
    'projectLavaFacilTitle': 'Site para uma empresa de lavanderia',
    'projectPortfolioTitle': 'Meu Portfólio',
    'projectLeitorFiscalTitle': 'Leitor Fiscal',

    // Project descriptions
    'projectImobDesc': 'Com uma interface moderna e fácil de usar, a Imob conecta você às melhores oportunidades do mercado imobiliário. Ideal para quem busca agilidade, segurança e uma boa experiência na hora de negociar um imóvel.',
    'projectTriunfoDesc': 'Sistema de gerenciamento de uma lavanderia, com funcionalidades de gerenciamento de clientes, notas fiscais, etc.',
    'projectFGJNDesc': 'O sistema é um sistema de gerenciamento de uma empresa de advocacia, com funcionalidades de gerenciamento de clientes, processos, advogados, etc.',
    'projectFinanceDesc': 'O site Análise de Gastos é uma ferramenta online para organizar e acompanhar suas finanças pessoais. Ele permite registrar despesas, visualizar gráficos interativos e categorizar os gastos, facilitando o controle financeiro do dia a dia. Ideal para quem busca entender melhor para onde o dinheiro está indo.',
    'projectPokedexDesc': 'O site Pokédex é uma aplicação interativa que permite explorar informações sobre diversos Pokémon. Com uma interface inspirada na Pokédex original, o usuário pode buscar Pokémon pelo nome ou número, visualizar imagens, tipos, habilidades e outras informações. É uma ferramenta divertida e educativa para fãs da franquia.',
    'projectMenteFemininaDesc': 'O site aborda a saúde mental das mulheres em diferentes contextos, como trabalho, maternidade e relações sociais. Apresenta informações, dados e reflexões com o objetivo de conscientizar sobre os desafios enfrentados pelas mulheres e a importância do cuidado psicológico.',
    'projectLavaFacilDesc': 'Site para uma empresa de lavanderia pequena para ajudar a divulgar seus serviços e atrair mais clientes.',
    'projectPortfolioDesc': 'Meu portfólio pessoal, com informações sobre mim, meus projetos, minhas habilidades e contatos.',
    'projectFinatrixDesc': 'Sistema de gerenciamento de gastos com bot de whatsapp, com funcionalidades de gerenciamento de gastos, categorias, metas, assistente financeiro, etc.',
    'projectRafisHotwheelsDesc': 'O site Rafis Hot Wheels Collection é uma página dedicada à exposição de uma coleção pessoal de carrinhos Hot Wheels. Apresenta descrições e imagens de diversos modelos, destacando o apreço do autor por miniaturas automobilísticas. É um espaço visual e informativo voltado para entusiastas de colecionismo, com foco na organização, identificação e apreciação dos itens colecionados..',
    'projectLeitorFiscalDesc': 'O site exibido na imagem é uma plataforma online voltada à leitura e análise de arquivos fiscais em formato XML. Com um design limpo e moderno, ele permite que os usuários arrastem ou selecionem arquivos XML (CF-e, NFC-e, NF-e, CT-e) para extração de informações fiscais. O objetivo é simplificar a visualização e o gerenciamento de documentos fiscais eletrônicos, sendo útil para empresas, contadores e profissionais da área fiscal.',

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