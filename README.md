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

## Optional: EmailJS contact setup

- The contact form supports EmailJS for real email delivery. To enable it, create an account at https://www.emailjs.com and create a service and template.
- Add the following environment variables to a `.env` file at the project root (Vite loads variables prefixed with `VITE_`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

- If these variables are present the app will attempt to send via the EmailJS REST API; otherwise it falls back to opening the user's email client with a `mailto:` link.

## Committing changes

To commit the changes locally:

```bash
git add .
git commit -m "feat: add dark mode toggle, interactive contact form, EmailJS support, animations"
```

## Deploying

There are multiple easy ways to deploy this static site.

- GitHub Pages (recommended for simple hosting):

   1. Push your repository to GitHub (branch `main` or `master`).
   2. The included GitHub Actions workflow will build and deploy the `dist` folder to GitHub Pages automatically on push.

- Vercel / Netlify (recommended for continuous deployment with previews):

   - Connect the repository to Vercel or Netlify and set the build command to `npm run build` and the publish directory to `dist`.

   Environment variables for EmailJS (if used):

   Add a `.env` or set repository secrets on your host for `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_USER_ID`.

   CI:

   - A lightweight CI workflow is included to run `npm ci` and `npm run build` for pushes and pull requests. See `.github/workflows/ci.yml`.



## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
