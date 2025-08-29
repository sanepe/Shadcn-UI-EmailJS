import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-gray-900">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gray-900 dark:border-white shadow-lg">
            <img
              src="/assets/santiago-profile.jpg"
              alt="Santiago Lepe"
              className="w-full h-full object-cover object-top grayscale"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
                {t('home.greeting')}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                {t('home.name')}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
                {t('home.title')}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('home.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleProjectsClick}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('home.cta')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleContactClick}
                className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-full transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t('home.contact')}
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={handleScrollDown}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;