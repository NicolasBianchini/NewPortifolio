import { Card, CardBody, CardFooter, Button, Chip, Link, Tooltip } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';
import { useState } from 'react';
import ImobImage from '../assets/Images/Imob.png';
import PokedexImage from '../assets/Images/Pokedex.png';
import ControleFinanceiroImage from '../assets/Images/ControleFinanceiro.png';
import MenteFemininaImage from '../assets/Images/MenteFeminina.png';
import TriunfoImage from '../assets/Images/Triunfo.png';
import FGJNImage from '../assets/Images/Fgjn.png';
import LavaFacilImage from '../assets/Images/LavaFacil.png';
import MeuPortfolioImage from '../assets/Images/MeuPortfolio.png';
import FinatrixImage from '../assets/Images/Finatriximage.png';
import RafisHotwheelsImage from '../assets/Images/RafisHotwheels.png';
import LeitorFiscalImage from '../assets/Images/LeitorFiscalImage.png';
import CRM168Image from '../assets/Images/CRM168.png';
import GrexImage from '../assets/Images/Grex.png';


export const Projects = () => {
  const { t } = useLanguage();
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const MAX_DESCRIPTION_LENGTH = 150;

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const getTruncatedText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

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
      titleKey: "projectFinatrixTitle",
      descriptionKey: "projectFinatrixDesc",
      image: FinatrixImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://175-finatrix.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 6,
      titleKey: "projectRafisHotwheelsTitle",
      descriptionKey: "projectRafisHotwheelsDesc",
      image: RafisHotwheelsImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://rafishotwheels.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 7,
      titleKey: "projectLeitorFiscalTitle",
      descriptionKey: "projectLeitorFiscalDesc",
      image: LeitorFiscalImage,
      tags: ["React", "Vite", "TypeScript", "Css"],
      demoUrl: "https://174-leitorfiscal.netlify.app/",
      codeUrl: "indisponivel"
    },
    {
      id: 8,
      titleKey: "projectPokedexTitle",
      descriptionKey: "projectPokedexDesc",
      image: PokedexImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/Pokedex/",
      codeUrl: "https://github.com/NicolasBianchini/Pokedex"
    },
    {
      id: 9,
      titleKey: "projectMenteFemininaTitle",
      descriptionKey: "projectMenteFemininaDesc",
      image: MenteFemininaImage,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nicolasbianchini.github.io/TrabalhoPucrs.io-main/",
      codeUrl: "https://github.com/NicolasBianchini/TrabalhoPucrs.io-main"
    },
    {
      id: 10,
      titleKey: "projectLavaFacilTitle",
      descriptionKey: "projectLavaFacilDesc",
      image: LavaFacilImage,
      tags: ["WordPress"],
      demoUrl: "https://lavafacilnsr.wordpress.com/?_gl=1*1br8aal*_gcl_au*ODY3NTYxNTMzLjE3NDI0NDQ5Mzk.",
      codeUrl: "indisponivel"
    },
    {
      id: 11,
      titleKey: "projectPortfolioTitle",
      descriptionKey: "projectPortfolioDesc",
      image: MeuPortfolioImage,
      tags: ["React", "Vite", "TypeScript", "TailwindCSS"],
      demoUrl: "https://nicolatresoldi.netlify.app/",
      codeUrl: "https://github.com/NicolasBianchini/NewPortifolio"
    },
    {
      id: 12,
      titleKey: "projectCRMTitle",
      descriptionKey: "projectCRMDesc",
      image: CRM168Image,
      tags: ["React", "Vite", "TypeScript", "CSS", "Whatsapp Business API", "Firebase"],
      demoUrl: "https://crm168.netlify.app",
      codeUrl: "indisponivel"
    },
    {
      id: 13,
      titleKey: "projectGrexTitle",
      descriptionKey: "projectGrexDesc",
      image: GrexImage,
      tags: ["React", "Next.js", "TypeScript", "CSS", "NestJS", "PostgreSQL"],
      demoUrl: "indisponivel",
      codeUrl: "indisponivel"
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
          {projects.map((project) => {
            const description = t(project.descriptionKey);
            const isExpanded = expandedProjects.has(project.id);
            const shouldTruncate = description.length > MAX_DESCRIPTION_LENGTH;
            const displayText = shouldTruncate && !isExpanded
              ? getTruncatedText(description, MAX_DESCRIPTION_LENGTH)
              : description;

            return (
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
                    <p className="text-foreground-600 mb-2 whitespace-pre-line">{displayText}</p>
                    {shouldTruncate && (
                      <Button
                        onClick={() => toggleExpand(project.id)}
                        variant="bordered"
                        color="primary"
                        size="sm"
                        className="mb-4 border-primary bg-transparent text-primary hover:bg-opacity-10 w-fit"
                      >
                        {isExpanded ? t('readLess') : t('readMore')}
                      </Button>
                    )}
                    {!shouldTruncate && <div className="mb-4"></div>}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Chip key={index} size="sm" variant="flat" color="primary">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter className="flex justify-between gap-2">
                    {project.demoUrl === "indisponivel" ? (
                      <Tooltip
                        content={project.id === 13 ? t('projectGrexTooltip') : t('unavailableTooltip')}
                        placement="top"
                        delay={0}
                      >
                        <div>
                          <Button
                            variant="bordered"
                            startContent={<Icon icon="lucide:external-link" className="text-current" />}
                            isDisabled
                          >
                            {t('unavailable')}
                          </Button>
                        </div>
                      </Tooltip>
                    ) : (
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
                    )}
                    {project.codeUrl === "indisponivel" ? (
                      <Button
                        variant="bordered"
                        startContent={<Icon icon="lucide:github" className="text-current" />}
                        isDisabled
                      >
                        {t('unavailable')}
                      </Button>
                    ) : (
                      <Button
                        as={Link}
                        href={project.codeUrl}
                        isExternal
                        variant="bordered"
                        startContent={<Icon icon="lucide:github" className="text-current" />}
                      >
                        {t('viewCode')}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};