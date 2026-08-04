import youtubeCloneImg from '../assets/projects/youtube-clone.jpg';
import youtubeScraperImg from '../assets/projects/youtube-data-scraper.jpg';
import personalPortfolioImg from '../assets/projects/personal-portfolio.jpg';
import shopifyPortfolioImg from '../assets/projects/shopify-portfolio.jpg';
import whatsappAgentImg from '../assets/projects/whatsapp-agent.jpg';
import gmailCloneImg from '../assets/projects/gmail-clone.jpg';
import bulkMailSenderImg from '../assets/projects/bulk-mail-sender.jpg';
import airportLuggageImg from '../assets/projects/airport-luggage-system.jpg';
import chatgptAutomationImg from '../assets/projects/chatgpt-automation.jpg';
import businessDashboardImg from '../assets/projects/business-dashboard.jpg';

export const GITHUB_PROFILE_URL = 'https://github.com/Abdul-Rehman-gif';

export const PROJECTS = [
  {
    tag: 'Frontend',
    title: 'YouTube Clone',
    slug: 'youtube-clone',
    summary: 'A pixel-accurate frontend clone of a video streaming platform, fully responsive across devices.',
    desc: "A frontend clone replicating the core UI/UX of a video streaming platform. The build focuses on pixel-accurate spacing, a dynamic homepage grid, video cards with hover states, a collapsible sidebar and a sticky navigation bar, all wired together with vanilla JavaScript so the layout reflows cleanly across desktop, tablet and mobile breakpoints.",
    highlights: [
      { label: 'Responsive grid', text: 'Video card grid reflows from a 4-column desktop layout down to a single column on mobile without breaking alignment.' },
      { label: 'Interactive sidebar', text: 'Collapsible navigation sidebar toggles state with pure JavaScript, no framework overhead.' },
      { label: 'Hover micro-interactions', text: 'Thumbnail previews, channel avatars and action icons all respond to hover for a native feel.' },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    img: youtubeCloneImg,
  },
  {
    tag: 'Automation',
    title: 'YouTube Data Scraper',
    slug: 'youtube-data-scraper',
    summary: 'An n8n workflow that auto-fetches video metadata into Google Sheets for trend tracking.',
    desc: 'An automated n8n workflow that fetches video titles, descriptions, view counts, publish dates and channel metadata through the YouTube Data API. The pipeline runs on a schedule, cleans and normalizes the incoming data, then pushes it straight into Google Sheets so trend tracking and content research stay up to date without any manual pulling of numbers.',
    highlights: [
      { label: 'Scheduled runs', text: 'n8n cron trigger polls target channels at a fixed interval and only appends new videos.' },
      { label: 'API integration', text: 'Talks directly to the YouTube Data API for titles, views, likes and metadata in one pass.' },
      { label: 'Auto-organized output', text: 'Results are formatted and written into Google Sheets, ready for filtering and charting.' },
    ],
    stack: ['n8n', 'YouTube API', 'Google Sheets'],
    img: youtubeScraperImg,
  },
  {
    tag: 'Frontend',
    title: 'Personal Portfolio',
    slug: 'personal-portfolio',
    summary: 'This site — built in React and Vite with a dark, teal-accented theme and smooth animations.',
    desc: 'This very site, designed and developed from scratch to showcase my skills, projects and growth as a developer. Built in React with Vite for fast builds and instant hot-reload during development, the layout uses a dark, teal-accented theme with smooth scroll-triggered animations, a custom cursor and full responsiveness across every device size.',
    highlights: [
      { label: 'Component architecture', text: 'Each section (hero, about, skills, projects, contact) is its own React component for easy maintenance.' },
      { label: 'Custom design system', text: 'Shared CSS variables drive consistent colors, spacing and typography across the whole site.' },
      { label: 'Performance-first', text: 'Vite-powered build keeps bundle size small and page loads fast.' },
    ],
    stack: ['React', 'Vite', 'CSS3'],
    img: personalPortfolioImg,
  },
  {
    tag: 'Client Work',
    title: 'Shopify Business Portfolio',
    slug: 'shopify-business-portfolio',
    summary: 'A custom Shopify store built for a real client, tailored to their brand and product catalog.',
    desc: "A client e-commerce store built on Shopify from the ground up. The project involved customizing a base theme with Liquid, organizing product collections around the client's catalog, and building clean, responsive pages tailored to their brand identity, covering everything from the homepage and product pages to checkout flow and mobile navigation.",
    highlights: [
      { label: 'Theme customization', text: 'Liquid templates and sections were tailored to match the client\'s brand colors, fonts and layout needs.' },
      { label: 'Product organization', text: 'Collections, tags and filters structured so customers can find products quickly.' },
      { label: 'Client collaboration', text: 'Delivered through iterative feedback rounds to match real-world business requirements.' },
    ],
    stack: ['Shopify', 'Liquid', 'E-commerce'],
    img: shopifyPortfolioImg,
  },
  {
    tag: 'Automation',
    title: 'WhatsApp Agent',
    slug: 'whatsapp-agent',
    summary: 'An n8n-powered WhatsApp bot that handles instant replies and inquiries in real time.',
    desc: 'A WhatsApp automation agent built with n8n that handles instant replies, inquiry routing and dynamic actions triggered by incoming messages. The workflow connects to the WhatsApp Business API and OpenAI, parses user intent, pulls relevant data from connected databases, and responds in real time, cutting down manual reply time for common customer questions.',
    highlights: [
      { label: 'Intent detection', text: 'Incoming messages are parsed with OpenAI to route the conversation to the right automated action.' },
      { label: 'Database-backed replies', text: 'Agent queries connected databases to return accurate, up-to-date answers.' },
      { label: 'Real-time messaging', text: 'Built directly on the WhatsApp API for instant, two-way conversation handling.' },
    ],
    stack: ['n8n', 'OpenAI API', 'WhatsApp API'],
    img: whatsappAgentImg,
  },
  {
    tag: 'New',
    title: 'Gmail Clone',
    slug: 'gmail-clone',
    summary: 'A detailed frontend clone of Gmail\'s inbox, compose modal and reading pane interactions.',
    desc: "A frontend clone recreating Gmail's inbox interface down to the small interaction details: the email list with read/unread states, a reading pane, a compose modal that can be minimized and expanded, star and label toggles, and a fully responsive layout. The focus throughout was matching the look, feel and interaction patterns of the original as closely as possible.",
    highlights: [
      { label: 'Compose modal', text: 'A draggable, minimizable compose window mimics Gmail\'s real behavior.' },
      { label: 'Inbox states', text: 'Read, unread, starred and labeled emails are visually distinguished at a glance.' },
      { label: 'Responsive panes', text: 'Email list and reading pane adapt gracefully from desktop to mobile.' },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    img: gmailCloneImg,
  },
  {
    tag: 'New',
    title: 'Bulk Mail Sender',
    slug: 'bulk-mail-sender',
    summary: 'A Python tool for running SMTP email campaigns with previews and live delivery analytics.',
    desc: 'A Python-based bulk email automation tool built for Hostinger SMTP, designed to run professional email campaigns without needing a paid marketing platform. It handles recipient list management, HTML email previews before sending, throttled delivery to avoid spam flags, and real-time campaign analytics so you can track opens and delivery success as the campaign runs.',
    highlights: [
      { label: 'SMTP integration', text: 'Connects directly to Hostinger SMTP for reliable, self-hosted email delivery.' },
      { label: 'HTML previews', text: 'Preview the exact rendered email before it goes out to the full list.' },
      { label: 'Delivery tracking', text: 'Live analytics report successful sends, failures and delivery progress.' },
    ],
    stack: ['Python', 'SMTP', 'Automation'],
    img: bulkMailSenderImg,
  },
  {
    tag: 'New',
    title: 'Airport Luggage Management System',
    slug: 'airport-luggage-management-system',
    summary: 'A Red-Black Tree powered simulation of real-time airport baggage tracking.',
    desc: 'A software engineering project modeling real-time airport luggage tracking using a Red-Black Tree as the core data structure for fast, balanced lookups. The system includes baggage visualization so tracked items can be seen moving through checkpoints, passenger information linked to each bag, and live system diagnostics to monitor tree balance and lookup performance.',
    highlights: [
      { label: 'Red-Black Tree core', text: 'Self-balancing tree keeps baggage lookups and insertions at guaranteed O(log n) time.' },
      { label: 'Live visualization', text: 'Baggage movement through checkpoints is rendered visually as the simulation runs.' },
      { label: 'System diagnostics', text: 'Real-time stats on tree height, balance operations and lookup speed.' },
    ],
    stack: ['C++', 'Red-Black Tree', 'Data Structures'],
    img: airportLuggageImg,
  },
  {
    tag: 'New',
    title: 'Premium ChatGPT Automation',
    slug: 'premium-chatgpt-automation',
    summary: 'A Playwright-based tool that turns natural language prompts into browser automation.',
    desc: 'A browser automation tool built with Python and Playwright that acts as a chat-driven hub, turning natural language prompts into automated web workflows. Instead of writing scripts for every task, users describe what they want in plain language, and the tool translates that into browser actions, from data extraction and form filling to multi-step task execution across sites.',
    highlights: [
      { label: 'Playwright automation', text: 'Headless and headed browser control drives real websites through Playwright.' },
      { label: 'Natural language input', text: 'Prompts are parsed with the OpenAI API and mapped to concrete browser actions.' },
      { label: 'Multi-step workflows', text: 'Chains actions like navigation, extraction and form submission into a single automated run.' },
    ],
    stack: ['Python', 'Playwright', 'OpenAI API'],
    img: chatgptAutomationImg,
  },
  {
    tag: 'New',
    title: 'Software Management System',
    slug: 'software-management-system',
    summary: 'A unified dashboard for tracking projects, developers, payroll and client analytics.',
    desc: 'A full-featured business management dashboard built to give teams a single interface for tracking active projects, developer workloads, milestones, payroll and client portfolios. The dashboard pulls all of this into one place with financial analytics views, project timelines and role-based access, replacing scattered spreadsheets with a live, queryable system.',
    highlights: [
      { label: 'Unified dashboard', text: 'Projects, developers, milestones and payroll all live in one connected view.' },
      { label: 'Financial analytics', text: 'Built-in charts surface revenue, cost and profitability trends per project.' },
      { label: 'REST API backend', text: 'Node.js REST API powers data flow between the dashboard and the database.' },
    ],
    stack: ['React', 'Node.js', 'REST API'],
    img: businessDashboardImg,
  },
];
