# NDR Coaching Marketplace - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing from premium service marketplaces and athletic brands:
- **Primary Inspiration**: Airbnb (marketplace structure, trust signals), Strava (athletic energy, social proof), Calendly (booking clarity)
- **Secondary References**: Athletic brands (Nike, Lululemon) for motivational visual language
- **Key Principles**: Professional credibility meets athletic energy, streamlined booking flow, trust-building through social proof

## Typography System

**Font Stack**: Google Fonts via CDN
- **Primary (Headings)**: Outfit (700, 600) - Modern, athletic, confident
- **Secondary (Body)**: Inter (400, 500) - Professional, highly readable
- **Accent (CTAs)**: Outfit (600) - Consistent with headings for action elements

**Hierarchy**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- Section headings: text-3xl md:text-4xl, font-semibold
- Subsections: text-xl md:text-2xl, font-semibold
- Body text: text-base md:text-lg, leading-relaxed
- Small text: text-sm, for meta info and captions

## Layout System

**Spacing Units**: Tailwind primitives - 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mt-12)
- Micro spacing (within components): 2, 4
- Component spacing: 6, 8, 12
- Section spacing: py-16 md:py-20 lg:py-24
- Container max-widths: max-w-7xl for main content, max-w-6xl for focused sections, max-w-prose for text-heavy content

**Grid Strategy**:
- Service cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature highlights: grid-cols-1 md:grid-cols-2
- Testimonials: grid-cols-1 lg:grid-cols-2
- Always single column on mobile

## Component Library

**Navigation**: 
- Sticky header with logo left, nav links center, "Book Free Consultation" CTA right
- Mobile: Hamburger menu with full-screen overlay
- Include social media icons (Instagram, LinkedIn, YouTube)

**Hero Section**:
- Full-width with athletic action image (runner/cyclist/triathlete in motion)
- Headline + supporting text + dual CTAs (primary: "Book Free Consultation", secondary: "View Services")
- Trust indicator strip below (e.g., "Trusted by 100+ London professionals")
- Buttons over image use backdrop-blur-sm with semi-transparent background

**Service Marketplace Cards**:
- Card structure: Image thumbnail, service title, key benefits (3-4 bullet points), pricing range, "Learn More" + "Book Now" buttons
- Hover: subtle lift (shadow increase, slight translate-y)
- Include service icons (triathlon, cycling, running) from Heroicons

**Booking Integration**:
- Dedicated "Book Consultation" page with embedded Calendly widget
- Quick-book sidebar widget on service pages
- Prominent booking CTAs throughout site

**Communication Channels**:
- Contact form: Name, Email, Phone, Service Interest (dropdown), Message
- WhatsApp floating button (bottom-right): Click-to-chat with pre-filled message
- Email link with icon
- Social media links in header and footer

**Instagram Gallery**:
- Masonry grid or 3-column grid showcasing training/achievement photos
- "Follow @gabrygrim" CTA overlay
- Links to Instagram posts

**Trust Elements**:
- Testimonial cards with photo, quote, name, achievement
- Achievement badges (certifications, athlete count, years coaching)
- "Featured In" media logos if applicable
- Before/after stats (PRs, race completions)

**Footer**:
- Three-column layout: About/Quick Links, Services, Contact & Social
- Newsletter signup form ("Training tips for busy athletes")
- Copyright, Privacy Policy, Terms

## Page Structure

**Homepage** (7-8 sections):
1. Hero with CTA
2. Trust indicators strip
3. Services overview (3 cards: Triathlon, Cycling, Running)
4. "Why NDR Coaching" features (4-column grid: Flexible plans, Professional support, Goal-focused, Scientific approach)
5. Instagram gallery preview
6. Testimonials
7. Final CTA section with booking widget preview
8. Footer

**Service/Marketplace Pages**:
- Service hero (image + title + description)
- Pricing tiers (cards with feature comparison)
- What's included details
- Who it's for section
- FAQ accordion
- Booking CTA

**About Page**:
- Coach bio with professional photo
- Credentials and certifications
- Coaching philosophy
- Personal athletic achievements

## Images

**Required Images**:
- **Hero**: Dynamic action shot - triathlete/cyclist/runner in training (London landmarks in background if possible) - full-width, 70vh height
- **Service cards**: Individual sport images (triathlete in water, cyclist on bike, runner on track) - 16:9 ratio
- **About page**: Professional headshot of coach + action shot coaching athlete - square ratio
- **Instagram gallery**: Pull from actual @gabrygrim feed - square crops
- **Testimonial photos**: Client headshots - circular crops

**Image Treatment**: All images should convey energy, achievement, and professionalism. Use high-quality athletic photography with good lighting.

## Animations

Use sparingly, only for:
- Scroll-triggered fade-ins for service cards (stagger effect)
- Hover states on cards (transform scale, shadow)
- Mobile menu slide-in
- No parallax, no complex scroll animations

## SEO Implementation

**Meta Structure**:
- Page titles: "[Service] Coaching in London | NDR Coaching"
- Meta descriptions including "London", "corporate professionals", specific sports
- Structured data: LocalBusiness, Service, Person (coach profile)
- Alt text for all images with location mentions where relevant

**Content Strategy**:
- H1 tags with location keywords
- Service pages target: "triathlon coaching London", "marathon training London", etc.
- Blog/resources section for content marketing (training tips, London race guides)

This design creates a premium, trustworthy marketplace experience that balances professional credibility with athletic inspiration, making it easy for busy London professionals to discover, evaluate, and book coaching services.