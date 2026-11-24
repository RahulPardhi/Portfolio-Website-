import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function ContactPage() {
  return (
    <div className="relative max-w-3xl mx-auto py-6 px-2 w-full space-y-8">
      {/* Page Heading */}
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <MessageSquare className="h-6 w-6 text-primary" /> Get in Touch
        </h2>
        <div className="h-1 w-36 bg-main mt-2 mb-4 rounded-full"></div>
        <p className="text-sm text-foreground/80 leading-relaxed max-w-xl">
          Have a project in mind, a question, or an opportunity? Feel free to reach out using the form below or through direct contact.
        </p>
      </div>

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email Card */}
        <a
          href="mailto:pardhirahul2004@gmail.com"
          className="group block p-4 rounded-xl border-2 border-border bg-secondary-background shadow-xs hover:shadow-md hover:border-emerald-500 transition-all"
          title="Click to send email"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Email Me
              </p>
              <p className="text-xs font-medium text-foreground truncate mt-0.5 group-hover:text-primary transition-colors">
                pardhirahul2004@gmail.com
              </p>
            </div>
          </div>
        </a>

        {/* Phone Card */}
        <a
          href="tel:+918788221424"
          className="group block p-4 rounded-xl border-2 border-border bg-secondary-background shadow-xs hover:shadow-md hover:border-sky-500 transition-all"
          title="Click to call"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-500 group-hover:scale-110 transition-transform">
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Call Me
              </p>
              <p className="text-xs font-medium text-foreground truncate mt-0.5 group-hover:text-primary transition-colors">
                +91 8788221424
              </p>
            </div>
          </div>
        </a>

        {/* Location Card */}
        <div className="p-4 rounded-xl border-2 border-border bg-secondary-background shadow-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Location
              </p>
              <p className="text-xs font-medium text-foreground truncate mt-0.5">
                Gondia, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="rounded-2xl bg-secondary-background border-2 border-border shadow-sm p-6 sm:p-8 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Send a Message</h3>
          <p className="text-sm text-foreground/70 mt-1">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
