# Falcons Pedal Mafia Racing Website

## Overview

This is a modern, professional website for Falcons Pedal Mafia Racing, an elite road cycling team based in Perth, Western Australia. The team competes in the Elite Road National Championships and ProVelo Super League (PSL), focusing on developing the next generation of WA cyclists through their "One in, all in" community-driven philosophy.

The website showcases rider profiles, race events/results, team partners, and provides contact functionality for sponsorship enquiries and rider applications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful API endpoints under `/api/*`
- **Build System**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit with `db:push` command

### Project Structure
- `client/` - React frontend application
  - `src/pages/` - Page components (Home, Riders, Events, Partners, Contact)
  - `src/components/` - Reusable components including shadcn/ui
  - `src/hooks/` - Custom React hooks for data fetching
- `server/` - Express backend
  - `routes.ts` - API route definitions with seed data
  - `storage.ts` - Database access layer
  - `db.ts` - Database connection
- `shared/` - Shared types and schemas between client/server
  - `schema.ts` - Drizzle table definitions
  - `routes.ts` - API contract definitions with Zod schemas

### Design System
- **Typography**: Teko (display font), Inter (body font)
- **Primary Color**: Falcons Red (#E60000)
- **Theme**: Light/dark mode support via CSS variables

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: PostgreSQL session store

### Third-Party Libraries
- **Radix UI**: Accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **Embla Carousel**: Image carousels
- **date-fns**: Date formatting and manipulation
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend dev server with HMR
- **Drizzle Kit**: Database schema management
- **Replit Plugins**: Error overlay, cartographer, dev banner for Replit environment