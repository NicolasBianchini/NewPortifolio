import React from 'react';
import { Button, Tooltip } from "@heroui/react";
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt-br' : 'en');
  };

  return (
    <Tooltip content={language === 'en' ? 'Mudar para Português' : 'Switch to English'}>
      <Button
        isIconOnly
        variant="flat"
        color="primary"
        aria-label={language === 'en' ? 'Mudar para Português' : 'Switch to English'}
        onPress={toggleLanguage}
        className="shadow-md"
      >
        <Icon 
          icon={language === 'en' ? 'lucide:flag' : 'lucide:flag'} 
          className="w-5 h-5" 
        />
        <span className="ml-1 text-xs font-bold">
          {language === 'en' ? 'PT' : 'EN'}
        </span>
      </Button>
    </Tooltip>
  );
};