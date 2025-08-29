import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillsSection = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'JavaScript', level: 95, icon: '⚡' },
        { name: 'TypeScript', level: 90, icon: '🔷' },
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'HTML/CSS', level: 95, icon: '🎨' },
        { name: 'Tailwind CSS', level: 90, icon: '🎭' }
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-600 to-emerald-600',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Express.js', level: 80, icon: '🚀' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' },
        { name: 'REST APIs', level: 85, icon: '🔗' }
      ]
    },
    {
      title: 'Hardware & Tools',
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'Arduino (C++)', level: 88, icon: '🔧' },
        { name: 'Git/GitHub', level: 90, icon: '📚' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Linux', level: 75, icon: '🐧' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'IoT Systems', level: 80, icon: '📡' }
      ]
    }
  ];

  const certifications = [
    'PCAP (Certified Associate in Python Programming)',
    'PCPP (Certified Professional in Python Programming) (En progreso)',
    'IBM Data Science with Python',
    'freeCodeCamp Full Stack Developer Certification',
    'freeCodeCamp Relational Database Certification',
    'AWS Cloud Practitioner (En progreso)'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gray-900 dark:bg-white mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-900 dark:text-white text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 bg-gray-900 dark:bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `growWidth 1.5s ease-out ${skillIndex * 0.1}s both`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Certificaciones
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Certificaciones internacionales que respaldan mi experiencia técnica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="p-3 text-center bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700 dark:text-gray-300">🏆</span>
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5+', label: 'Años programando', icon: '⏰' },
            { number: '15+', label: 'Tecnologías dominadas', icon: '🛠️' },
            { number: '3+', label: 'Certificaciones', icon: '🏆' },
            { number: '100+', label: 'Horas de aprendizaje mensual', icon: '📚' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes growWidth {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;