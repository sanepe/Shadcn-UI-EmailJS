import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sanepe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/santiago-lepe-9a048533a', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/sjav.iw', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                Santiago Lepe
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Full Stack Developer apasionado por crear soluciones innovadoras
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { key: 'home', href: '#home' },
                { key: 'about', href: '#about' },
                { key: 'projects', href: '#projects' },
                { key: 'contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t(`nav.${link.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex justify-end space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className="text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              © 2025 Santiago Lepe. {t('footer.rights')}
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-1 mt-1">
              <span>{t('footer.made')}</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>{t('footer.by')}</span>
            </p>
          </div>

          {/* Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-700 text-gray-400 hover:text-white hover:border-white transition-colors duration-200"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Volver arriba
          </Button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;