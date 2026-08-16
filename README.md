# Bharath S — Portfolio

> A premium full-stack developer portfolio showcasing projects, experience, and skills with a dark theme and animated neon UI elements.

[![React](https://img.shields.io/badge/React-19%2B-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13.x-FF2D55?logo=framer&logoColor=white&style=for-the-badge)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## Table of Contents

- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Data Layer](#data-layer)
- [Scripts](#scripts)
- [Backend (Contact Form)](#backend-contact-form)
- [Neon Footer Border](#neon-footer-border)
- [Contact](#contact)

---

## Demo

🌐 [Live Portfolio](https://bharaths-portfolio.vercel.app)

---

## Tech Stack

| Area | Tools |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS, Framer Motion |
| **Icons** | Lucide React |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Auth/API** | REST APIs, JWT, Nodemailer |
| **Dev Tools** | Git, GitHub, VS Code, Postman, MongoDB Compass |

---

## Features

- **Hero Section** — Animated headline, profile image, and CTA buttons with smooth entrance animations
- **About** — Professional summary, strengths, and career interests
- **Skills** — Categorized skill display (Frontend, Backend, Database, Tools, Libraries)
- **Experience** — Interactive timeline of internships and real-world projects
- **Projects** — Showcase of 7+ full-stack and AI/ML projects with modal previews
- **Education** — Academic background from S.A. Engineering College
- **Certifications** — Industry certifications and course completions
- **Achievements** — Notable accomplishments
- **Contact** — Form with email integration via Express + Nodemailer
- **Footer** — Premium design with a continuously rotating neon orange/gold border

### Key UI Elements

- **Neon Footer Border** — A conic-gradient border clipped to a 2px ring using CSS masking, with a blurred glow layer behind it. Both layers rotate continuously (`transform: rotate(360deg)`), while the footer content remains perfectly static. Respects `prefers-reduced-motion`.
- **Responsive Design** — 3-column layout on desktop, 2-column on tablet, 1-column on mobile
- **Hover Animations** — Smooth transitions on links, buttons, and social icons using Framer Motion and CSS transitions
- **Resume Download** — Download button triggers direct PDF download (not browser preview)

---

## Screenshots

![Hero Section](screenshots/hero.png)
*Hero section with animated headline and profile image*

![Projects](screenshots/projects.png)
*Project showcase with modal previews*

![Footer](screenshots/footer.png)
*Premium footer with animated neon border*

> Screenshots are stored in `screenshots/`. Place your own screenshots there to replace these placeholders.

---

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm** (comes with Node.js)

### Installation

```bash
git clone https://github.com/BHARATHs-dev/portfolio-bharath.git
cd portfolio-bharath
npm install
```

### Environment Variables

The contact form backend requires:

```bash
# server/.env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

A `.env.example` is provided in `server/`.

### Running Development Servers

```bash
# Frontend only (Vite dev server)
npm run dev

# Backend only (Express server on port 5000)
npm run server

# Both (frontend + backend concurrently)
npm start
```

The Vite dev server proxies `/api/*` to `http://localhost:5000`.

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
bharath-portfolio/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
│       └── Bharath_S_Resume.pdf
├── src/
│   ├── assets/                    # Images, icons, resume
│   ├── components/                # Reusable UI components
│   │   ├── about/
│   │   ├── certifications/
│   │   ├── common/
│   │   ├── contact/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── hero/
│   │   ├── layout/
│   │   ├── projects/
│   │   └── skills/
│   ├── data/                      # Structured content
│   ├── hooks/                     # Custom React hooks
│   ├── layouts/
│   ├── lib/
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── server/
│   ├── config.js
│   ├── index.js
│   └── routes/
│       └── contact.js
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── eslint.config.js
└── package.json
```

---

## Data Layer

All portfolio content is structured in `src/data/` as JavaScript modules — no external CMS required.

| File | Contents |
|---|---|
| `personal.js` | Name, title, positioning, contact info, social links, resume URL |
| `navigation.js` | Navbar quick links (Home, About, Skills, etc.) |
| `skills.js` | Tech skills grouped by category |
| `projects.js` | Project showcase data (title, description, tech stack, images, demo/GitHub links) |
| `experience.js` | Internship and work experience entries |
| `education.js` | Academic background |
| `certifications.js` | Certifications and course completions |
| `achievements.js` | Notable accomplishments |
| `socialLinks.js` | Social media links with icons |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run server` | Start Express backend only |
| `npm start` | Run both dev server + backend |

---

## Backend (Contact Form)

The Express server (`server/`) provides:

- `POST /api/contact` — Sends form submissions via Nodemailer

### Setup

1. Copy `server/.env.example` to `server/.env`
2. Fill in your email credentials
3. Run with `npm run server` or `npm start` (with frontend)

---

## Neon Footer Border

The footer features a premium animated neon border:

- **Two absolutely-positioned layers** behind the footer content
- **`.footer-neon-glow`** — Blurred `conic-gradient` for soft outer glow
- **`.footer-neon-border`** — Sharp `conic-gradient` clipped to a 2px ring using CSS `mask-composite: exclude`
- Both layers share a `9s linear infinite` rotation animation
- **Only the neon layers rotate** — `.footer-outer`, `.footer-inner`, and all content remain completely static
- **Static base border**: `rgba(255, 106, 0, 0.12)` defines the container edge underneath
- **Neon colors**: `#FF6A00` → `#FFB000` with a tiny `#FFFFFF` highlight
- **Accessibility**: `prefers-reduced-motion: reduce` disables animation, keeps static border

---

## Contact

- **Email**: [bharaths2202@gmail.com](mailto:bharaths2202@gmail.com)
- **GitHub**: [@BHARATHs-dev](https://github.com/BHARATHs-dev)
- **LinkedIn**: [Bharath S](https://www.linkedin.com/in/bharath-s-270782344)
