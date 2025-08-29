import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, Moon, Sun, Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#services' },
    { key: 'skills', href: '#skills' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sanepe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/santiago-lepe-9a048533a', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/sjav.iw', label: 'Instagram' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              SL
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-gray-900 dark:hover:text-white"
                >
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Language Selector */}
            <Select
              value={language.code}
              onValueChange={(value) => {
                const lang = [
                  { code: 'es' as const, name: 'Español', flag: '🇪🇸' },
                  { code: 'en' as const, name: 'English', flag: '🇬🇧' }
                ].find(l => l.code === value);
                if (lang) setLanguage(lang);
              }}
            >
              <SelectTrigger className="w-16 h-8">
                <SelectValue>
                  {language.flag}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="es">🇪🇸 ES</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
              </SelectContent>
            </Select>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hover:text-gray-900 dark:hover:text-white"
            >
              {theme.mode === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200"
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  ))}
                  
                  {/* Mobile Social Links */}
                  <div className="flex items-center space-x-4 px-4 pt-4 border-t">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <Button
                        key={label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:text-gray-900 dark:hover:text-white"
                      >
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;