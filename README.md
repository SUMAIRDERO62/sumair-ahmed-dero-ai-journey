<div align="center">

# ✨ Sumair Ahmed Dero — Portfolio

**AI Engineer • ML Engineer • AI Researcher**
*Building intelligent systems that move from research to real-world software.*

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel%20%7C%20Netlify-000000?style=for-the-badge&logo=vercel&logoColor=white)](#-deployment)

[![GitHub](https://img.shields.io/badge/GitHub-SUMAIRDERO62-181717?style=for-the-badge&logo=github)](https://github.com/SUMAIRDERO62)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect%20with%20me-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sumair-ahmed-dero-70ba852a0)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat%20now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/923423159267)

</div>

---

## 📖 About this project

A fast, single-page personal portfolio for a BS Artificial Intelligence student at the **University of Sindh**. It presents my background, experience, certifications, research interests and **every public GitHub project** in one clean, dark, responsive interface — with every contact channel one tap away.

## 🚀 Features

| | Feature | Details |
|---|---|---|
| 🧭 | **Journey timeline** | Four chapters — from starting BS AI in 2024 to five parallel roles in 2026 — with GitHub repos placed on the timeline by creation date |
| 🔴 | **Live GitHub integration** | Profile stats and **every public repository** are fetched from the GitHub API on page load; new repos appear automatically |
| 🔎 | **Search, filter & sort** | Category chips, text search, sort by featured / recent / stars; "Live" button appears when a repo has a homepage URL |
| 🕒 | **Live signals** | Real-time local clock, pulsing "Live from GitHub" status, contribution chart |
| 💬 | **WhatsApp + CV** | Floating WhatsApp button (pre-filled message) and one-click CV download from the nav, hero and credentials |
| 📱 | **Responsive & accessible** | Mobile menu, scroll-progress bar, reduced-motion support, labelled controls |
| 🛟 | **Graceful fallback** | If the GitHub API is unreachable, curated projects from `src/data.js` are shown instead |
| ⚡ | **Single data file** | Bio, journey, skills, certificates and curated project text live in `src/data.js` |

## 🧱 Tech stack

- **UI:** React 19, Lucide icons, inline SVG brand icons
- **Styling:** Tailwind CSS v4 (`@theme` design tokens), Poppins font
- **Tooling:** Vite 8, ESLint
- **Hosting:** Vercel (`vercel.json` included) or Netlify

## 🗺️ Project structure

```text
github-profile/
├── public/
│   ├── Sumair_Ahmed_Dero_CV.pdf     # downloadable CV
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx                  # sticky nav + scroll progress
│   │   ├── Hero.jsx                 # typewriter, live clock, live GitHub stats
│   │   ├── About.jsx                # bio, focus areas, research interests
│   │   ├── Journey.jsx              # chapters + repos shipped per chapter
│   │   ├── Projects.jsx             # live repo grid: search / filter / sort
│   │   ├── Skills.jsx               # marquee + grouped stack
│   │   ├── Credentials.jsx          # education, certificates, training
│   │   ├── Contact.jsx              # contact cards + footer
│   │   ├── FloatingActions.jsx      # WhatsApp + back-to-top
│   │   ├── BrandIcons.jsx
│   │   └── ui.jsx                   # Reveal, Typewriter, clock helpers
│   ├── hooks/useGithub.js           # GitHub API fetch (cached)
│   ├── lib/projects.js              # merges live repos with curated text
│   ├── data.js                      # ⭐ ALL content lives here
│   ├── index.css                    # theme tokens & animations
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vercel.json
└── vite.config.js
```

## ⚙️ Getting started

**Requirements:** Node.js ≥ 20

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Production build (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## 🛠️ Customisation

| I want to… | Do this |
|---|---|
| Change bio, skills, experience, certificates or projects | Edit `src/data.js` |
| Improve a project's text | Add/edit an entry in `projects` with the exact GitHub `repo` name — it overrides the title, description, category and tags of that live repo |
| Add a live demo button | Set the repo's **Website** field on GitHub (About → ⚙️) — the "Live" button appears automatically |
| Edit the journey | Edit the `journey` array in `src/data.js` |
| Use my own photo | Put it at `public/Profileimage.jpeg`, then set `avatar: '/Profileimage.jpeg'` in `src/data.js` |
| Update my CV | Replace `public/Sumair_Ahmed_Dero_CV.pdf` (keep the file name) |
| Change colours | Edit the `@theme` tokens at the top of `src/index.css` (`--color-accent`, `--color-accent2`, …) |
| Change the WhatsApp message | Edit the `whatsapp` URL in `src/data.js` |

## 🌐 Deployment

**Vercel** — import the repository; `vercel.json` is already configured. No extra settings needed.

**Netlify** — Build command: `npm run build` · Publish directory: `dist`.

## 📬 Contact

| Channel | Link |
|---|---|
| 📧 Email | sumairdero62@gmail.com |
| 💼 LinkedIn | [sumair-ahmed-dero](https://www.linkedin.com/in/sumair-ahmed-dero-70ba852a0) |
| 🐙 GitHub | [@SUMAIRDERO62](https://github.com/SUMAIRDERO62) |
| 💬 WhatsApp | [+92 342 315 9267](https://wa.me/923423159267) |
| 📍 Location | Hyderabad, Sindh, Pakistan |

---

<div align="center">

**Open to internships, research collaboration and meaningful technical projects.**
If you like this portfolio, a ⭐ on the repo is always appreciated!

*Learning deeply • Building practically • Growing continuously*

</div>
