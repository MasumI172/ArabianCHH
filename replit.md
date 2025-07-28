# Arabian Coast Property Rental Platform

## Overview

This is a luxury property rental platform built with React, Express, and PostgreSQL. The application showcases high-end vacation rentals along the Arabian coast, featuring a modern frontend with elegant UI components and a robust backend API for property management and inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Luxury and modern aesthetic with warm beige/cream tones and gold accents, similar to high-end interior design showcases.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API Design**: RESTful API endpoints
- **Session Management**: Express sessions with PostgreSQL store
- **Build Tool**: esbuild for production builds

### UI Component System
- **Design System**: shadcn/ui with "new-york" style
- **Base Color**: Neutral with gold accent theme
- **Typography**: Inter and Space Grotesk fonts
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Database Schema
- **Properties Table**: Stores property details including name, description, pricing, amenities, images, and ratings
- **Users Table**: Basic user authentication structure
- **Inquiries Table**: Customer inquiry management with property references
- **Categories**: Properties are categorized (apartment only - simplified from previous beachfront, villa, mansion, penthouse, retreat)

### API Endpoints
- `GET /api/properties` - Retrieve all properties
- `GET /api/properties/featured` - Get featured properties
- `GET /api/properties/:id` - Get specific property details
- `GET /api/properties/category/:category` - Filter by category
- `POST /api/inquiries` - Submit customer inquiries

### Frontend Pages
- **Home**: Hero section with featured properties and services overview
- **Properties**: Property listing with search and filtering capabilities
- **Property Detail**: Individual property showcase with image carousel
- **About**: Company information and team details
- **Services**: Detailed service offerings
- **Contact**: Customer inquiry form

### UI Components
- Property cards with rating displays and feature highlights
- Image carousels for property galleries
- Search and filter functionality (simplified to "All Properties" and "Apartment" only)
- Responsive navigation with mobile menu
- Toast notifications for user feedback
- Form components with validation
- **Booking Calendar Component**: Interactive date picker with Hostex integration for real-time availability checking

## Data Flow

1. **Property Display**: Frontend fetches property data from backend API using TanStack Query
2. **Search/Filter**: Client-side filtering of property results with category and price range options
3. **Property Details**: Dynamic routing loads individual property data by ID
4. **Inquiries**: Form submissions are validated client-side and sent to backend API
5. **Database Operations**: Backend uses Drizzle ORM to interact with PostgreSQL database

## External Dependencies

### Database
- **Neon**: Serverless PostgreSQL database hosting
- **Connection**: WebSocket-based connection using @neondatabase/serverless

### Frontend Libraries
- **Radix UI**: Unstyled, accessible UI primitives
- **Lucide React**: Icon library
- **Date-fns**: Date manipulation utilities
- **Embla Carousel**: Carousel component for image galleries
- **React Day Picker**: Calendar component for booking date selection

### Development Tools
- **Vite**: Frontend build tool and dev server
- **Drizzle Kit**: Database migration and schema management
- **TSX**: TypeScript execution for development
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema updates

### Production Setup
- Server runs compiled Express app from `dist/index.js`
- Static files served from `dist/public`
- Database connection via environment variable `DATABASE_URL`
- Automatic database seeding with sample properties

### Development Workflow
- Hot module replacement via Vite dev server
- Database schema changes via `npm run db:push`
- TypeScript checking with `npm run check`
- Development server with `npm run dev`

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Serves pre-built static files
- **Database**: Requires `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL-backed session storage
- **Hostex Integration**: Calendar component integrates with Hostex booking platform for real-time availability

## Recent Changes (July 26, 2025)
- **Property Filters**: Simplified category filter to only show "All Properties" and "Apartment" options
- **Booking System**: Replaced static booking form with interactive calendar component
- **iCal Integration**: Added BookingCalendar component that:
  - Fetches real-time availability from Hostex iCal feed every 2 minutes
  - Displays interactive calendar with booked dates highlighted in red  
  - Prevents booking conflicts by disabling unavailable date ranges
  - Includes guest count selection with property max limits
  - Shows last updated timestamp and booking count
  - Redirects to contact form with pre-filled booking details
  - Maintains luxury aesthetic with custom styling and gold accent colors
- **Critical iCal Fix**: Updated to correct Hostex property iCal URL (ID: 12282085) to ensure accurate availability data matching the dashboard

## Latest UI/UX Improvements (July 27, 2025)
- **Date Validation Fix**: Fixed critical glitch where past dates showed as "available" - added proper validation to prevent selecting past dates and ensure check-out is after check-in
- **Property Availability Status**: Added green "Available" badges to all property cards with indicator dot for better visual feedback
- **Date Picker Enhancement**: Removed problematic showPicker() calls that caused user gesture errors, improved natural date selection behavior
- **House Rules Cleanup**: Removed "Visiting hours: 8:00 AM to 10:00 PM" section
- **Check-in Time Update**: Changed "Check-in time: 3:00 PM" to "Check-in time: From 3PM"
- **Properties Filter Removal**: Removed all price filter options from Properties page
- **About Page Simplification**: Reduced to single text description only, removed stats/values/team sections
- **WhatsApp Link Fix**: Changed WhatsApp links to open in same window instead of new tabs
- **Contact Icon Enhancement**: Made contact icons colorful (WhatsApp green, Email blue, Hours gray)
- **Copyright Update**: Updated footer copyright to "© 2025 Arabian Coast Holiday Homes. All rights reserved."
- **Previous Updates**: Social media improvements, home page enhancements, currency conversion to AED, contact updates, footer improvements, spacing optimization, header enhancements, price removal per user request

## Deployment & Domain Configuration (July 27, 2025)
- **Production Build**: Website successfully built for deployment (2.2MB optimized package)
- **Hosting Platform**: Configured for Replit Deployments with autoscale pricing
- **Custom Domain**: arabiancoastholidayhomes.com (hosted by mywebb) - DNS verified and configured
- **SSL Certificate**: Domain verified ✅ - Certificate shows replit.app instead of custom domain (requires primary domain setting)
- **Database**: PostgreSQL configured with proper environment variables
- **Date Formatting**: Updated WhatsApp inquiry messages to use friendly date format (Friday, January 26, 2024 instead of 2024-01-26)
- **Security Update**: Patched CVE-2025-30208 vulnerability by upgrading Vite from 5.4.14 to 5.4.19
- **Deployment Status**: Live on custom domain, domain verified, SSL certificate provisioning in final stage, security vulnerabilities resolved