# Nigam Homestay - WhatsApp Booking Site

A modern, mobile-first homestay landing page built with Next.js 14 (App Router) and Tailwind CSS.

## Features
- **Zero Backend**: All data is config-driven via `constants.ts`.
- **WhatsApp Integration**: Direct booking inquiries sent to WhatsApp.
- **Mobile First**: Fully responsive design.
- **Static Export**: Ready for free hosting on Netlify, Vercel, or Cloudflare Pages.

## Project Structure
- `app/`: Next.js App Router pages and layout.
- `components/`: Reusable React components.
- `constants.ts`: Configuration for text, prices, and images.

## Development

```bash
npm install
npm run dev
```

## Deployment (Static Export)

This project is configured for `next export` (via `output: 'export'` in `next.config.mjs`).

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Output:**
   The static files will be generated in the `out/` directory.

3. **Deploy to Netlify/Cloudflare:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `out`

## Customization
Edit `constants.ts` to change the homestay name, phone number, pricing, or images.
