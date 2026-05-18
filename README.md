# HopeBridge NGO

HopeBridge NGO is a polished React + Tailwind CSS nonprofit landing page for the InAmigos Foundation. It is designed to present programs, trust credentials, impact stories, and donation details in a clean single-page experience with subtle motion and responsive layout behavior.

## What’s Included

- Mission-led hero section with call-to-action buttons
- About, programs, impact, features, statistics, testimonials, donation, contact, and footer sections
- Framer Motion entrance and hover animations
- QR-based UPI donation flow with copy-to-clipboard support
- Professional typography and brand styling
- Local SVG fallbacks for image content

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- qrcode.react

## Project Structure

- `src/App.jsx` - page composition
- `src/components/` - reusable UI sections
- `src/data/content.js` - centralized content and links
- `src/index.css` - global styling and base utilities
- `public/images/` - project artwork and fallback visuals

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Donation Details

- UPI ID: `inamigosfoundation@icici`
- Donation QR code is generated in-app so it is always available in the UI.

## Notes

- The site is currently optimized as a frontend experience; the contact form does not submit to a backend yet.
- Image cards use external photo sources with local SVG fallbacks so the layout remains stable even when remote assets are blocked.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
