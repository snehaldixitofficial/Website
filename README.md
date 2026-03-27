<div align="center">

# 🧬 Snehal Dixit — The Living Lab

*Where creativity meets computation.*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel)](https://snehaldixitwebsite.vercel.app)

</div>

---

🔗 **Live:** [snehaldixitwebsite.vercel.app](https://snehaldixitwebsite.vercel.app)

---

A personal portfolio website for **Snehal Dixit** — Co-Founder @ Spendture Pvt. Ltd., B.Tech Computational Data Science @ VIT Bhopal, Python & GenAI Engineer, IIT-Patna Campus Ambassador, and V.N. Bhatkhande Sangeet Samman Award recipient.

---

## ✨ Sections

| Section | Description |
|---|---|
| **Hero** | Animated glitch name, rotating role titles, 3D neural network background |
| **About** | Interactive SVG brain diagram with hover-reveal lobe descriptions |
| **Dependency Graph** | Constellation-style skill graph with travelling particle animations on Canvas |
| **Experience Timeline** | Alternating left-right timeline of real work experience |
| **Project Matrix** | Card grid of real projects with hover glow and status badges |
| **Quantum Vault** | 3D flip-card certificates, awards, and achievements |
| **Command Center** | Terminal-style contact section with LinkedIn, GitHub, and email |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS v3 + custom CSS variables |
| **Animations** | Framer Motion |
| **3D Graphics** | Three.js + @react-three/fiber + @react-three/drei |
| **Canvas** | Native Canvas API (constellation graph, biotech particles) |
| **Routing** | React Router DOM v6 |
| **Fonts** | Space Grotesk · Fira Code · Lora (Google Fonts) |
| **Deployment** | Vercel |

---

## 🎨 Design System

- **Color Palette** — Obsidian black base with neon cyan `#00FFFF`, nebula purple `#9400D3`, biotech pink `#FF1493`, neon green `#39FF14`
- **Typography** — Space Grotesk (headings), Fira Code (mono/terminal), Lora (serif body)
- **Effects** — Glitch text, oil-slick animated borders, glass morphism cards, constellation particle system, 3D neural network

---

## 🚀 Getting Started

**Prerequisites:** Node.js `>=18`, npm

```bash
# Clone the repository
git clone https://github.com/snehaldixitofficial/Website.git
cd Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

App runs at `http://localhost:8080`

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
quantum-codex/
├── public/
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx          # Landing hero with 3D neural net
│   │   ├── AboutSection.tsx         # Interactive SVG brain diagram
│   │   ├── SkillsSection.tsx        # Constellation dependency graph
│   │   ├── ExperienceSection.tsx    # Work experience timeline
│   │   ├── ProjectsSection.tsx      # Project cards grid
│   │   ├── CertificatesSection.tsx  # Flip-card vault
│   │   ├── ContactSection.tsx       # Terminal contact
│   │   ├── Navigation.tsx           # Fixed top nav
│   │   ├── NeuralNetwork3D.tsx      # Three.js background
│   │   ├── BiotechParticles.tsx     # Canvas floating chars
│   │   ├── GridBackground.tsx       # Animated hex grid
│   │   └── ScientificBoot.tsx       # Boot sequence intro
│   ├── pages/
│   │   ├── Index.tsx                # Main page composition
│   │   └── NotFound.tsx             # 404 page
│   ├── App.tsx                      # Router setup
│   ├── index.css                    # Global styles + animations
│   └── main.tsx                     # App entry point
├── index.html                       # HTML shell + meta tags + emoji favicon
├── vercel.json                      # SPA rewrite rule for Vercel
├── tailwind.config.ts               # Tailwind configuration
├── vite.config.ts                   # Vite configuration
└── tsconfig.json                    # TypeScript configuration
```

---

## ⚡ Performance Notes

- **NeuralNetwork3D** — Pre-allocated `Float32Array` buffer reused every frame; squared distance checks (no `sqrt`); geometry segments reduced
- **BiotechParticles** — Mousemove throttled to 32ms; squared distance repulsion; particle count capped at 22
- **Constellation Canvas** — `ResizeObserver` instead of per-frame resize; `shadowBlur` only on particle heads, not lines; `willChange: transform` on DOM nodes

---

## 📬 Contact

| Platform | Link |
|---|---|
| LinkedIn | [linkedin.com/in/snehaldixitofficial](https://linkedin.com/in/snehaldixitofficial) |
| GitHub | [github.com/snehaldixitofficial](https://github.com/snehaldixitofficial) |
| Email | snehaldixit237@gmail.com |

---

## 📄 License

Personal project — not licensed for redistribution. All content, design, and personal information belongs to **Snehal Dixit**.

---

<div align="center">
  Built from scratch by <strong>Snehal Dixit</strong> &nbsp;🧬
</div>
