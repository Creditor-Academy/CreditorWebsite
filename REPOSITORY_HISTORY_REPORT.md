# 📊 Creditor Website Repository History & Development Timeline Report
**Repository:** `Sahil-creditror/CreditorWebsite`  
**Generated Date:** October 27, 2026  
**Analysis Range:** August 18, 2025 – October 27, 2026 *(14+ Months / 435 Days)*  
**Current Active Branch:** `main` | **Working Tree Status:** Clean  

---

## 1. Executive Summary

The **CreditorWebsite** repository hosts the production codebase for **Creditor Academy**, an educational and community platform providing financial freedom education, private membership association (PMA) enrollment, webinars, bootcamps, masterclasses, and digital resources.

Built on a modern full-stack JavaScript/TypeScript framework powered by **Next.js 15 (App Router)** and **React 19**, the repository contains over **104,000 lines of code** across **938 tracked files**. Development began on August 18, 2025, and has run continuously through October 27, 2026.

### Repository Vitals

| Metric | Detail |
| :--- | :--- |
| **Initial Commit** | August 18, 2025 at 12:12:26 IST (`27360e9`) by `sahil` |
| **Latest Commit** | October 27, 2026 (`899061c`) by `amaan-lms` |
| **Total Commits on `main`** | **780** commits |
| **Total Commits Across All Branches** | **795** commits |
| **Total Pull Requests Merged** | **34** GitHub PRs |
| **Active Remote Branches** | **14** branches |
| **Total Contributors** | **13** author identities (representing 2 core organizations) |
| **Total Tracked Files** | **938** files (312 `.tsx`, 66 `.ts`, 240 `.webp`, 114 `.png`, 19 `.mp4`) |
| **Total Lines of Code** | **~104,000 LOC** (TS, TSX, JS, CSS, JSON, Markdown) |
| **Core Frameworks** | Next.js 15, React 19, TypeScript 5, Tailwind CSS v4 |
| **Database & Media Services** | MongoDB (Mongoose), Cloudinary CDN, AWS S3, Nodemailer |

---

## 2. Chronological Development Eras

Development is divided into five distinct phases representing the project's evolution:

```
  August 2025          September 2025          Oct - Dec 2025          Jan - May 2026          Jun - Oct 2026
 ┌─────────────┐      ┌──────────────┐       ┌────────────────┐      ┌────────────────┐      ┌────────────────┐
 │   PHASE 1   │  ──> │   PHASE 2    │  ──>  │    PHASE 3     │  ──> │    PHASE 4     │  ──> │    PHASE 5     │
 │ Genesis MVP │      │ Launch Sprint│       │ Stabilization  │      │ Media & Funnels│      │ Modern UI & SEO│
 └─────────────┘      └──────────────┘       └────────────────┘      └────────────────┘      └────────────────┘
    72 commits          263 commits             184 commits              55 commits             206 commits
```

---

### Phase 1: Genesis, Architecture & MVP Foundation *(August 18 – August 31, 2025)*
* **Commit Count:** 72 commits
* **Primary Contributors:** Ankit Kumar (28), Sahil (23), Your Name (9), Rishab (8), rccreditor (4)
* **Key Achievements:**
  - **August 18, 2025 (12:12 IST):** Repository initialized with commit `27360e9` (`Setup`) by Sahil.
  - Initialized Next.js project directory structure, base dependencies, and Tailwind CSS design tokens.
  - Setup core CSS color tokens (`19bb6dd`), typography, and global layout shells.
  - Developed initial components: Hero section, dynamic scroll hooks, stats counter, pricing tiers, and testimonials.
  - Added dark mode support on About pages (`d86aa63`).
  - Implemented initial production deployment pipelines (`deploy 3`, `deploy 4`).
  - Merged formal PRs **#1** through **#7**.

---

### Phase 2: Peak Launch Sprint & Functional Expansion *(September 2025)*
* **Commit Count:** 263 commits *(highest activity month in repository history)*
* **Primary Contributors:** Ankit Kumar (165), Sahil (40), PrernaCreditor (26), Rishab (16), rccreditor (15)
* **Key Achievements:**
  - **Dynamic Course Architecture:** Implemented slug-based routing (`/ppcourses`, `/coursepremium`), comparison tables, and responsive cards.
  - **Live Educational Modules:** Integrated live class schedules, masterclass marketing sections, and enrollment actions.
  - **PMA (Private Membership Association):** Developed PMA application routes (`/pmaform`), agreement handling, and submission storage.
  - **Deployment Iterations:** Resolved build edge cases through successive deployment tests (`deploy test`, `deploy 6`, `deploy commit`).
  - **Mobile Optimization:** Fully overhauled responsive card sizes, tables, and hamburger navigation menus.
  - Merged formal PRs **#8** through **#26**.

---

### Phase 3: Event Systems, CSV Data Export & Email Engine *(October – December 2025)*
* **Commit Count:** 184 commits *(Oct: 47, Nov: 49, Dec: 88)*
* **Primary Contributors:** Ankit Kumar (139), PrernaCreditor (23), AnshPal (13), Komalgiri15 (9)
* **Key Achievements:**
  - **Dynamic Event Cards:** Created promo card models and assets (`event8.webp`).
  - **Holiday Campaigns:** Rolled out the Thanksgiving marketing campaign (`thanksgiving.png`) and card upgrades by Ansh Pal (PRs **#27** & **#28**).
  - **Data Export Feature:** Engineered backend CSV export functionality for admin PMA submissions (`393c0f8`).
  - **Transactional Email Automation:** Implemented `emailService.ts` using Nodemailer for form confirmations and lead notifications (`6f08e8b`).
  - **Media & Speaker Overhauls:** Refreshed speaker assets (`paul.webp`) and pop-up banners (`popbanner.webp`).
  - Merged PRs **#29** through **#34** (completing formal GitHub PR milestone era).

---

### Phase 4: Asset Optimization, Cloudinary CDN & Bootcamps *(January – May 2026)*
* **Commit Count:** 55 commits *(Jan: 35, Feb: 8, Mar: 1, Apr: 0, May: 11)*
* **Primary Contributors:** PrernaCreditor (26), Ankit Kumar (26), amaan-lms (1), razalms (1)
* **Key Achievements:**
  - **Cloudinary Image Optimization:** Scripted `migrate-to-cloudinary.js` and transitioned heavy media to Cloudinary CDN (`1351395`, `dc636e6`).
  - **Bootcamp Offerings:** Launched dedicated multi-week bootcamp programs (`67dca88`, `4dfce84`).
  - **Webinar & Checkout Hardening:** Refactored webinar registration routes (`f784a47`), payment flows, and security token handling (`tokenManager.ts`).
  - **Standardized User Journeys:** Harmonized sitewide CTAs to link universally to `/tncmasterclass` and `/signup` (`ed71ae8`).

---

### Phase 5: Modern UI Revamp, Chatbot, SEO & Content Engine *(June – October 2026)*
* **Commit Count:** 206 commits *(Jun: 68, Jul: 67, Aug: 31, Sep: 24, Oct: 16)*
* **Primary Contributors:** amaan-lms (189), Prerna Mishra / PrernaCreditor (7), Ankit Kumar (6)
* **Key Achievements:**
  - **New UI Architecture (`new-ui`):** Major summer redesign improving layouts, typography, and interactive components.
  - **Chatbot Integration:** Merged conversational assistant directly into frontend layouts (`fece8c1`, `c31f8db`).
  - **Content Marketing Engine:** Continual publishing of educational blogs (`Blogs/`) with MDX/remark parsing.
  - **Technical SEO:** Added rich OpenGraph meta tags (`75c547c`), dynamic sitemap indexing, and customized web crawler directives in `robots.txt` (`146fcc5`, `b750c10`).
  - **Conversion Elements:** Added interactive lead generation popups (`EventPopup/`) and promotional banners, culminating in commit `899061c` on October 27, 2026.

---

## 3. Month-by-Month Activity Matrix

| Month | Commits | PRs / Merges | Top Contributors | Major Highlights & Features |
| :--- | :---: | :---: | :--- | :--- |
| **2025-08** | 72 | 13 | Ankit (28), Sahil (23), Your Name (9) | Initial setup, primary CSS color scheme, MVP pages, dark mode, initial deployments |
| **2025-09** | 263 | 33 | Ankit (165), Sahil (40), Prerna (26) | Peak launch sprint: PMA flow, courses slug system, live classes, navbar & hero overhaul |
| **2025-10** | 47 | 0 | Ankit (44), Prerna (3) | Event cards & posters, courses refinement, page modularization |
| **2025-11** | 49 | 2 | Ankit (33), AnshPal (13), Prerna (3) | Thanksgiving promotion, card system component upgrade, PRs #27-#28 |
| **2025-12** | 88 | 12 | Ankit (62), Prerna (17), Komalgiri (9) | CSV data export engine, Nodemailer email service, speaker section, pop-up banners |
| **2026-01** | 35 | 1 | Ankit (18), Prerna (17) | Cloudinary migration pipeline, performance optimizations, initial bootcamp launch |
| **2026-02** | 8 | 1 | Prerna (6), Ankit (2) | Webinar flow fixes, checkout & payment changes, token manager update |
| **2026-03** | 1 | 0 | Ankit (1) | General platform maintenance |
| **2026-04** | 0 | 0 | *None* | Operational stability window (no code pushes) |
| **2026-05** | 11 | 1 | Ankit (5), Prerna (3), Amaan (1), Raza (1) | Universal CTA standardization (`/tncmasterclass`), terms & conditions updates |
| **2026-06** | 68 | 9 | Amaan (57), Ankit (4), Prerna (4) | Modern `new-ui` rollout, chatbot integration, workshop banner revamps |
| **2026-07** | 67 | 12 | Amaan (63), Ankit (2), Your Name (2) | Blog content rollout, embedded video components, weekly masterclass banners |
| **2026-08** | 31 | 4 | Amaan (29), Prerna Mishra (2) | YouTube live campaigns, SEO meta tags, promo banner toggle logic |
| **2026-09** | 24 | 0 | Amaan (24) | Dedicated bootcamp pages, robot.txt crawler directives, blog publications |
| **2026-10** | 16 | 0 | Amaan (16) | Ongoing blog series, search meta tags, webinar fixes, updated event pop-up |
| **TOTAL** | **780** | **88 Merges** | **13 Contributors** | **14 Months of Continuous Iteration** |

---

## 4. Contributor Roster & Team Roles

Commit telemetry reveals collaboration between the **Creditor Academy Core Team** and **Athena LMS**:

```
Commit Share by Organization:
  Creditor Academy Core Team : 513 commits (65.8%)
  Athena LMS Team            : 252 commits (32.3%)
  Initial Unset Config       :  15 commits ( 1.9%)
```

### Detailed Contributor Table

| Contributor | Email / Alias | Team | Commits | Active Window | Focus Areas |
| :--- | :--- | :---: | :---: | :--- | :--- |
| **Ankit Kumar** | `ankit@creditoracademy.com`<br>`ankitkumar1990asap@gmail.com` | Creditor Academy | **364** | Aug 2025 – Jun 2026 | Full-stack lead: Architecture, PMA, CSV export, email service, routing |
| **Amaan Javed** | `amaan.javed@lmsathena.com` (`amaan-lms`) | Athena LMS | **193** | May 2026 – Oct 2026 | Lead maintainer (2026): New UI, chatbot, blogs, SEO, robots.txt, popups |
| **Prerna Mishra** | `prerna@creditoracademy.com`<br>`prerna.mishra@lmsathena.com` | Creditor / Athena | **81** | Sep 2025 – Aug 2026 | Frontend lead: Asset optimization, Cloudinary migration, bootcamps, banners |
| **Sahil** | `sahil@creditoracademy.com` (`sahil`, `rccreditor`) | Creditor Academy | **64** | Aug 2025 – Sep 2025 | Founder / Project Initiator: Initial setup, color palette, courses MVP |
| **Rishab** | `rishab@creditoracademy.com` (`rishab`, `rccreditor`) | Creditor Academy | **43** | Aug 2025 – Sep 2025 | Frontend developer: About pages, mission/vision, comparison tables |
| **Ansh Pal** | `ansh.pal@lmsathena.com` (`AnshPal`) | Athena LMS | **24** | Nov 2025 | Component upgrades and UI modernizations |
| **Your Name** | `you@example.com` / `your@email.com` | Setup / Dev | **15** | Aug 2025 & Jun 2026 | Services pages, roadmap content, early chatbot testing |
| **Komal Giri** | `komal.giri@lmsathena.com` (`Komalgiri15`) | Athena LMS | **9** | Dec 2025 | Year-end UI polish and event banners |
| **Raza** | `raza@lmsathena.com` (`razalms`) | Athena LMS | **1** | May 2026 | Contact page CTA buttons |
| **Anmol Mathur** | `anmolmathur-ux` | Design / UX | **1** | May 2026 (branch) | Blog page UX and layout enhancements |

---

## 5. Branching Strategy & Remote Branches

The repository maintains **14 active remote branches** categorized by function:

| Branch Name | Primary Owner | Purpose / Description |
| :--- | :--- | :--- |
| `origin/main` | Production HEAD | The deployed production branch (synced to latest `899061c`). |
| `origin/new-ui` | amaan-lms | Comprehensive UI revamp, theme modernizations, and new workshop views. |
| `origin/chatbot` | amaan-lms | Dedicated branch for AI chatbot widget and conversational flow. |
| `origin/optimization`| amaan-lms / Prerna | Asset pipeline, image optimization, and Cloudinary scripts. |
| `origin/signup-logic`| Ankit Kumar | User signup flow, authentication, and webinar registration maps. |
| `origin/course_cards`| amaan-lms | Redesigned course card layouts and promotional content. |
| `origin/contact_raza`| razalms | Contact form layout enhancements and button placements. |
| `origin/amaan_er` | amaan-lms | Event registration (ER) workflow and navigation. |
| `origin/AnmolUI` | anmolmathur-ux | UI/UX redesign of the Blog listing and reading pages. |
| `origin/Ansh` | AnshPal | Component modernization and holiday sprint updates. |
| `origin/prerna-main` | PrernaCreditor | Multi-page promotional refresh and hero banner revamps. |
| `origin/prerna` | PrernaCreditor | Development branch for frontend components. |
| `origin/ankit` | Ankit Kumar | Backend integration and feature staging branch. |
| `origin/rishab` | rishab | Merchant pages, mission & vision statements, and about views. |

---

## 6. Complete Pull Request History (PR #1 - PR #34)

| PR # | Date | Author / Merger | Source Branch | Title / Objective |
| :---: | :---: | :--- | :--- | :--- |
| **#1** | 2025-08-28 | Ankit Kumar | `Ankit` | Initial core components and updates |
| **#2** | 2025-08-28 | rccreditor | `rishab` | About Us page content and design changes |
| **#3** | 2025-08-28 | rccreditor | `rishab` | Vision and mission page enhancements |
| **#4** | 2025-08-28 | rccreditor | `rishab` | About Us image assets and alignments |
| **#5** | 2025-08-28 | Ankit Kumar | `main` | Branch sync and merge updates |
| **#6** | 2025-08-28 | Ankit Kumar | `Ankit` | Masterclass section revisions |
| **#7** | 2025-08-29 | rccreditor | `rishab` | About Us detail card indicators and fixes |
| **#8** | 2025-09-01 | Sahil | `rishab` | Early September UI and copy updates |
| **#9** | 2025-09-02 | rccreditor | `rishab` | Private Business Creditor (PBC) modules |
| **#10** | 2025-09-02 | rccreditor | `rishab` | Theme and card color adjustments |
| **#11** | 2025-09-02 | rccreditor | `rishab` | Content and text polish across pages |
| **#12** | 2025-09-03 | rccreditor | `rishab` | Enroll button styling and card resizing |
| **#13** | 2025-09-03 | rccreditor | `rishab` | Image asset swaps and updates |
| **#14** | 2025-09-04 | rccreditor | `rishab` | Layout enhancements |
| **#15** | 2025-09-04 | rccreditor | `rishab` | Component styling tweaks |
| **#16** | 2025-09-05 | rccreditor | `rishab` | Responsive layout adjustments |
| **#17** | 2025-09-07 | rccreditor | `rishab` | Merchant page additions |
| **#18** | 2025-09-07 | rccreditor | `rishab` | Content updates |
| **#19** | 2025-09-08 | rccreditor | `rishab` | Header and navigation tweaks |
| **#20** | 2025-09-08 | rccreditor | `rishab` | Card responsive layouts |
| **#21** | 2025-09-08 | rccreditor | `rishab` | Button styling updates |
| **#22** | 2025-09-09 | Ankit Kumar | `main` | Synchronization merge |
| **#23** | 2025-09-09 | Ankit Kumar | `Ankit` | Feature integration |
| **#25** | 2025-09-16 | rccreditor | `rishab` | Course detail and pricing adjustments |
| **#26** | 2025-09-16 | rccreditor | `rishab` | Merchant page import integrations |
| **#27** | 2025-11-18 | Ankit Kumar | `main` | Branch sync |
| **#28** | 2025-11-18 | Ankit Kumar | `Ansh` | Modern component system upgrade |
| **#29** | 2025-12-02 | Ankit Kumar | `main` | Branch synchronization |
| **#30** | 2025-12-02 | Ankit Kumar | `main` | Branch synchronization |
| **#31** | 2025-12-11 | Ankit Kumar | `main` | Branch synchronization |
| **#32** | 2025-12-18 | Ankit Kumar | `main` | Branch synchronization |
| **#33** | 2025-12-21 | Ankit Kumar | `main` | Staging branch synchronization |
| **#34** | 2025-12-21 | Ankit Kumar | `ankit` | Email service & CSV export integration |

---

## 7. Codebase Architecture & Key Systems

### Directory Structure Overview
```
package/
├── src/
│   ├── app/
│   │   ├── (site)/                  # Public customer-facing routes
│   │   │   ├── (auth)/              # Login, register, authentication screens
│   │   │   ├── about / about-us     # Academy history, mission, leadership
│   │   │   ├── become* / operate*   # Private membership onboarding funnels
│   │   │   ├── Blogs/               # SEO blog engine with remark/markdown parser
│   │   │   ├── bootcamp/            # Live bootcamp curriculum and registration
│   │   │   ├── certs/               # Certification issuance and validation
│   │   │   ├── contact/             # Contact forms and inquiry handler
│   │   │   ├── documentation/       # Member guidebooks and legal agreements
│   │   │   ├── ebooks/              # Digital downloadable publications
│   │   │   ├── event-registration/  # Event ticketing and attendee management
│   │   │   ├── master-class/        # Flagship premium masterclasses
│   │   │   ├── pmaform/             # Private Membership Association enrollment
│   │   │   ├── pma-submissions/     # Administrative portal with CSV export
│   │   │   ├── services/            # Academy consulting and educational services
│   │   │   ├── webinar*             # Webinar registration and replay funnels
│   │   │   └── workshop/            # Specialized live workshops
│   │   ├── api/                     # Next.js API Route Handlers (REST)
│   │   │   ├── contact/             # Email dispatch via Nodemailer
│   │   │   ├── pma/                 # PMA form submission and MongoDB storage
│   │   │   └── auth/                # NextAuth session verification
│   │   ├── components/              # Modular UI components (Framer Motion, Lucide)
│   │   │   ├── home/                # Hero, EventPopup, bootcamp banner, testimonials
│   │   │   └── shared/              # Navbar, footer, modal dialogs, cards
│   │   ├── lib/                     # Database connections, token managers, helpers
│   │   └── providers/               # ThemeProviders, ClientLayoutShell
│   └── scripts/                     # Cloudinary migration & maintenance scripts
```

### Key Technical Systems
1. **Private Membership Association (PMA) Engine:** Handles custom legal form onboarding, agreement acceptance, MongoDB persistence, and administrative CSV reporting.
2. **Media Optimization Pipeline:** Automated Cloudinary migration (`migrate-to-cloudinary.js`) for dynamic responsive imagery and fast LCP load times.
3. **Automated Transactional Emails:** Backend `nodemailer` service (`emailService.ts`) delivering event, webinar, and PMA confirmations.
4. **Organic Search Engine Optimization (SEO):** Native `next-sitemap` integration, dynamic OpenGraph meta tag injection, and strict `robots.txt` configuration.
5. **Interactive UI & Animations:** Built with `framer-motion`, `gsap`, `swiper`, `react-fast-marquee`, and Radix UI primitives.

---

## 8. Summary & Current Status

* **Status as of October 27, 2026:** Fully maintained and active production web application.
* **Current Focus:** Dynamic event lead capture, organic educational content marketing via blogs, and live bootcamp promotions.
* **Code Quality & Integrity:** Modern TypeScript codebase with comprehensive route organization, robust styling tokens, and automated media pipelines.
