import React from 'react';
import { Award } from 'lucide-react';

import pythonLogo from '@/assets/logos/python.svg';
import javascriptLogo from '@/assets/logos/javascript.svg';
import htmlLogo from '@/assets/logos/html.svg';
import cssLogo from '@/assets/logos/css.svg';
import reactLogo from '@/assets/logos/react.svg';
import reactDarkLogo from '@/assets/logos/react-dark.svg';
import nodeLogo from '@/assets/logos/node-js.svg';
import mongoLogo from '@/assets/logos/mongodb.svg';
import sqlLogo from '@/assets/logos/sql.svg';

import gitLogo from '@/assets/logos/git.svg';
import githubLogo from '@/assets/logos/github.svg';
import githubDarkLogo from '@/assets/logos/github-dark.svg';
import postmanLogo from '@/assets/logos/postman.svg';
import vscodeLogo from '@/assets/logos/vs-code.svg';

export function SkillsPage() {
  const coreTechnologies = [
    { name: 'Python', logo: pythonLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'React', logo: reactLogo, darkLogo: reactDarkLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'SQL & DBMS', logo: sqlLogo },
  ];

  const developmentTools = [
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubLogo, darkLogo: githubDarkLogo },
    { name: 'VS Code', logo: vscodeLogo },
    { name: 'Postman', logo: postmanLogo },
  ];

  const coreCompetencies = [
    'Problem Solving',
    'Decision Making',
    'Web Application Architecture',
    'Database Management',
    'AWS Data Engineering Basics',
    'Responsive Design',
  ];

  const certifications = [
    {
      title: 'AI Tools & ChatGPT Workshop',
      issuer: 'be10x',
      date: 'February 2026',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM Skills Build',
      date: 'December 2025',
    },
  ];

  return (
    <div className="py-6 px-2 space-y-8 max-w-3xl mx-auto w-full">
      {/* 1. Languages & Core Technologies */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Languages &amp; Core Technologies
        </h2>
        <div className="h-1 w-48 bg-main mb-6 rounded-full"></div>

        <div className="flex gap-4 overflow-x-auto pb-2 flex-wrap">
          {coreTechnologies.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl bg-secondary-background border-2 border-border shadow-xs hover:shadow-md hover:border-primary transition-all"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`h-7 w-7 object-contain ${skill.darkLogo ? 'dark:hidden' : ''}`}
              />
              {skill.darkLogo && (
                <img
                  src={skill.darkLogo}
                  alt={skill.name}
                  className="hidden h-7 w-7 object-contain dark:block"
                />
              )}
              <span className="text-sm font-semibold text-foreground">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Development Tools */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Development Tools
        </h2>
        <div className="h-1 w-36 bg-chart-4 mb-6 rounded-full"></div>

        <div className="flex gap-4 overflow-x-auto pb-2 flex-wrap">
          {developmentTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl bg-secondary-background border-2 border-border shadow-xs hover:shadow-md hover:border-primary transition-all"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className={`h-7 w-7 object-contain ${tool.darkLogo ? 'dark:hidden' : ''}`}
              />
              {tool.darkLogo && (
                <img
                  src={tool.darkLogo}
                  alt={tool.name}
                  className="hidden h-7 w-7 object-contain dark:block"
                />
              )}
              <span className="text-sm font-semibold text-foreground">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Core Competencies */}
      <div>
        <h2 className="text-2xl font-bold mb-2 text-foreground">
          Core Competencies
        </h2>
        <div className="h-1 w-32 bg-chart-4 mb-6 rounded-full"></div>

        <div className="flex gap-3 flex-wrap">
          {coreCompetencies.map((comp) => (
            <span
              key={comp}
              className="inline-flex items-center rounded-lg bg-secondary px-3.5 py-1.5 text-sm font-medium text-foreground border-2 border-border shadow-xs"
            >
              {comp}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Certifications & Workshops (At the very bottom) */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 text-foreground">
          <Award className="h-6 w-6 text-primary" /> Certifications &amp; Workshops
        </h2>
        <div className="h-1 w-44 bg-main mb-6 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl bg-secondary-background border-2 border-border shadow-sm p-5 sm:p-6 flex flex-col justify-between h-full gap-3"
            >
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-sm text-foreground/70 mt-1 font-medium">
                  Issued by {cert.issuer}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-foreground/70 pt-2 border-t-2 border-border/40 font-medium">
                <span>Date Completed</span>
                <span className="font-semibold text-primary">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
