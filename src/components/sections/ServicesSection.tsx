import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Cog, Cpu, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [
        'Sitios web responsive',
        'Aplicaciones React/Next.js',
        'E-commerce personalizado',
        'Optimización SEO'
      ],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Cog,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      features: [
        'Scripts de automatización',
        'Bots y herramientas',
        'Integración de APIs',
        'Optimización de procesos'
      ],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Cpu,
      title: t('services.microcontrollers.title'),
      description: t('services.microcontrollers.description'),
      features: [
        'Proyectos Arduino',
        'Automatización del hogar'
      ],
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center space-y-4 relative z-10">
                <div className="mx-auto w-16 h-16 bg-gray-900 dark:bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white dark:text-gray-900" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleContactClick}
                  className="w-full bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white dark:text-gray-900 group/btn"
                >
                  Contratar servicio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900 dark:bg-white rounded-2xl p-8 text-white dark:text-gray-900">
            <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-lg mb-6 opacity-90">
              Trabajemos juntos para convertir tu idea en realidad
            </p>
            <Button
              onClick={handleContactClick}
              size="lg"
              variant="secondary"
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Empezar proyecto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;