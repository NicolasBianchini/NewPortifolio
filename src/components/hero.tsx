import React from 'react';
import { Button, Link } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';
import NicolasImage from '../assets/Images/Nicolas.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t('greeting')} <span className="gradient-text">Nicolas Tresoldi</span>
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-foreground-500 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {t('role')}
              </motion.p>
              <motion.p
                className="text-lg text-foreground-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t('heroDescription')}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                as={Link}
                href="#projects"
                color="primary"
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" className="text-current" />}
              >
                {t('viewWork')}
              </Button>
              <Button
                as={Link}
                href="#contact"
                variant="bordered"
                size="lg"
                endContent={<Icon icon="lucide:mail" className="text-current" />}
              >
                {t('contactMe')}
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="https://github.com/NicolasBianchini" isExternal aria-label="GitHub" className="text-foreground hover:text-primary-500 transition-colors">
                <Icon icon="lucide:github" className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/" isExternal aria-label="LinkedIn" className="text-foreground hover:text-primary-500 transition-colors">
                <Icon icon="lucide:linkedin" className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com/" isExternal aria-label="Twitter" className="text-foreground hover:text-primary-500 transition-colors">
                <Icon icon="lucide:twitter" className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl" />
              <img
                src={NicolasImage}
                alt="Nicolas Tresoldi"
                className="rounded-full object-cover w-full h-full relative z-10 border-4 border-content2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};