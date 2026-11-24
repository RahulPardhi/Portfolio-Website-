import React from 'react';
import { GraduationCap, Building, History } from 'lucide-react';

export function EducationPage() {
  const educationList = [
    {
      degree: 'Bachelor of Technology (B. Tech)',
      major: 'Computer Science and Engineering',
      institution: 'Tulsiramji Gaikwad Patil College of Engineering and Technology',
      location: 'Nagpur, Maharashtra',
      dates: 'July 2023 – July 2027',
      status: 'Pursuing (Undergraduate)',
      details:
        'Focusing on Core Computer Science, Data Structures & Algorithms, Database Management Systems, Operating Systems, Web Development, and Artificial Intelligence.',
    },
    {
      degree: 'Higher Secondary Certificate (12th Grade)',
      major: 'Science Stream (HSC)',
      institution: 'Late. Sarjabai Bhoyar Vidyalaya',
      location: 'Dawaniwada, Gondia',
      dates: 'Completed',
      status: '74.33%',
      details:
        'Completed Higher Secondary education with focus on Physics, Chemistry, and Mathematics.',
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      major: 'General Academics (SSC)',
      institution: 'Late. Sarjabai Bhoyar Vidyalaya',
      location: 'Dawaniwada, Gondia',
      dates: 'Completed',
      status: '75.40%',
      details:
        'Completed Secondary School education with distinction in Mathematics and Science.',
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto py-6 px-2 w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
          <GraduationCap className="h-6 w-6 text-primary" /> Academic Education
        </h2>
        <div className="h-1 w-32 bg-main mt-2 mb-6 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {educationList.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-secondary-background border-2 border-border shadow-sm transition hover:shadow-md p-6 sm:p-7 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                <p className="text-sm font-semibold text-primary">{item.major}</p>
                <p className="flex items-center gap-1.5 text-sm text-foreground/80">
                  <Building className="h-4 w-4" />
                  {item.institution} • {item.location}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5">
                <span className="inline-flex items-center rounded-md bg-main/20 px-2.5 py-1 text-xs font-bold text-foreground border border-border">
                  {item.status}
                </span>
                <span className="flex items-center gap-1 text-xs text-foreground/70 font-medium">
                  <History className="h-3.5 w-3.5" />
                  {item.dates}
                </span>
              </div>
            </div>

            <p className="text-sm text-foreground/85 leading-relaxed pt-3 border-t-2 border-border/40">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
