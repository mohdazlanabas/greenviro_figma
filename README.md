GreenViro Remake

Vite + React + TypeScript + Tailwind CSS v4 single-page site. Includes local UI primitives and a Figma helper for resilient images.

Tech Stack
- Vite 5 (React plugin)
- React 18 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- lucide-react icons
- shadcn-style UI primitives in `components/ui/*`

Prerequisites
- Node.js ≥ 18
- npm ≥ 9

If you use nvm:
```
nvm install 18
nvm use 18
```

Getting Started
```
npm install
npm run dev
```
Vite will print a local URL (e.g. http://localhost:5173 or 5174).

Build & Preview
```
npm run build
npm run preview
```
Output is written to `dist/`.

Project Structure
- `App.tsx`: Page composition (Header, Hero, Services, About, Contact, Footer)
- `components/`: Sections and UI primitives
  - `figma/ImageWithFallback.tsx`: Image component with a fallback placeholder
  - `ui/`: Button, Card, Input, Textarea, etc.
- `styles/globals.css`: Tailwind v4 import + design tokens and base styles
- `src/main.tsx`: Vite entry that mounts `App`

Deployment
Netlify (easiest)
- Drag-and-drop: `npm run build`, then upload the `dist/` folder at Netlify Drop.
- From Git:
  - Build command: `npm run build`
  - Publish directory: `dist`
- CLI (optional):
```
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Render (Static Site)
- New → Static Site → Connect repo (SSH remotes supported)
- Build command: `npm run build`
- Publish directory: `dist`

Notes & Troubleshooting
- Tailwind v4: PostCSS must include `@tailwindcss/postcss` (already configured in `postcss.config.js`).
- Version-suffixed imports: If you see imports like "@radix-ui/react-slot@1.x", replace with the normal package name (e.g. "@radix-ui/react-slot"). The UI files used by the current sections are already normalized.
- Icons: Ensure `lucide-react` is installed (already in `package.json`).

License
Not specified.
