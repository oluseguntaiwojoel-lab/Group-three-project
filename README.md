# 🥦 Foody — Organic Food & Produce Website

A multi-page, responsive front-end website for an organic farm and food delivery brand. Built with pure HTML, CSS, and vanilla JavaScript as a collaborative group project.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Pages](#pages)
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Team](#team)
- [License](#license)

---

## Overview

Foody is a front-end prototype for an organic produce store. It showcases a full multi-page website experience including a hero landing page, product catalogue, blog, farm tour page, shopping cart, user profile, and contact form — all built without any framework or backend.

The project was originally created by [oluseguntaiwojoel-lab](https://github.com/oluseguntaiwojoel-lab/Group-three-project) and expanded into a full multi-page site in this fork.

---

## Live Demo

> Open `index.html` directly in your browser — no server required.

---

## Pages

| File | Purpose |
|---|---|
| `index.html` | Landing page — hero, about, features, product preview, reviews, blog, footer |
| `products.html` | Full product catalogue with category filters |
| `about.html` | Brand story and team information |
| `blog.html` | Organic farming articles and tips |
| `our-farm.html` | Farm tour and sustainability information |
| `cart.html` | Shopping cart page |
| `profile.html` | User account / profile page |
| `contact.html` | Contact form and location details |

---

## Features

### Navigation
- Sticky responsive navbar with logo, page links, and icon bar (search, user, cart)
- **Pages** dropdown menu linking to Blog and Our Farm
- Mobile hamburger toggle — nav slides in/out with icon swap (`fa-bars` ↔ `fa-times`)
- Active link highlighting per page

### Hero Section
- Full-viewport background image with overlay
- Headline, subtext, and two CTA buttons
- "Products" button links to `products.html`; "Services" button links to `contact.html`

### About / Main Section
- Two-column layout: farm image + content
- Checklist of key selling points
- "Read More" button navigates to `about.html`

### Features Section
- Three feature cards: Natural Process, Organic Products, Biologically Safe
- Each card links to `about.html` for more detail

### Product Grid
- 4-column responsive grid (3 cols → 2 cols → 1 col on smaller screens)
- Product cards with image, name, current price, strikethrough original price, and badge (New / Sale / Trending / Hot)
- Each card has **View Detail** and **Add to Cart** actions
- Category filter buttons: All, Vegetable, Fruits, Fresh
- "Browse More Products" button navigates to `products.html`

### Customer Reviews
- Three testimonial cards with quote, reviewer image, name, and profession
- Centre card highlighted in green (`active` class)
- Previous / Next navigation buttons

### Blog Section
- Three blog cards with cover image, article title, author, and date metadata

### Visit Our Farm Banner
- Full-width green banner with headline, description, and "Visit Now" CTA

### Footer
- Four-column layout: brand + social icons, address, quick links, newsletter sign-up
- Social links: Twitter, Facebook, YouTube, LinkedIn
- Copyright bar

### Back to Top
- Fixed floating button (bottom-right) — smoothly scrolls to the top of the page

### Responsive Design
- Breakpoints at 992px, 768px, 575px, and 325px
- Flex/grid layouts collapse gracefully on all screen sizes
- Mobile menu replaces desktop nav links below 768px

---

## Project Structure

```
Group-three-project/
│
├── index.html              # Landing page
├── about.html              # About page
├── products.html           # Full product catalogue
├── blog.html               # Blog listing
├── our-farm.html           # Farm tour page
├── cart.html               # Shopping cart
├── profile.html            # User profile
├── contact.html            # Contact form
│
├── style.css               # Global stylesheet (all pages)
├── script.js               # Shared JavaScript (nav toggle, scroll)
│
├── images/                 # All image assets
│   ├── main basket.jpg     # Hero background
│   ├── man.jpeg            # About section farmer photo
│   ├── tomatoes-removebg-preview.png
│   ├── pineapple.jpg
│   ├── pepper.png
│   ├── Strawberries.png
│   ├── fresh-cucumber.jpg
│   ├── download-removebg-preview.png
│   ├── plabtain.webp
│   ├── 1.png               # Feature icon — Natural Process
│   ├── 2.png               # Feature icon — Organic Products
│   ├── 3.png               # Feature icon — Biologically Safe
│   ├── blog-1.jpg
│   ├── blog-2.jpg
│   ├── blog-3.jpg
│   ├── Francis.jpeg        # Review avatar
│   ├── ilekys.jpeg         # Review avatar
│   └── Timi.jpeg           # Review avatar
│
├── styles/                 # Additional/scoped stylesheets (if any)
└── .vscode/                # Editor settings (launch config)
```

---

## Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Layout (Flexbox & Grid), animations, responsive media queries |
| **Vanilla JavaScript** | Mobile nav toggle, back-to-top scroll behaviour |
| **Google Fonts** | Poppins, Lora, Roboto |
| **Font Awesome 7.0.1** | Icons throughout the UI |

No build tools, no npm, no framework — open straight in a browser.

---

## Getting Started

### Prerequisites

All you need is a modern web browser (Chrome, Firefox, Edge, Safari).

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Jenola344/Group-three-project.git

# 2. Navigate into the project folder
cd Group-three-project

# 3. Open the site
# Option A — double-click index.html in your file manager
# Option B — use VS Code Live Server extension (recommended for auto-reload)
# Option C — use Python's built-in server:
python -m http.server 5500
# Then open http://localhost:5500 in your browser
```

> **Note:** The site uses relative paths for all assets, so all pages must be opened from the project root. Opening individual HTML files from a different directory may break image or CSS links.

---

## Contributing

This is a group project. If you're a team member working on a feature:

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes
# 3. Stage and commit
git add .
git commit -m "feat: description of your change"

# 4. Push to your fork and open a Pull Request
git push origin feature/your-feature-name
```

**Coding conventions:**
- One HTML file per page — do not combine pages
- All shared styles go in `style.css`; page-specific overrides can use a scoped class
- All shared JavaScript goes in `script.js`
- Image file names should be lowercase with hyphens (no spaces)
- Test on at least two screen widths (desktop 1280px and mobile 375px) before opening a PR

---

## Team

| Name | GitHub | Role |
|---|---|---|
| Joel Olusegun | [@oluseguntaiwojoel-lab](https://github.com/oluseguntaiwojoel-lab) | Original creator |
| Jenola344 | [@Jenola344](https://github.com/Jenola344) | Multi-page expansion & fork maintainer |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with 🌿 by Group Three
