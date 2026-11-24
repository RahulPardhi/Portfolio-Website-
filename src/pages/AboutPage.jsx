import React from 'react';
import { Link } from 'react-router-dom';

import pythonLogo from '@/assets/logos/python.svg';
import jsLogo from '@/assets/logos/javascript.svg';
import htmlLogo from '@/assets/logos/html.svg';
import cssLogo from '@/assets/logos/css.svg';
import reactLogo from '@/assets/logos/react.svg';
import nodeLogo from '@/assets/logos/node-js.svg';
import mongoLogo from '@/assets/logos/mongodb.svg';

export function AboutPage() {
  const technicalSkills = [
    { name: 'Python', icon: pythonLogo },
    { name: 'JavaScript', icon: jsLogo },
    { name: 'HTML', icon: htmlLogo },
    { name: 'CSS', icon: cssLogo },
    { name: 'React', icon: reactLogo },
    { name: 'Node.js & Express', icon: nodeLogo },
    { name: 'MongoDB & SQL', icon: mongoLogo },
  ];

  return (
    <div className="space-y-8 rounded-2xl border-2 border-border bg-secondary-background p-6 sm:p-8 shadow-sm my-6 w-full">
      {/* Intro */}
      <div className="space-y-3">
        <h1 className="flex items-center gap-2 text-2xl font-bold">Hey 👋</h1>
        <p className="leading-relaxed text-foreground/90">
          I'm <span className="font-semibold text-foreground">Rahul Pardhi</span>, a
          Computer Science &amp; Engineering student and Web Developer living in{' '}
          <span className="font-medium text-foreground">Gondia, Maharashtra</span>.
        </p>
        <p className="leading-relaxed text-foreground/90">
          I enjoy building useful and user-friendly web applications and working with AI technologies. My main technical skills include:
        </p>

        <ul className="mt-3 space-y-2">
          {technicalSkills.map((skill) => (
            <li key={skill.name} className="flex items-center gap-2 text-sm font-medium">
              <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
              <strong>{skill.name}</strong>
            </li>
          ))}
        </ul>
      </div>

      {/* Areas of Interest / Projects */}
      <div className="space-y-3">
        <p className="leading-relaxed text-foreground/90">
          I have developed two major projects:{' '}
          <span className="font-bold text-foreground">Kishan Mitra AI</span> (a smart farming assistant with features like crop disease detection, real-time weather forecasting, soil analysis, AI-based farming guidance, voice recognition, and multilingual support) and{' '}
          <span className="font-bold text-foreground">Career Path</span> (an ATS-based resume evaluator that analyzes resumes, checks skill matching, and provides feedback, tested on 50+ resumes with 80% accuracy).
        </p>
      </div>

      {/* Motivation */}
      <div className="space-y-3">
        <p className="leading-relaxed text-foreground/90">
          I have good problem-solving skills and am always open to learning new technologies, exploring new skills, improving my knowledge, and taking on new challenges.
        </p>
      </div>

      {/* Conclusion & Action Buttons */}
      <div className="space-y-4 pt-4 border-t-2 border-border/40">
        <p className="leading-relaxed text-foreground/90">
          Explore my projects, technical skills, and experience. I’m always ready to learn new technologies and take on new opportunities, challenges, and collaborations.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-main text-main-foreground border-2 border-border px-4 py-2 text-sm font-bold shadow-xs hover:opacity-90 transition-all"
          >
            <span>Send a Message</span>
            <span>&rarr;</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-all shadow-xs"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
