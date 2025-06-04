import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=1",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=2",
      tags: ["Vue", "Express", "PostgreSQL", "Socket.io"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application that helps users monitor workouts and nutrition.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=3",
      tags: ["React Native", "Firebase", "Redux", "Chart.js"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers to track performance across platforms.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=4",
      tags: ["Angular", "Django", "MySQL", "D3.js"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
    },
    {
      id: 5,
      title: "Real Estate Listing",
      description: "A property listing platform with advanced search, filtering, and virtual tour capabilities.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=5",
      tags: ["Next.js", "Node.js", "MongoDB", "Google Maps API"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
    },
    {
      id: 6,
      title: "Weather Application",
      description: "A weather forecasting application with location-based services and interactive maps.",
      image: "https://img.heroui.chat/image/dashboard?w=600&h=400&u=6",
      tags: ["React", "Express", "OpenWeather API", "Leaflet"],
      demoUrl: "#",
      codeUrl: "https://github.com/NicolasBianchini"
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
              <Card className="h-full border border-default-200 hover:border-primary-500 transition-all">
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
                    startContent={<Icon icon="lucide:external-link" />}
                  >
                    {t('liveDemo')}
                  </Button>
                  <Button 
                    as={Link}
                    href={project.codeUrl}
                    isExternal
                    variant="bordered"
                    startContent={<Icon icon="lucide:github" />}
                  >
                    {t('viewCode')}
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