# Movie Ticket Booking Platform - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing from entertainment and booking platforms:
- Movie browsing: Netflix-style card grids with hover interactions
- Seat selection: Custom theater-style interface inspired by BookMyShow/Fandango
- Booking flow: Airbnb-inspired multi-step process with clear progression

**Key Principles:**
- Immersive cinema experience with dramatic visual hierarchy
- Frictionless booking flow with clear status indicators
- Interactive components that respond to user actions
- Desktop-first for seat selection, fully responsive across devices

## Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - 400, 500, 600, 700
- Display: 'Bebas Neue' (Google Fonts) - 400 - for movie titles and dramatic headers

**Hierarchy:**
- Hero/Movie Titles: text-4xl to text-6xl (Bebas Neue)
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-xl, font-semibold
- Body Text: text-base, font-normal
- Labels/Metadata: text-sm, font-medium
- Captions: text-xs

## Layout System

**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-24
- Card gaps: gap-4, gap-6, gap-8
- Element margins: m-2, m-4, mt-8, mb-12

**Grid System:**
- Movie Cards: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
- Showtime Selection: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Container: max-w-7xl mx-auto px-4

## Core Pages & Layouts

### 1. Homepage/Movie Browse
**Hero Section (30vh):**
- Featured movie backdrop image as hero
- Overlay with movie title (Bebas Neue, text-6xl), rating badge, and primary CTA
- Blurred button backgrounds for CTAs on image
- No hover effects on overlay buttons

**Movie Grid:**
- Aspect ratio 2:3 poster cards with rounded corners (rounded-lg)
- Hover scale effect (scale-105 transition)
- Card overlay showing: title, rating, genre, runtime
- "Book Now" CTA appears on hover

**Sections:**
- Now Showing
- Coming Soon
- Top Rated
Each with horizontal scroll on mobile, grid on desktop

### 2. Movie Details Page
**Layout:**
- Two-column split (lg:grid-cols-3)
- Left (col-span-2): Movie backdrop image, title, synopsis, cast/crew
- Right (col-span-1): Sticky booking widget with showtime selection

**Showtime Selector:**
- Date tabs (horizontal scroll)
- Theater cards with location and available times
- Time slot buttons in grid layout
- Clear visual distinction for sold-out vs available slots

### 3. Seat Selection Interface
**Theater Layout:**
- Screen indicator at top (full width, curved element)
- Seat grid centered with row labels (A, B, C...) on left
- Columns numbered at top
- Maintain aspect ratio for realistic theater view
- 50-150 seats typical (10-15 rows, 8-12 columns)

**Seat States:**
- Three distinct visual states (icons via Heroicons or custom shapes)
- Individual seat buttons (w-8 h-8 to w-10 h-10 on desktop, w-6 h-6 mobile)
- Rounded squares or seat-shaped icons
- Gap between seats: gap-1 to gap-2

**Legend:**
- Fixed position at top or bottom
- Icons with labels showing seat states
- Seat type categories (Regular, Premium, Recliner) with pricing

**Responsive Strategy:**
- Desktop: Full theater view with zoom controls
- Tablet: Scrollable with pinch-to-zoom
- Mobile: Horizontal and vertical scroll, smaller seat size

### 4. Booking Summary & Checkout
**Layout:**
- Two-column (lg:grid-cols-3)
- Left (col-span-2): Booking details, user form
- Right (col-span-1): Sticky price breakdown card

**Booking Details Card:**
- Movie poster thumbnail
- Title, showtime, theater
- Seat numbers listed
- Clear price breakdown

**Progress Indicator:**
- 3-4 step indicator at top
- Steps: Select Movie → Choose Seats → Payment → Confirmation
- Active step highlighted, completed steps with checkmarks

## Component Library

### Cards
- **Movie Card:** Poster image, title overlay, rating badge, hover lift effect
- **Theater Card:** Theater name, location, amenities icons, showtime grid
- **Summary Card:** Bordered, subtle shadow (shadow-lg), padding p-6

### Buttons
- **Primary CTA:** Large (px-8 py-3), rounded-lg, font-semibold
- **Secondary:** Outlined version with border-2
- **Time Slot Button:** Compact (px-4 py-2), rounded-md
- **Seat Button:** Square/icon-based, minimal padding

### Icons
**Library:** Heroicons (via CDN)
- Star (rating)
- Clock (showtime)
- MapPin (location)
- Ticket (booking)
- User (profile)
- Check (confirmation)

### Forms
- Input fields: px-4 py-2.5, rounded-lg, border
- Labels: text-sm, font-medium, mb-1.5
- Validation states with icon indicators
- Focus states with ring utilities

### Navigation
- Fixed header: backdrop-blur, py-4
- Logo left, navigation center, user/cart right
- Mobile: Hamburger menu with slide-in drawer
- Cart icon with badge showing ticket count

## Images

**Hero Image:**
- Yes - Featured movie backdrop at top of homepage
- Full-width, 30vh height, with overlay gradient for text readability
- Buttons on hero use backdrop-blur-sm

**Movie Posters:**
- Throughout the site in card grids
- Aspect ratio 2:3, lazy loading
- Rounded corners (rounded-lg)

**Theater/Venue Images:**
- Optional theater photos in detail sections
- Aspect ratio 16:9 or 4:3

## Interactions & Effects

**Minimal Animation:**
- Seat selection: Quick scale on select (scale-95 on click)
- Card hover: Subtle lift (translateY)
- Page transitions: Fade-in only
- No carousel auto-play, no parallax, no complex scroll animations

**Focus on Functionality:**
- Instant feedback on seat selection
- Clear loading states during availability checks
- Toast notifications for booking confirmations
- Smooth scroll to sections, no jarring jumps

## Accessibility
- All interactive elements keyboard accessible
- ARIA labels for seat states
- Focus visible states on all buttons and inputs
- Color-independent seat state indicators (use icons/patterns)
- Screen reader announcements for seat selection changes

This design balances the immersive entertainment experience with the practical needs of a booking platform, ensuring users can efficiently browse, select, and purchase tickets while enjoying a polished, cinema-worthy interface.