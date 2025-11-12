# NDR Coaching - Endurance Coaching Marketplace

## Overview

NDR Coaching is a professional endurance coaching marketplace serving corporate athletes in London, specifically focusing on triathlon, cycling, and running coaching services. The platform connects busy professionals with expert coaching through personalized training plans, lactate testing, and ongoing support. Built as a modern web application with a focus on conversion optimization and user experience, it features service showcases, booking integration, blog content, and social proof elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR and optimized production builds
- Wouter for lightweight client-side routing (alternative to React Router)
- React Query (@tanstack/react-query) for server state management and data fetching

**UI Framework & Styling**
- Shadcn/ui component library (New York style preset) providing pre-built accessible components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables for theming support (light/dark mode capability)
- Custom design system based on athletic brands (Nike, Lululemon) with inspiration from Airbnb and Strava
- Google Fonts (Outfit for headings, Inter for body text) loaded via CDN
- Radix UI primitives for accessible, unstyled component foundation

**Component Architecture**
- Functional components with React Hooks
- Form handling via React Hook Form with Zod validation
- Reusable UI components in `/client/src/components/ui/`
- Feature components in `/client/src/components/`
- Page components in `/client/src/pages/`
- Path aliases configured (@/ for client/src, @shared/ for shared, @assets/ for assets)

**Key Features**
- SEO optimization with dynamic meta tag management
- Calendly widget integration for booking consultations
- Instagram gallery integration
- Blog functionality with sanitized HTML content (DOMPurify)
- Responsive design with mobile-first approach
- Scroll restoration on route changes

### Backend Architecture

**Server Framework**
- Express.js on Node.js runtime
- ESM module system (type: "module")
- TypeScript for type safety across the stack
- Development: tsx for running TypeScript directly
- Production: esbuild for bundling server code

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Request logging middleware with performance tracking
- Error handling and validation using Zod schemas

**Data Storage Strategy**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage abstraction (IStorage) allowing easy database swap
- Drizzle ORM configured for PostgreSQL (schema defined, ready for migration)
- Schema includes: users table, blog_posts table with UUID primary keys
- Database connection via @neondatabase/serverless (Neon Postgres)

**Session Management**
- connect-pg-simple for PostgreSQL-backed sessions (configured but not actively used)
- Session data structure prepared for authentication flows

**Content Security**
- DOMPurify (isomorphic) for sanitizing user-generated HTML content
- XSS attack prevention on blog post creation
- Input validation via Zod schemas before database operations

### Data Models

**User Schema**
- id: UUID (auto-generated)
- username: unique text
- password: text (hashed in production)

**Blog Post Schema**
- id: UUID (auto-generated)
- title: text
- slug: unique text (URL-friendly identifier)
- excerpt: text (preview/summary)
- content: text (full HTML content, sanitized)
- author: text
- category: text
- publishedAt: timestamp (auto-generated)
- imageUrl: text (optional featured image)

### Routing Structure

**Client Routes**
- `/` - Home page with hero, services overview, features, sponsors
- `/services` - Services listing page
- `/triathlon` - Triathlon coaching detail page
- `/cycling` - Cycling coaching detail page
- `/running` - Running coaching detail page
- `/lactate-testing` - Lactate testing service page
- `/about` - About page (coach biography, achievements)
- `/blog` - Blog listing page
- `/blog/:slug` - Individual blog post page
- `/booking` - Booking page with Calendly integration
- `/contact` - Contact page with form

**API Routes**
- `GET /api/blog` - Retrieve all blog posts
- `GET /api/blog/:slug` - Retrieve single blog post by slug
- `POST /api/blog` - Create new blog post (with validation and sanitization)

### Design System

**Color Palette**
- Primary: Hot pink/magenta (328° 99% 50%) - athletic energy, CTAs
- Neutral base: Black backgrounds with white text (dark mode by default)
- Accent colors from chart palette for data visualization
- Elevation system using semi-transparent white overlays

**Typography Hierarchy**
- Headings: Outfit font (700, 600 weights) for modern, athletic feel
- Body: Inter font (400, 500 weights) for readability
- Responsive sizing: 4xl-7xl for heroes, 3xl-4xl for sections, base-lg for body

**Spacing & Layout**
- Tailwind spacing primitives (4, 6, 8, 12, 16, 20, 24)
- Container max-widths: 7xl for main content, 6xl for focused sections
- Consistent section padding: py-16 md:py-20 lg:py-24
- Grid-based layouts: 1 column mobile, 2-3 columns desktop

**Component Patterns**
- Hover elevation effects (hover-elevate utility class)
- Card-based content presentation with consistent shadows
- Sticky header navigation with mobile hamburger menu
- Full-width hero sections with overlay gradients
- Trust indicators and social proof elements

## External Dependencies

### Third-Party Services

**Calendly**
- Embedded booking widget for free consultation scheduling
- Loaded via external script (https://assets.calendly.com/assets/external/widget.js)
- Integration on `/booking` page

**Google Fonts**
- Roboto font family loaded via CDN
- Preconnect optimization for performance
- Fallback to system fonts configured

**Social Media**
- Instagram integration (@gabrygrim)
- LinkedIn presence
- YouTube channel

### Database & Hosting

**Neon Postgres**
- Serverless PostgreSQL database (@neondatabase/serverless)
- Connection via DATABASE_URL environment variable
- Drizzle ORM for schema management and queries
- Migration system configured (drizzle-kit)

### UI Component Libraries

**Radix UI**
- Comprehensive set of accessible, unstyled primitives
- Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, etc.
- Forms integration with navigation, popover, select, tabs, toast components

**Additional UI Dependencies**
- class-variance-authority: Component variant management
- clsx + tailwind-merge: Conditional class name utilities
- cmdk: Command palette component
- date-fns: Date formatting and manipulation
- lucide-react: Icon library

### Development & Build Tools

**Replit Integration**
- @replit/vite-plugin-runtime-error-modal: Development error overlay
- @replit/vite-plugin-cartographer: Development tooling
- @replit/vite-plugin-dev-banner: Development environment indicator

**Build Pipeline**
- Vite: Frontend bundling and dev server
- esbuild: Server-side code bundling
- TypeScript compiler: Type checking (noEmit mode)
- PostCSS: CSS processing with Tailwind and Autoprefixer

### Validation & Security

**Zod**
- Runtime type validation for forms and API inputs
- Schema definitions in shared/schema.ts
- Integration with React Hook Form via @hookform/resolvers

**DOMPurify**
- HTML sanitization (isomorphic-dompurify)
- XSS prevention for user-generated content
- Used on blog post creation and rendering

### Asset Management

**Image Assets**
- Local images stored in attached_assets directory
- Vite alias (@assets) for asset imports
- Hero images, service images, gallery photos, logos for sponsors and partners