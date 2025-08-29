import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ContactForm } from '@/types';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lepejavsn@gmail.com',
      link: 'mailto:lepejavsn@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+52 56 6410 1914',
      link: 'https://wa.me/5256641091914'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'México',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sanepe',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/santiago-lepe-9a048533a',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/sanepe',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(t('contact.form.success') || "¡Mensaje enviado con éxito!");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      toast.error(t('contact.form.error') || "No se pudo enviar el mensaje. Intenta más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Información de contacto
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                ¿Tienes un proyecto en mente? ¡Me encantaría escuchar tus ideas y trabajar juntos para hacerlas realidad!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-white dark:text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline flex items-center space-x-1"
                      >
                        <span>{info.value}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sígueme en redes sociales
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`transition-colors duration-200 ${social.color}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5 mr-2" />
                      {social.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-300">
                      Disponible para proyectos
                    </h4>
                    <p className="text-green-600 dark:text-green-400 text-sm">
                      Respondo típicamente en 12 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">
                Envíame un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-gray-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-gray-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="transition-all duration-200 focus:ring-2 focus:ring-gray-500 resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      {t('contact.form.send')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
