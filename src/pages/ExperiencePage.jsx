import React from 'react';
import { Briefcase, Building, History } from 'lucide-react';

export function ExperiencePage() {
  const experiences = [
    {
      dates: 'Jan 2024 - Mar 2024',
      headline: 'Data Engineering Virtual Intern',
      organization: 'Edu Skills',
      affiliation: 'Supported by AICTE NEAT & AWS Academy',
      location: 'Virtual / Remote',
      points: [
        'Completed a 10-week AWS Data Engineering internship under AICTE NEAT and AWS Academy, applying cloud computing and data pipeline fundamentals through hands-on, industry-oriented assignments.',
        'Built and tested ETL pipelines on AWS by automating data extraction, transformation, and load steps across structured datasets.',
        'Queried, processed, and validated data consistency using SQL and cloud database principles.',
      ],
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto py-6 px-2 w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          Work &amp; Internship Experience
        </h2>
        <div className="h-1 w-36 bg-main mt-2 mb-6 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-secondary-background border-2 border-border shadow-sm transition hover:shadow-md p-6 sm:p-7 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div className="space-y-1">
                <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {exp.headline}
                </h3>
                <p className="flex items-center gap-2 text-sm text-foreground/80">
                  <Building className="h-4 w-4" />
                  {exp.organization} • {exp.affiliation} • {exp.location}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground bg-muted/70 px-3 py-1 rounded-md border-2 border-border shadow-xs">
                  <History className="h-3.5 w-3.5" />
                  {exp.dates}
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-foreground/90 list-disc pl-5 pt-2 border-t-2 border-border/40">
              {exp.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
