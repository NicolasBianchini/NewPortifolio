import React from 'react';
import { Card, CardBody } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-content1">
      <div className="section-container flex flex-col items-center">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('aboutMe').split(' ')[0]} <span className="gradient-text">{t('aboutMe').split(' ')[1]}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-6">{t('aboutTitle')}</h3>

          <p className="text-foreground-600 mb-4">
            {t('aboutDescription1')}
          </p>

          <p className="text-foreground-600">
            {t('aboutDescription2')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};