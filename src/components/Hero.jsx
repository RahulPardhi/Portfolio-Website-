import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { SocialsBox } from './SocialsBox';

export function Hero() {
  return (
    <section className="mx-auto my-8 flex max-w-3xl flex-col items-center text-center px-4 md:px-8">
      <div className="flex flex-col items-center gap-4 w-full">
        <div>
          <h1 className="mb-2 text-4xl font-bold md:text-5xl tracking-tight">
            Hi, I'm <span className="text-primary">Rahul</span>
          </h1>
          <h2 className="text-foreground/90 text-xl leading-relaxed md:text-2xl font-medium max-w-2xl">
            A Web Developer &amp; CSE Student living in Gondia, Maharashtra
          </h2>

          {/* Direct Contact Details */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/80">
            <a
              href="mailto:pardhirahul2004@gmail.com"
              className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors py-1 px-3 rounded-lg border-2 border-border/60 hover:border-border hover:bg-secondary shadow-xs"
              title="Click to open email client"
              aria-label="Send email to pardhirahul2004@gmail.com"
            >
              <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>pardhirahul2004@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-foreground/30">•</span>
            <a
              href="tel:+918788221424"
              className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors py-1 px-3 rounded-lg border-2 border-border/60 hover:border-border hover:bg-secondary shadow-xs"
              title="Click to open phone dialer"
              aria-label="Call +91 8788221424"
            >
              <Phone className="h-4 w-4 text-sky-500 shrink-0" />
              <span>+91 8788221424</span>
            </a>
          </div>
        </div>

        <SocialsBox />
      </div>
    </section>
  );
}
