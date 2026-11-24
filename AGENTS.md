# AGENTS.md - Development Guidelines for This Portfolio

## Project Overview

This is an Astro portfolio website with React, TypeScript, and Tailwind CSS for Rahul Pardhi. It uses shadcn/ui components.

---

## Build / Lint / Test Commands

### Package Manager

This project uses **pnpm** as the package manager.

### Available Scripts

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `pnpm dev`         | Start development server at http://localhost:4321 |
| `pnpm build`       | Build for production                              |
| `pnpm preview`     | Preview production build locally                  |
| `pnpm astro`       | Run Astro CLI commands                            |
| `pnpm astro check` | Type-check the project                            |

### Running a Single Test

This project does not have a test framework configured. Manual testing via `pnpm dev` is used.

### Code Quality

- **Prettier** is configured for formatting (see `.prettierrc.json`)
- Run `pnpm prettier --write .` to format all files
- No ESLint is configured

---

## Code Style Guidelines

### General

- Use **pnpm** for all package management
- This is an **Astro** project with React islands for interactivity
- Use `.astro` files for static content, `.tsx` for interactive components

### TypeScript

- Strict mode is enabled via `astro/tsconfigs/strict`
- Use `tsconfig.json` path aliases: `@/*` maps to `./src/*`
- Always define explicit types for Props interfaces

### Formatting (Prettier)

- **Tab width**: 4 spaces
- **Single quotes**: Use single quotes for all strings
- **Tailwind plugin**: Prettier automatically sorts Tailwind classes

### Imports

```typescript
// Use path aliases (@/*) for internal imports
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Use named imports for React hooks
import * as React from 'react';
import { useState, useEffect } from 'react';

// Use barrel exports where appropriate
import { ModeToggle } from '@/components/ModeToggle';
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ModeToggle.tsx`, `Hero.astro`)
- **Files**: kebab-case for Astro pages (e.g., `projects.astro`)
- **CSS classes**: Tailwind utility classes, use `cn()` helper for conditional classes
- **Variables**: camelCase

### Astro Components

- Define Props interface at the top of the frontmatter
- Use `Astro.props` to destructure props with defaults
- Use `<ClientRouter />` from `astro:transitions` for SPA-like navigation
- Use `client:load` or `client:visible` for interactive React components

```astro
---
interface Props {
    title?: string
    description?: string
}

const { title = 'Default' } = Astro.props
---

<html>
    <slot />
</html>
```

### React Components

- Use functional components with TypeScript
- Prefer `useState` and `useEffect` from React
- Use shadcn/ui components from `@/components/ui/`
- Use Lucide icons from `lucide-react` or `@lucide/astro`

### Tailwind CSS

- Use Tailwind v4 with `@tailwindcss/vite` plugin
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Prefer semantic Tailwind colors from CSS variables
- Use `dark:` modifier for dark mode variants

### Error Handling

- Use try/catch for async operations
- Return meaningful error states in components
- Use console.error sparingly in production code

### File Organization

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Hero.astro
│   ├── ModeToggle.tsx
│   └── TabNavigation.tsx
├── layouts/
│   └── Layout.astro
├── lib/
│   └── utils.ts      # cn() helper
├── pages/
│   ├── index.astro
│   ├── projects.astro
│   ├── skills.astro
│   └── experience.astro
├── styles/
│   └── globals.css
└── Content/          # Markdown content
```

### Development Workflow

1. Run `pnpm dev` for local development
2. Test changes at http://localhost:4321
3. Run `pnpm build` before committing to verify production build
4. Use `pnpm astro check` to type-check

### Build Output

- Production builds go to `dist/` directory

---

## Environment

- Node.js: Uses package.json `type: "module"` (ESM)
- TypeScript: Strict mode enabled
- No environment variables required for local dev
