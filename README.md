# Ethan Chung — Developer Portfolio

A minimal, dark-themed portfolio website for a full-stack developer. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** — Large name display with tech stack icons and GitHub/LinkedIn links
- **About Section** — Brief bio with stats (year, major, languages, learning)
- **Projects** — Showcase your work with live demo and repository links
- **Contact Form** — Fully functional contact form with backend notifications
- **Dark Theme** — Minimal, editorial design with black, white, and slate gray colors
- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Smooth Animations** — Framer Motion for scroll-triggered animations

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Backend:** Express, tRPC, Node.js
- **Database:** MySQL with Drizzle ORM
- **Build:** Vite, esbuild

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ethan-chung-portfolio

# Install dependencies
pnpm install

# Push database schema
pnpm db:push

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`

## Project Structure

```
client/
  public/           ← Static assets (images, icons)
  src/
    components/     ← Reusable UI components
    pages/          ← Page components
    lib/            ← Utilities and data
    index.css       ← Global styles and design tokens

server/
  routers.ts        ← tRPC API endpoints
  db.ts             ← Database queries
  storage.ts        ← S3 file storage helpers

drizzle/
  schema.ts         ← Database schema
```

## Customization

### Update Your Information

Edit `client/src/lib/portfolio-data.ts`:

```ts
export const HERO_DATA = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "Your City, Country",
  resumeUrl: "https://your-resume-url.pdf",
};

export const PROJECTS = [
  {
    title: "Project Name",
    description: "Project description",
    tags: ["React", "TypeScript"],
    liveUrl: "https://project-demo.com",
    repoUrl: "https://github.com/yourusername/project",
  },
  // ... more projects
];
```

### Customize Colors

Edit `client/src/index.css` and modify the CSS variables in `:root`:

```css
:root {
  --background: oklch(0.08 0.005 260);
  --foreground: oklch(0.97 0.002 260);
  --muted: oklch(0.50 0.01 260);
  /* ... more colors */
}
```

### Update Images

Replace images in `client/public/`:

- `hero-bg.png` — Hero section background
- `about-portrait.png` — About section illustration
- `blog-cover.png` — Blog section cover image

## Development

### Running Tests

```bash
pnpm test
```

### Building for Production

```bash
pnpm build
pnpm start
```

### Code Quality

```bash
# Format code
pnpm format

# Type check
pnpm check
```

## Contact Form

The contact form sends messages to your backend. Messages are processed and logged for your review.

## Deployment

This portfolio can be deployed to any Node.js hosting platform:

- **Vercel** — `vercel deploy`
- **Railway** — Connect your GitHub repo
- **Render** — Connect your GitHub repo
- **Fly.io** — `flyctl deploy`
- **Heroku** — `git push heroku main`

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
