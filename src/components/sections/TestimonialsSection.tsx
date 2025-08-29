import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-dashed border-blue-300 dark:border-blue-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-blue-400 animate-pulse" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Quote className="h-12 w-12 text-purple-400/30" />
            </div>

            <CardContent className="p-12 text-center relative z-10">
              <div className="space-y-8">
                {/* Icon */}
                <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Star className="h-10 w-10 text-white" />
                </div>

                {/* Main message */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t('testimonials.message')}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {t('testimonials.cta')}
                  </p>
                </div>

                {/* Features that make Santiago unique */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      icon: '🚀',
                      title: 'Joven Talento',
                      description: 'Frescura y energía en cada proyecto'
                    },
                    {
                      icon: '⚡',
                      title: 'Aprendizaje Rápido',
                      description: '5+ años de experiencia continua'
                    },
                    {
                      icon: '💡',
                      title: 'Innovación',
                      description: 'Soluciones creativas y modernas'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="text-center p-4 bg-white/80 dark:bg-gray-800/50 rounded-xl">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('testimonials.contact')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future testimonials preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 opacity-50">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="border-dashed border-2 border-gray-300 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300 dark:text-gray-600" />
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;