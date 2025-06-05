import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';
import ImobImage from '../assets/Images/Imob.png';
import PokedexImage from '../assets/Images/Pokedex.png';
import ControleFinanceiroImage from '../assets/Images/ControleFinanceiro.png';
import MenteFemininaImage from '../assets/Images/MenteFeminina.png';
import EstudanteImage from '../assets/Images/Estudante.png';
import TriunfoImage from '../assets/Images/Triunfo.png';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Sistema de Busca Imóveis",
      description: "Com uma interface moderna e fácil de usar, a Imob conecta você às melhores oportunidades do mercado imobiliário. Ideal para quem busca agilidade, segurança e uma boa experiência na hora de negociar um imóvel.",
      image: ImobImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://148-imob.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 2,
      title: "Sistema de Gerenciamento de uma lavanderia",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: TriunfoImage,
      tags: ["React", "Vite", "Firebase", "Css"],
      demoUrl: "https://152-triunfo.netlify.app/home",
      codeUrl: "indisponivel"
    },
    {
      id: 3,
      title: "Sistema para solicitação de carteirinha de estudante",
      description: "O Estudante é um sistema simples e intuitivo para solicitação de carteirinhas estudantis. Com poucos cliques, o aluno preenche seus dados, envia os documentos e acompanha o processo de emissão de forma prática e segura.",
      image: EstudanteImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://143-estudante.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 4,
      title: "Sistema para controle financeiro",
      description: "O site Análise de Gastos é uma ferramenta online para organizar e acompanhar suas finanças pessoais. Ele permite registrar despesas, visualizar gráficos interativos e categorizar os gastos, facilitando o controle financeiro do dia a dia. Ideal para quem busca entender melhor para onde o dinheiro está indo.",
      image: ControleFinanceiroImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://analise-de-gastos.vercel.app/",
      codeUrl: "https://github.com/NicolasBianchini/analise-de-gastos"
    },
    {
      id: 5,
      title: "Pokedex",
      description: "O site Pokédex é uma aplicação interativa que permite explorar informações sobre diversos Pokémon. Com uma interface inspirada na Pokédex original, o usuário pode buscar Pokémon pelo nome ou número, visualizar imagens, tipos, habilidades e outras informações. É uma ferramenta divertida e educativa para fãs da franquia.",
      image: PokedexImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/Pokedex/",
      codeUrl: "https://github.com/NicolasBianchini/Pokedex"
    },
    {
      id: 6,
      title: "Mente Feminina",
      description: "O site aborda a saúde mental das mulheres em diferentes contextos, como trabalho, maternidade e relações sociais. Apresenta informações, dados e reflexões com o objetivo de conscientizar sobre os desafios enfrentados pelas mulheres e a importância do cuidado psicológico.",
      image: MenteFemininaImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/TrabalhoPucrs.io-main/",
      codeUrl: "https://github.com/NicolasBianchini/TrabalhoPucrs.io-main"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="bg-content1">
      <div className="section-container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('myProjects').split(' ')[0]} <span className="gradient-text">{t('myProjects').split(' ')[1]}</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                className="h-full border border-default-200 hover:border-primary-500"
                style={{ transition: "border-color 0.5s ease" }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardBody className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Chip key={index} size="sm" variant="flat" color="primary">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between gap-2">
                  <Button
                    as={Link}
                    href={project.demoUrl}
                    isExternal
                    variant="flat"
                    color="primary"
                    startContent={<Icon icon="lucide:external-link" className="text-current" />}
                  >
                    {t('liveDemo')}
                  </Button>
                  <Button
                    as={Link}
                    href={project.codeUrl}
                    isExternal
                    variant="bordered"
                    startContent={<Icon icon="lucide:github" className="text-current" />}
                    isDisabled={project.codeUrl === "indisponivel"}
                  >
                    {project.codeUrl === "indisponivel" ? "Indisponível" : t('viewCode')}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};