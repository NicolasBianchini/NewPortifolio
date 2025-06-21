import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';
import ImobImage from '../assets/Images/Imob.png';
import PokedexImage from '../assets/Images/Pokedex.png';
import ControleFinanceiroImage from '../assets/Images/ControleFinanceiro.png';
import MenteFemininaImage from '../assets/Images/MenteFeminina.png';
import TriunfoImage from '../assets/Images/Triunfo.png';
import FGJNImage from '../assets/Images/Fgjn.png';
import LavaFacilImage from '../assets/Images/LavaFacil.png';
import MeuPortfolioImage from '../assets/Images/MeuPortfolio.png';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleKey: "projectImobTitle",
      descriptionKey: "projectImobDesc",
      image: ImobImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://148-imob.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 2,
      titleKey: "projectTriunfoTitle",
      descriptionKey: "projectTriunfoDesc",
      image: TriunfoImage,
      tags: ["React", "Vite", "Firebase", "Css"],
      demoUrl: "https://152-triunfo.netlify.app/home",
      codeUrl: "indisponivel"
    },
    {
      id: 3,
      titleKey: "projectFGJNTitle",
      descriptionKey: "projectFGJNDesc",
      image: FGJNImage,
      tags: ["React", "Next.js", "Firebase", "TypeScript", "TailwindCSS"],
      demoUrl: "https://fgjnadvogados.netlify.app/",
      codeUrl: "https://github.com/NicolasBianchini/estrutura-de-dados"
    },
    {
      id: 4,
      titleKey: "projectFinanceTitle",
      descriptionKey: "projectFinanceDesc",
      image: ControleFinanceiroImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://analise-de-gastos.vercel.app/",
      codeUrl: "https://github.com/NicolasBianchini/analise-de-gastos"
    },
    {
      id: 5,
      titleKey: "projectPokedexTitle",
      descriptionKey: "projectPokedexDesc",
      image: PokedexImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/Pokedex/",
      codeUrl: "https://github.com/NicolasBianchini/Pokedex"
    },
    {
      id: 6,
      titleKey: "projectMenteFemininaTitle",
      descriptionKey: "projectMenteFemininaDesc",
      image: MenteFemininaImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/TrabalhoPucrs.io-main/",
      codeUrl: "https://github.com/NicolasBianchini/TrabalhoPucrs.io-main"
    },
    {
      id: 7,
      titleKey: "projectLavaFacilTitle",
      descriptionKey: "projectLavaFacilDesc",
      image: LavaFacilImage,
      tags: ["WordPress"],
      demoUrl: "https://lavafacilnsr.wordpress.com/?_gl=1*1br8aal*_gcl_au*ODY3NTYxNTMzLjE3NDI0NDQ5Mzk.",
      codeUrl: "indisponivel"
    },
    {
      id: 8,
      titleKey: "projectPortfolioTitle",
      descriptionKey: "projectPortfolioDesc",
      image: MeuPortfolioImage,
      tags: ["React", "Vite", "TypeScript", "TailwindCSS"],
      demoUrl: "https://nicolatresoldi.netlify.app/",
      codeUrl: "https://github.com/NicolasBianchini/NewPortifolio"
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
                <div className="relative overflow-hidden h-48" style={{ height: '12rem' }}>
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="project-image transition-transform hover:scale-105 duration-300"
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      display: 'block'
                    }}
                  />
                </div>
                <CardBody className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
                  <p className="text-foreground-600 mb-4">{t(project.descriptionKey)}</p>
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
                    {project.codeUrl === "indisponivel" ? t('unavailable') : t('viewCode')}
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