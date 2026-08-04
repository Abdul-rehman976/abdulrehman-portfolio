# Abdul Rehman - Portfolio (React)

A single scrolling home page (one URL, smooth-scroll nav links, everything loads at once), plus a dedicated page for each project. Each section is its own React component under `src/sections/`.

## Structure
```
portfolio-react/
├── index.html
├── .env.example              # copy to .env and fill in your EmailJS keys
├── src/
│   ├── main.jsx              # React entry point, wraps App in BrowserRouter
│   ├── App.jsx                 # Header/footer/cursor + routes between the home page and project pages
│   ├── App.css                  # Site-wide styles
│   ├── sections/
│   │   ├── Home.jsx             # Hero + stats bar   (#home)
│   │   ├── About.jsx            # About section       (#about)
│   │   ├── Skills.jsx           # Skills & Services    (#services)
│   │   ├── Projects.jsx         # Project grid + CTA band (#portfolio)
│   │   ├── Contact.jsx          # Lamp bar + contact channels + contact form (#contact)
│   │   └── ProjectDetail.jsx    # Individual project page, route: /projects/:slug
│   ├── data/
│   │   └── projects.js          # Shared project data (includes each project's `slug`)
│   └── assets/
│       ├── profile.jpg
│       └── projects/            # Project screenshots
├── package.json
└── vite.config.js
```

Clicking a nav link smooth-scrolls to that section on the home page. From a project page, the same nav links take you back home and then scroll. Clicking a project card opens its own page at `/projects/<slug>`.

## Contact form setup (EmailJS)

The contact form sends messages straight to your inbox using [EmailJS](https://www.emailjs.com) - no backend server required.

1. Create a free account at https://dashboard.emailjs.com
2. Add an **Email Service** (e.g. connect your Gmail) and copy its **Service ID**
3. Create an **Email Template**. The default template EmailJS scaffolds for you already works, it uses the variables `{{name}}`, `{{email}}`, `{{message}}`, and `{{title}}`, which match what the form sends. Click **Save**, then copy its **Template ID**
4. Go to **Account > General** and copy your **Public Key**
5. Copy `.env.example` to `.env` in the project root and fill in the three values:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart `npm run dev` after adding the `.env` file so Vite picks up the new variables.

If you deploy the built site (e.g. to Vercel), add the same three variables as Environment Variables in your hosting dashboard.

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
