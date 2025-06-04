import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="bg-content1">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('aboutMe').split(' ')[0]} <span className="gradient-text">{t('aboutMe').split(' ')[1]}</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://img.heroui.chat/image/ai?w=600&h=600&u=42"
              alt="About Nicolas"
              className="rounded-xl w-full h-auto shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">{t('aboutTitle')}</h3>
            
            <p className="text-foreground-600">
              {t('aboutDescription1')}
            </p>
            
            <p className="text-foreground-600">
              {t('aboutDescription2')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};