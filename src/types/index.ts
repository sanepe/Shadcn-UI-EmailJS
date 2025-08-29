export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  updated_at: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface Theme {
  mode: 'light' | 'dark';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}