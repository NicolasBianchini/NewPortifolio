import React from 'react';
import { Card, CardBody, Input, Textarea, Button, addToast } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useLanguage } from '../context/language-context';

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: t('email'),
      value: "nicolas@example.com",
      link: "mailto:nicolas@example.com"
    },
    {
      icon: "lucide:phone",
      title: t('phone'),
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "lucide:map-pin",
      title: t('location'),
      value: "São Paulo, Brazil",
      link: "https://maps.google.com/?q=São+Paulo,+Brazil"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      addToast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        color: "success",
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('getInTouch').split(' ')[0]} {t('getInTouch').split(' ')[1]} <span className="gradient-text">{t('getInTouch').split(' ')[2]}</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Let's Talk</h3>
            <p className="text-foreground-600">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the contact form or via my contact information.
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border border-default-200">
                  <CardBody className="flex items-center gap-4 p-4">
                    <div className="bg-primary-500/10 p-3 rounded-full">
                      <Icon icon={item.icon} className="text-primary-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-foreground-600 hover:text-primary-500 transition-colors"
                        target={item.icon === "lucide:map-pin" ? "_blank" : undefined}
                        rel={item.icon === "lucide:map-pin" ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/NicolasBianchini" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button isIconOnly variant="flat" aria-label="GitHub">
                  <Icon icon="lucide:github" className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button isIconOnly variant="flat" aria-label="LinkedIn">
                  <Icon icon="lucide:linkedin" className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button isIconOnly variant="flat" aria-label="Twitter">
                  <Icon icon="lucide:twitter" className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button isIconOnly variant="flat" aria-label="Instagram">
                  <Icon icon="lucide:instagram" className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border border-default-200">
              <CardBody className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label={t('name')}
                    placeholder={t('yourName')}
                    value={name}
                    onValueChange={setName}
                    isRequired
                    variant="bordered"
                  />
                  
                  <Input
                    label={t('email')}
                    placeholder={t('yourEmail')}
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    isRequired
                    variant="bordered"
                  />
                  
                  <Textarea
                    label={t('message')}
                    placeholder={t('howCanIHelp')}
                    value={message}
                    onValueChange={setMessage}
                    isRequired
                    variant="bordered"
                    minRows={4}
                  />
                  
                  <Button 
                    type="submit" 
                    color="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                    startContent={!isSubmitting && <Icon icon="lucide:send" />}
                  >
                    {t('sendMessage')}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};