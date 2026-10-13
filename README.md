# Codenzo

Simple serverless web application built with React 19 + Vite 8, deployed automatically via GitHub Actions to Vercel.

## Live Demo

**Production:** [https://codenzo.vercel.app](https://codenzo.vercel.app)  

## Tech Stack

- **Frontend:** React 19, Vite 8
- **Testing:** Vitest, React Testing Library, JSDOM
- **Linting:** ESLint (flat config)
- **CI/CD:** GitHub Actions
- **Hosting:** Vercel (Serverless)
- **Language:** JavaScript (ESM)

## Getting Started

### Prerequisites

- Node.js ≥ 24
- npm ≥ 10

### Installation & Development

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev

# Run tests in watch mode
npm run test

# Run linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
