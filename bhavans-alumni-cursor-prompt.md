# Bhavans Alumni Association — Cursor Prompt (Static Site Repo)

> Open this file in **Cursor**, select the spec below, and ask Cursor to “create the full repository”.  
> Project name: **bhavans-alumni-association**

---

You are an expert front-end engineer. Create a complete, production-ready, **STATIC** website repo for **“Bhavans Alumni Association.”** Ship clean code, great UX, and clear docs.

## Goals & Constraints
- Static only (no servers). Use **Next.js (App Router) + TypeScript + TailwindCSS**. Must support `next export`.
- All content comes from local files: `/content` (MDX for pages/posts/events) and `/data` (JSON for directory/committee/chapters/sponsors).
- Fast, accessible, responsive, SEO-friendly, and easy to customize via a single config file.

## Tech Choices
- Next.js 14 App Router with **static export** (no dynamic server calls).
- TypeScript, ESLint, Prettier.
- **TailwindCSS** + CSS variables for theming; minimal, elegant design.
- **MDX** for long-form content (news/blog posts, event pages, static pages).
- Client-side search via a tiny, dependency-light filter function (no heavy search libs).
- Optional forms via **Formspree** or **Getform** (configurable in `site.config.ts`).
- Sitemap & robots generated at build; basic Open Graph tags.

## Repository Structure
```
/app
  (site)/layout.tsx
  (site)/globals.css
  /(site)/page.tsx                 # Home
  /(site)/about/page.tsx
  /(site)/events/page.tsx
  /(site)/events/[slug]/page.tsx
  /(site)/news/page.tsx
  /(site)/news/[slug]/page.tsx
  /(site)/directory/page.tsx
  /(site)/committee/page.tsx
  /(site)/gallery/page.tsx
  /(site)/join/page.tsx            # Membership
  /(site)/contact/page.tsx
/components
  Navbar.tsx, Footer.tsx, Hero.tsx, Section.tsx
  Card.tsx, EventCard.tsx, PostCard.tsx
  PersonCard.tsx                   # name, batch, branch, city, role, linkedinUrl
  SearchInput.tsx, Tag.tsx, Badge.tsx, Pagination.tsx
  Lightbox.tsx                     # simple image modal
/content
  pages/about.mdx, pages/join.mdx, ...
  events/*.mdx                     # frontmatter: title, date, time, location, cover, tags, summary
  news/*.mdx                       # frontmatter: title, date, cover, tags, summary
/data
  alumni.json                      # array
  committee.json                   # array
  chapters.json                    # array
  gallery.json                     # array of images with captions
  sponsors.json                    # array
/public
  images/*                         # logos, hero, gallery placeholders
root
  site.config.ts, next.config.mjs, tailwind.config.ts, postcss.config.js, tsconfig.json, package.json, README.md
```

## Branding & Config (`site.config.ts`)
Expose all branding in one place:
```ts
export const site = {
  name: "Bhavans Alumni Association",
  shortName: "Bhavans Alumni",
  tagline: "Connect. Celebrate. Contribute.",
  url: "https://bhavans-alumni.example",
  email: "contact@bhavansalumni.org",
  phone: "+91-00000-00000",
  address: "Hyderabad, India",
  social: {
    linkedin: "",
    instagram: "",
    youtube: "",
    x: ""
  },
  theme: {
    primary: "#0F766E", // teal
    accent: "#F59E0B",  // amber
    muted: "#F1F5F9"
  },
  forms: {
    contactProvider: "formspree", // or "getform" or "none"
    endpoint: "" // set later
  },
  donations: {
    upiId: "", // optional
    note: "Your support helps scholarships, mentorship, and more."
  },
  analytics: {
    plausibleDomain: "" // optional
  }
} satisfies const;
```

## Pages & UX (high level)
- **Home**: Hero (logo/name/tagline + CTA “Join the Association”), 3 value pillars, upcoming event highlight, recent news, stats (members, chapters, events), sponsors strip, newsletter signup (static form action).
- **About**: mission, history, objectives, how we operate; link to committee & chapters.
- **Events**: filter by tag/year; each event has its own MDX page (agenda, speakers, gallery).
- **News**: MDX posts with tags; list + detail view.
- **Directory**: client-side search + filters (batch, branch, city, chapter). Privacy note; only public fields: `name, batch, branch, city, linkedinUrl`. (No emails/phone publicly.)
- **Committee**: office bearers + roles + photos.
- **Gallery**: masonry grid, click to open lightbox.
- **Join**: membership info, benefits, fees; CTA to Google Form/Typeform link (configurable).
- **Contact**: static form posting to configured provider; also list address/email/phone.

## Data Models (TypeScript types)
```ts
export type Alumnus = {
  id: string; name: string; batch: string; branch?: string; city?: string;
  linkedinUrl?: string; chapter?: string; achievements?: string[];
};

export type CommitteeMember = {
  id: string; name: string; role: string; photo?: string;
  batch?: string; linkedinUrl?: string; emailPublic?: boolean;
};

export type Event = {
  slug: string; title: string; date: string; time?: string; location?: string;
  cover?: string; tags?: string[]; summary?: string;
};

export type Post = {
  slug: string; title: string; date: string; cover?: string; tags?: string[];
};
```

## Content Examples (add a few sample files)
- `content/events/alumni-meet-2025.mdx` with frontmatter and sections (Overview, Schedule, Venue, Registration).
- `content/news/welcome-note.mdx`
- `data/alumni.json` with ~25 sample entries across batches/branches/cities.
- `data/committee.json` with President/Secretary/Treasurer etc.
- `data/gallery.json` with 12 images.

## Components & Behavior
- **Navbar**: sticky, responsive; sections: Home, About, Events, News, Directory, Committee, Gallery, Join, Contact.
- **Footer**: logo, quick links, contact, social icons, copyright.
- **Search**: debounce input; filters by batch/branch/city; display result count.
- **Cards**: consistent shadows/rounding; hover effects; accessible focus rings.
- **Pagination** for Events/News (client-side, by page size).
- **Lightbox**: trap focus, ESC to close, arrow keys navigation.

## SEO & Performance
- `<Metadata>` per page; sensible titles & descriptions.
- `sitemap.xml` & `robots.txt` at build.
- Open Graph defaults (site name, logo, cover).
- Lighthouse targets: Performance, Accessibility, Best Practices, SEO ≥ 90.

## Accessibility
- Semantic landmarks, skip-to-content link, alt text on images, focus outlines, sufficient contrast.
- Keyboard navigable modals and menus.

## Build & Export
- `package.json` scripts:
  - `dev`, `build`, `start`
  - `export` → runs `next build` + `next export` to `/out`
  - `lint`, `format`
- `next.config.mjs`: `output: "export"`, `images: { unoptimized: true }`.
- Add a **README.md** with:
  - Setup (Node version), install, run, export.
  - How to add events/news (MDX), alumni (JSON), committee.
  - How to change colors, logo, and links in `site.config.ts`.
  - Deployment steps for **GitHub Pages**, **Netlify**, and **Vercel (static)**.

## Starter Content
- Provide tasteful placeholder images and logos (SVG for logo).
- Add one upcoming event and three past events.
- Add three news posts.
- Provide ~10 gallery images (stock placeholders).
- Provide 6 committee members.

## Nice-to-Have (if time permits)
- Basic RSS feed for News.
- Simple chapter pages (`/chapters/[slug]`) fed by `chapters.json`.
- “Donate via UPI” section on Join with a placeholder QR (SVG from UPI string).
- Cookie-less Plausible analytics snippet toggle via config.

---

### Acceptance Criteria
- Repo runs with `npm install && npm run dev` and exports with `npm run export`.
- No server-side data fetching; build produces a fully static `/out`.
- Clean, readable code with comments and a helpful README.
- Accessible components and good SEO defaults.
