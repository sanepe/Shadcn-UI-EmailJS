import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/types';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // GitHub API call with real username
        const response = await fetch('https://api.github.com/users/sanepe/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        // Fallback to mock data if GitHub API fails
        const mockProjects: Project[] = [
          {
            id: 1,
            name: 'Portfolio Website',
            description: 'Mi sitio web personal construido con React, TypeScript y Tailwind CSS. Incluye modo oscuro, multiidioma y animaciones fluidas.',
            html_url: 'https://github.com/sanepe/portfolio',
            language: 'TypeScript',
            topics: ['react', 'typescript', 'tailwindcss', 'portfolio'],
            updated_at: '2024-01-15T10:30:00Z'
          },
          {
            id: 2,
            name: 'Arduino IoT System',
            description: 'Sistema de automatización del hogar usando Arduino, sensores y conectividad WiFi para monitoreo remoto.',
            html_url: 'https://github.com/sanepe/arduino-iot',
            language: 'C++',
            topics: ['arduino', 'iot', 'sensors', 'automation'],
            updated_at: '2024-01-10T14:20:00Z'
          },
          {
            id: 3,
            name: 'Task Management API',
            description: 'API RESTful para gestión de tareas construida con Node.js, Express y MongoDB. Incluye autenticación JWT.',
            html_url: 'https://github.com/sanepe/task-api',
            language: 'JavaScript',
            topics: ['nodejs', 'express', 'mongodb', 'api'],
            updated_at: '2024-01-05T09:15:00Z'
          },
          {
            id: 4,
            name: 'Python Data Analyzer',
            description: 'Herramienta de análisis de datos con Python, Pandas y Matplotlib para visualizar tendencias de mercado.',
            html_url: 'https://github.com/sanepe/data-analyzer',
            language: 'Python',
            topics: ['python', 'pandas', 'matplotlib', 'data-analysis'],
            updated_at: '2023-12-28T16:45:00Z'
          },
          {
            id: 5,
            name: 'React E-commerce',
            description: 'Aplicación de comercio electrónico con React, Redux y Stripe para pagos seguros.',
            html_url: 'https://github.com/sanepe/react-ecommerce',
            language: 'JavaScript',
            topics: ['react', 'redux', 'stripe', 'ecommerce'],
            updated_at: '2023-12-20T11:30:00Z'
          },
          {
            id: 6,
            name: 'Automation Scripts',
            description: 'Colección de scripts de automatización para tareas repetitivas del sistema operativo.',
            html_url: 'https://github.com/sanepe/automation-scripts',
            language: 'Python',
            topics: ['python', 'automation', 'scripts', 'productivity'],
            updated_at: '2023-12-15T08:20:00Z'
          }
        ];
        setProjects(mockProjects);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLanguageColor = (language: string) => {
    return 'bg-gray-900 dark:bg-white';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {t('projects.loading')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {error && (
          <div className="text-center mb-8">
            <p className="text-red-600 dark:text-red-400">{t('projects.error')}</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border hover:border-gray-900 dark:hover:border-white">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                    {project.name}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  {project.language && (
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                      <span>{project.language}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(project.updated_at)}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.topics && project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 4).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                )}

                <Button
                  asChild
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100"
                >
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    {t('projects.viewProject')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900"
          >
            <a href="https://github.com/sanepe" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t('projects.viewMore')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;