import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Target, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: 'Programando desde los 11 años',
      description: t('about.intro')
    },
    {
      icon: Award,
      title: 'Certificaciones Internacionales',
      description: t('about.certifications')
    },
    {
      icon: Target,
      title: 'Visión Profesional',
      description: t('about.vision')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="/assets/roma.jpeg"
                alt="Santiago Lepe - Desarrollador"
                className="rounded-2xl shadow-lg w-full h-80 object-cover object-top grayscale"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center border-2 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Años programando</div>
                </CardContent>
              </Card>
              <Card className="text-center border-2 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Lenguajes dominados</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.intro')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.experience')}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-white dark:text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Principales tecnologías:</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Arduino (C++)', 'React', 'Node.js'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;