# Rhythms of Kuchipudi

The official website for **Rhythms of Kuchipudi**, a classical Kuchipudi dance school carrying forward a 300-year-old living tradition rooted in Andhra Pradesh.

Live site: [www.rhythmsofkuchipudi.com](https://www.rhythmsofkuchipudi.com)

## Tech stack

- **[Next.js](https://nextjs.org) 16** (App Router) with **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **[Supabase](https://supabase.com)** (Postgres) for storing enquiries
- Deployed on **[Vercel](https://vercel.com)**

> **Note:** This project runs a version of Next.js with breaking changes from older releases. Before changing framework code, read the relevant guide in `node_modules/next/dist/docs/`. See [AGENTS.md](AGENTS.md).

## Features

- Marketing pages: Home, About, Founder, Teachers, Gallery, Classes, Contact
- **Enquiry form** that saves submissions to Supabase (`POST /api/enquiry`)
- **Admin dashboard** at `/admin/enquiries` to view submissions, protected by HTTP Basic Auth
- **Under-construction holding page**, toggleable via a single flag
- Light/dark theme toggle with no-flash boot script
- Custom typography and a signature petal-colour design system

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment variables

Create a `.env.local` file in the project root (it is gitignored):

```bash
# Show the full site locally while the live site stays under construction.
UNDER_CONSTRUCTION=false

# Supabase: used by the enquiry API (app/api/enquiry/route.ts).
# Found in your Supabase project under Settings → API.
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

# Password for the admin enquiries page (/admin/enquiries). Any username works.
ADMIN_PASSWORD=
```

For production, set these same variables in the Vercel project settings.

> `SUPABASE_SERVICE_ROLE_KEY` is secret and used only on the server (it bypasses Row Level Security). Never expose it to the browser.

## Database setup

The enquiry form writes to a single `enquiries` table. Create it in the Supabase SQL Editor:

```sql
create table public.enquiries (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  phone       text not null,
  level       text,
  message     text
);

-- RLS on; the service-role key used by the API bypasses it,
-- so no public policies are needed.
alter table public.enquiries enable row level security;
```

## Project structure

```
app/
  api/enquiry/route.ts   # Enquiry submission endpoint
  admin/enquiries/       # Admin dashboard (Basic Auth gated)
  about, founder, ...    # Marketing pages
  layout.tsx             # Root layout, fonts, metadata
  globals.css            # Tailwind + theme tokens
components/              # Reusable UI (Nav, Footer, EnquiryForm, …)
lib/
  content.ts             # Shared site copy & data
  site.ts                # Site-wide flags (under-construction)
  supabase.ts            # Server-only Supabase client
proxy.ts                 # Basic Auth gate for /admin/*
```

## Going live

The site defaults to an under-construction holding page in production. To launch the full site, set `UNDER_CONSTRUCTION=false` in the production environment (or change the default in [lib/site.ts](lib/site.ts)).
