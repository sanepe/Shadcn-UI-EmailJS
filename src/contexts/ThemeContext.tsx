import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({ mode: 'light' });

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme({ mode: savedTheme });
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme({ mode: 'dark' });
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme.mode === 'dark');
    localStorage.setItem('portfolio-theme', theme.mode);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => ({ mode: prev.mode === 'light' ? 'dark' : 'light' }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};