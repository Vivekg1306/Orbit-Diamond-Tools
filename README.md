# Orbit Diamond Tools

Next.js 14 (App Router) + TypeScript + Tailwind CSS scaffold.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── api/hello/      # Example API route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Shared React components
│   └── lib/                # Utilities
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── .eslintrc.json
└── .prettierrc.json
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint
- `npm run format` — Prettier write
