import React from 'react';
import { Card, CardBody, Tooltip } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('frontend'),
      skills: [
        { name: "HTML", icon: "logos:html-5" },
        { name: "CSS", icon: "logos:css-3" },
        { name: "JavaScript", icon: "logos:javascript" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "React", icon: "logos:react" },
        { name: "Vue", icon: "logos:vue" },
        { name: "Angular", icon: "logos:angular-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ]
    },
    {
      title: t('backend'),
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon" },
        { name: "Express", icon: "logos:express" },
        { name: "Python", icon: "logos:python" },
        { name: "Django", icon: "logos:django-icon" },
        { name: "PHP", icon: "logos:php" },
        { name: "Laravel", icon: "logos:laravel" },
        { name: "Java", icon: "logos:java" },
        { name: "Spring", icon: "logos:spring-icon" },
      ]
    },
    {
      title: t('databaseDevOps'),
      skills: [
        { name: "MongoDB", icon: "logos:mongodb-icon" },
        { name: "PostgreSQL", icon: "logos:postgresql" },
        { name: "MySQL", icon: "logos:mysql-icon" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "GitHub", icon: "logos:github-icon" },
      ]
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
    <section id="skills" className="bg-background">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('mySkills').split(' ')[0]} <span className="gradient-text">{t('mySkills').split(' ')[1]}</span>
        </motion.h2>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <motion.h3 
                className="text-xl md:text-2xl font-semibold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={item}>
                    <Tooltip content={skill.name}>
                      <Card className="border border-default-200 hover:border-primary-500 hover:scale-105 transition-all">
                        <CardBody className="flex flex-col items-center justify-center p-4">
                          <Icon icon={skill.icon} className="w-10 h-10" />
                          <span className="mt-2 text-sm font-medium">{skill.name}</span>
                        </CardBody>
                      </Card>
                    </Tooltip>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};