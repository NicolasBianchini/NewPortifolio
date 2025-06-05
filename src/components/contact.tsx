import React from 'react';
import { Card, CardBody, Input, Textarea, Button, addToast } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon, IconifyIcon } from '@iconify/react';
import { useLanguage } from '../context/language-context';
import emailjs from '@emailjs/browser';

const PUBLIC_KEY = '-xVtu8QQu3jRdSorh';
const SERVICE_ID = 'service_eb8c00y';
const TEMPLATE_ID = 'template_rcol2za';

emailjs.init(PUBLIC_KEY);

export const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { t, language } = useLanguage();
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message: message,
          to_name: 'Nicolas',
        }
      );

      console.log('Email enviado com sucesso:', result);

      addToast({
        title: language === 'en' ? "Message Sent!" : "Mensagem Enviada!",
        description: language === 'en'
          ? "Thanks for reaching out. I'll get back to you soon."
          : "Obrigado pelo contato. Retornarei em breve.",
        color: "success",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error('Error sending email:', error);
      addToast({
        title: language === 'en' ? "Error!" : "Erro!",
        description: language === 'en'
          ? "Something went wrong. Please try again."
          : "Algo deu errado. Por favor, tente novamente.",
        color: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <motion.h2
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {language === 'en' ? 'Get in ' : 'Entre em '}<span className="gradient-text">{language === 'en' ? 'Touch' : 'Contato'}</span>
        </motion.h2>

        <div className="max-w-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-content2 border-none">
              <CardBody className="p-6">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    name="user_name"
                    label={t('name')}
                    placeholder={t('yourName')}
                    value={name}
                    onValueChange={setName}
                    isRequired
                    variant="bordered"
                    classNames={{
                      label: "text-foreground-500 text-sm",
                      input: "bg-content2",
                      inputWrapper: "[transition:border-color_1.5s_ease] rounded-3xl border-default-200 hover:border-primary-500",
                      innerWrapper: "bg-content2"
                    }}
                  />

                  <Input
                    name="user_email"
                    label={t('email')}
                    placeholder={t('yourEmail')}
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    isRequired
                    variant="bordered"
                    classNames={{
                      label: "text-foreground-500 text-sm",
                      input: "bg-content2",
                      inputWrapper: "[transition:border-color_1.5s_ease] rounded-3xl border-default-200 hover:border-primary-500",
                      innerWrapper: "bg-content2"
                    }}
                  />

                  <Textarea
                    name="message"
                    label={t('message')}
                    placeholder={t('howCanIHelp')}
                    value={message}
                    onValueChange={setMessage}
                    isRequired
                    variant="bordered"
                    minRows={4}
                    classNames={{
                      label: "text-foreground-500 text-sm",
                      input: "bg-content2",
                      inputWrapper: "[transition:border-color_1.5s_ease] rounded-3xl border-default-200 hover:border-primary-500",
                      innerWrapper: "bg-content2"
                    }}
                  />

                  <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                    startContent={!isSubmitting && <Icon icon="lucide:send" className="text-current" />}
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