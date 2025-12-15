# Dojo Warrior Website

## Project Structure

### Essential Files (DO NOT DELETE)
- `node_modules/` - All dependencies needed to run the website
- `package.json` - Project configuration and dependencies list
- `package-lock.json` - Locks dependency versions
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Build tool configuration
- `tailwind.config.ts` - Styling configuration
- `postcss.config.js` - CSS processing configuration

### Website Pages (client/src/pages/)
Each page is a separate file for easy understanding:
- `Home.tsx` - Homepage with hero slider
- `About.tsx` - About us page
- `Programs.tsx` - Programs overview
- `ProgramKarate.tsx` - Karate program details
- `ProgramBharatanatyam.tsx` - Bharatanatyam program details
- `ProgramYoga.tsx` - Yoga program details
- `Pricing.tsx` - Pricing plans
- `Gallery.tsx` - Photo gallery
- `Events.tsx` - Events and competitions
- `Contact.tsx` - Contact form
- `not-found.tsx` - 404 error page

### Components (client/src/components/)
Reusable UI pieces organized by section:
- `layout/` - Header, Footer, Layout wrapper
- `home/` - Homepage sections (HeroSlider, QuickIntro, etc.)
- `ui/` - Reusable UI components (buttons, cards, etc.)

### Server Files (server/)
Backend code for handling contact form and API:
- `index.ts` - Main server file
- `routes.ts` - API endpoints
- `storage.ts` - Database operations
- `vite.ts` - Development server setup

### Database Files
- `drizzle.config.ts` - Database configuration
- `shared/schema.ts` - Database schema definitions

## How to Run

1. Install dependencies:
   ```
   npm install
   ```

2. Start development server:
   ```
   npm run dev
   ```

3. Visit: http://localhost:5000 (or the port shown in terminal)

## Build for Production

```
npm run build
npm start
```

## Important Notes
- All pages are already separated into individual files
- node_modules is required (contains all libraries)
- Removing any essential files will break the website
