import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Kishan Mitra AI',
      subtitle: 'Smart Farming Assistant',
      badge: 'Live Application',
      liveUrl: 'https://kishan-mitra-ai-1.onrender.com/',
      githubUrl: 'https://github.com/RahulPardhi',
      overview:
        'An AI-powered Smart Farming Assistant that helps farmers with weather updates, crop disease detection, soil analysis, AI-powered farming guidance, voice interaction, and multilingual support.',
      highlights: [
        'Built with 4 core modules: Gemini-powered interactive chatbot, crop disease computer-vision detection, soil nutrient analysis, and live weather forecast.',
        'Developed secure backend APIs with JWT authentication, MongoDB, and integrated 5+ services/APIs, including the Gemini API, weather API, custom detection model, and Web Speech API.',
        'Added 3-language support (English, Hindi, Marathi) with voice assistance and a responsive dashboard, connecting AI, database, and external services into one production-ready application.',
      ],
      technologies: [
        'JavaScript',
        'Node.js',
        'Express',
        'MongoDB',
        'Gemini API',
        'Weather API',
        'Web Speech API',
        'JWT',
      ],
    },
    {
      title: 'Career Path',
      subtitle: 'Student Career Assistant',
      badge: 'AI Career Platform',
      liveUrl: null,
      githubUrl: 'https://github.com/RahulPardhi',
      overview:
        'Developed an AI-powered career assistant for resume analysis, skill-gap detection, job recommendations, and personalized learning roadmaps.',
      highlights: [
        'Automated end-to-end resume parsing, skill extraction, and ATS compatibility scoring across varied candidate profiles.',
        'Tested the application on 50+ resumes to evaluate resume parsing, skill extraction, ATS scoring, and analysis across different resume formats.',
        'Achieved 80% ATS accuracy during testing, improving keyword matching and identifying relevant skills for targeted job roles.',
      ],
      technologies: [
        'Python',
        'React',
        'MongoDB',
        'JWT',
        'ATS Scoring',
        'Resume Parsing',
        'REST APIs',
      ],
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto py-6 px-2 w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          Featured Projects
        </h2>
        <div className="h-1 w-36 bg-main mt-2 mb-6 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl bg-secondary-background border-2 border-border shadow-sm transition hover:shadow-md p-6 sm:p-7 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-main/20 px-2.5 py-0.5 text-xs font-bold text-foreground border border-border">
                    {project.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground pt-1">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-foreground/70">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-main text-main-foreground border-2 border-border px-3.5 py-1.5 text-xs font-bold shadow-xs hover:opacity-90 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border-2 border-border bg-background px-3.5 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary transition-all shadow-xs"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-foreground/85 leading-relaxed">
              {project.overview}
            </p>

            <ul className="space-y-2 text-sm text-foreground/85 list-disc pl-5">
              {project.highlights.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap gap-1.5 border-t-2 border-border/40">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-foreground border border-border shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
