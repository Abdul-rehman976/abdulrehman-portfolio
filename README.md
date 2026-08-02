# Abdul Rehman — Portfolio (React)

A single scrolling page, same as the original site — one URL, smooth-scroll nav links, everything loads at once. The difference from a plain HTML file: each section is its own React component under `src/sections/`, so the code is organized and easy to maintain, but the person visiting the site still sees one continuous page.

## Structure
```
portfolio-react/
├── index.html
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                 # Assembles all sections + header/footer/cursor + scroll-spy nav
│   ├── App.css                  # Site-wide styles, unchanged
│   ├── sections/
│   │   ├── Home.jsx             # Hero + stats bar   (#home)
│   │   ├── About.jsx            # About section       (#about)
│   │   ├── Skills.jsx           # Skills & Services    (#services)
│   │   ├── Projects.jsx         # Project grid + CTA band (#portfolio)
│   │   └── Contact.jsx          # Lamp bar + contact form (#contact)
│   ├── data/
│   │   └── projects.js          # Shared project data used by Projects section
│   └── assets/
│       ├── profile.jpg
│       └── projects/            # Project screenshots
├── package.json
└── vite.config.js
```

Clicking a nav link smooth-scrolls to that section on the same page (like the original site), and the active nav link highlights automatically based on scroll position.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL.

For a production build:

```bash
npm run build
npm run preview
```
