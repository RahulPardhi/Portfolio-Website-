import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function TabNavigation() {
  const location = useLocation();

  const tabs = [
    { path: '/', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div
      role="tablist"
      aria-label="Portfolio sections"
      className="items-center justify-center rounded-base border-2 border-border bg-background p-1 text-foreground grid w-full grid-cols-3 sm:grid-cols-6 gap-1"
    >
      {tabs.map((tab) => {
        const isActive =
          tab.path === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(tab.path);

        return (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-base border-2 px-2 py-1.5 text-sm font-heading transition-all text-center ${
              isActive
                ? 'bg-main text-main-foreground border-border font-bold shadow-xs'
                : 'border-transparent text-foreground/80 hover:text-foreground hover:bg-secondary/60 font-medium'
            }`}
          >
            {tab.label}
          </NavLink>
        );
      })}
    </div>
  );
}
