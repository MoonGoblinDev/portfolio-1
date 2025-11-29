<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Portfolio

Modern React + Vite portfolio for showcasing projects and socials.

## Run Locally
- Install dependencies: `npm install`
- Start the dev server: `npm run dev`

## Project Structure
- `public/data` – JSON content for projects, socials, and assets
- `public/assets` – Static media served directly by Vite
- `src/components` – Reusable UI pieces like cards and detail view
- `src/hooks` – Data loading and other shared hooks
- `src/styles` – Global CSS (glass effect, animations, resets)
- `src/App.tsx` – Page layout and section composition
- `src/main.tsx` – Entry point that mounts the app

Update the JSON files in `public/data` to add new projects or socials without touching the React components.
