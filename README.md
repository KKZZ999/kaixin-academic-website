# Kaixin Zhang Academic Website

A clean academic portfolio website for Kaixin Zhang, built with Next.js App Router, Tailwind CSS and TypeScript.

## Edit Site Content

Most text is stored in:

```txt
data/site-content.ts
```

Update that file to edit the name, title, tagline, research text, projects, publication placeholders, portfolio items and contact links.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to Vercel and choose **Add New Project**.
3. Import the repository.
4. Use the default Next.js settings.
5. Deploy.

If the website lives inside a larger repository, set the Vercel root directory to:

```txt
kaixin-academic-website
```
