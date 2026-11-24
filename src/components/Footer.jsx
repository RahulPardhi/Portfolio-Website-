import React from 'react';
import { Mail, Phone, Github, Linkedin, FileText } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-border/20">
      <p className="font-medium text-foreground/80">
        &copy; {currentYear} Rahul Pardhi. All rights reserved.
      </p>
      <p className="text-xs text-foreground/60 mt-1.5">
        Email:{' '}
        <a
          href="mailto:pardhirahul2004@gmail.com"
          className="hover:underline text-foreground/80 transition-colors"
        >
          pardhirahul2004@gmail.com
        </a>{' '}
        • Phone:{' '}
        <a
          href="tel:+918788221424"
          className="hover:underline text-foreground/80 transition-colors"
        >
          +91 8788221424
        </a>
      </p>
      <div className="flex justify-center items-center gap-3 mt-4">
        <a
          href="https://github.com/RahulPardhi"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-background text-foreground hover:scale-110 hover:border-primary transition-all shadow-xs"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="/Rahul_Pardhi_Resume%20(1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          aria-label="Resume"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-background text-foreground hover:scale-110 hover:border-primary transition-all shadow-xs"
        >
          <FileText className="h-4 w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-pardhi-b41a272a6"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-background text-[#0A66C2] hover:scale-110 hover:border-primary transition-all shadow-xs"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href="mailto:pardhirahul2004@gmail.com"
          title="Email"
          aria-label="Email"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-background text-emerald-500 hover:scale-110 hover:border-emerald-500 transition-all shadow-xs"
        >
          <Mail className="h-4 w-4" />
        </a>
        <a
          href="tel:+918788221424"
          title="Phone"
          aria-label="Phone"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-border bg-background text-sky-500 hover:scale-110 hover:border-sky-500 transition-all shadow-xs"
        >
          <Phone className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
