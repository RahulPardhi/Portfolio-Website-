import React from 'react';
import { Mail, Phone, Github, Linkedin, FileText } from 'lucide-react';

export function SocialsBox() {
  return (
    <div className="flex items-center gap-3 sm:gap-5 rounded-2xl bg-secondary-background/80 px-4 sm:px-5 py-2.5 shadow-lg backdrop-blur-sm border-2 border-border">
      {/* GitHub */}
      <a
        href="https://github.com/RahulPardhi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Visit GitHub"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background text-foreground/90 hover:text-foreground hover:scale-110 hover:border-primary transition-all duration-200 shadow-xs"
      >
        <Github className="h-5 w-5" />
      </a>

      {/* Resume */}
      <a
        href="/Rahul_Pardhi_Resume%20(1).pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        title="View Resume"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background text-foreground hover:scale-110 hover:border-primary transition-all duration-200 shadow-xs"
      >
        <FileText className="h-5 w-5" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/rahul-pardhi-b41a272a6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Visit LinkedIn"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background text-[#0A66C2] hover:scale-110 hover:border-primary transition-all duration-200 shadow-xs"
      >
        <Linkedin className="h-5 w-5" />
      </a>

      {/* Email */}
      <a
        href="mailto:pardhirahul2004@gmail.com"
        aria-label="Email pardhirahul2004@gmail.com"
        title="Open Email application"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background text-emerald-500 hover:scale-110 hover:border-emerald-500 transition-all duration-200 shadow-xs"
      >
        <Mail className="h-5 w-5" />
      </a>

      {/* Phone */}
      <a
        href="tel:+918788221424"
        aria-label="Call +91 8788221424"
        title="Open Phone dialer"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-border bg-background text-sky-500 hover:scale-110 hover:border-sky-500 transition-all duration-200 shadow-xs"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
