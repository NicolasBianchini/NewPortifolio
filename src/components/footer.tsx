import React from 'react';
import { Link } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();

  const sections = [
    { name: t('home'), href: "#home" },
    { name: t('about'), href: "#about" },
    { name: t('skills'), href: "#skills" },
    { name: t('projects'), href: "#projects" },
    { name: t('contact'), href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: "lucide:github", href: "https://github.com/NicolasBianchini" },
    { name: "LinkedIn", icon: "lucide:linkedin", href: "https://www.linkedin.com/in/nicolastresoldi/" },
    { name: "Instagram", icon: "lucide:instagram", href: "https://instagram.com/n_tresoldi/" },
  ];

  return (
    <footer className="bg-content2 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="gradient-text">Nicolas</span>
            </h3>
            <p className="text-foreground-600 mb-4">
              {language === 'en'
                ? 'Full Stack Developer specialized in building exceptional digital experiences.'
                : 'Desenvolvedor Full Stack especializado em criar experiências digitais excepcionais.'}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  isExternal
                  aria-label={link.name}
                  className="text-foreground hover:text-primary-500 transition-colors"
                >
                  <Icon icon={link.icon} className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link
                    href={section.href}
                    className="text-foreground-600 hover:text-primary-500 transition-colors"
                  >
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground-600">
                <Icon icon="lucide:mail" className="w-4 h-4 text-current" />
                <Link href="mailto:nicolastresoldi@gmail.com">nicolastresoldi@gmail.com</Link>
              </li>
              <li className="flex items-center gap-2 text-foreground-600">
                <Icon icon="lucide:map-pin" className="w-4 h-4 text-current" />
                <span>Porto Alegre, Brazil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-default-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            © {currentYear} Nicolas Tresoldi. {t('allRightsReserved')}
          </p>
          <p className="text-foreground-500 text-sm mt-2 md:mt-0">
            {t('designedBuilt')} <span className="text-primary-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};