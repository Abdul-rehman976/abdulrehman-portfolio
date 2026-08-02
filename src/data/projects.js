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

export const PROJECTS = [
  {
    tag: 'Frontend',
    title: 'YouTube Clone',
    desc: "A frontend clone replicating the core UI/UX of a video streaming platform — dynamic homepage, video cards, navigation bar, and a fully responsive layout built with HTML, CSS and JavaScript.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    img: youtubeCloneImg,
  },
  {
    tag: 'Automation',
    title: 'YouTube Data Scraper',
    desc: 'An automated n8n workflow that fetches video titles, descriptions, views and other metadata through APIs — streamlining data extraction, processing and storage for trend tracking and content research.',
    stack: ['n8n', 'YouTube API', 'Google Sheets'],
    img: youtubeScraperImg,
  },
  {
    tag: 'Frontend',
    title: 'Personal Portfolio',
    desc: 'This very site — designed and developed to showcase my skills, projects and growth as a developer, with a clean modern layout, smooth navigation and full responsiveness across devices.',
    stack: ['React', 'Vite', 'CSS3'],
    img: personalPortfolioImg,
  },
  {
    tag: 'Client Work',
    title: 'Shopify Business Portfolio',
    desc: "A client e-commerce store built on Shopify — customized themes, organized product collections, and clean, responsive pages tailored to the client's brand identity and real-world business needs.",
    stack: ['Shopify', 'Liquid', 'E-commerce'],
    img: shopifyPortfolioImg,
  },
  {
    tag: 'Automation',
    title: 'WhatsApp Agent',
    desc: 'A WhatsApp automation agent built with n8n — instant replies, inquiry handling and dynamic actions triggered by user input, connected to APIs and databases for smoother, faster communication.',
    stack: ['n8n', 'OpenAI API', 'WhatsApp API'],
    img: whatsappAgentImg,
  },
  {
    tag: 'New',
    title: 'Gmail Clone',
    desc: "A frontend clone recreating Gmail's inbox interface — email list, reading pane, compose modal and responsive layout, focused on matching the look, feel and interaction patterns of the original.",
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    img: gmailCloneImg,
  },
  {
    tag: 'New',
    title: 'Bulk Mail Sender',
    desc: 'A Python-based bulk email automation tool built for Hostinger SMTP — professional email campaigns with recipient management, HTML previews, delivery tracking and real-time campaign analytics.',
    stack: ['Python', 'SMTP', 'Automation'],
    img: bulkMailSenderImg,
  },
  {
    tag: 'New',
    title: 'Airport Luggage Management System',
    desc: 'A software engineering project modeling real-time airport luggage tracking with a Red-Black Tree data structure — baggage visualization, passenger information and live system diagnostics.',
    stack: ['C++', 'Red-Black Tree', 'Data Structures'],
    img: airportLuggageImg,
  },
  {
    tag: 'New',
    title: 'Premium ChatGPT Automation',
    desc: 'A browser automation tool built with Python and Playwright — a chat-driven hub that turns natural language prompts into automated web workflows, from data extraction to task execution.',
    stack: ['Python', 'Playwright', 'OpenAI API'],
    img: chatgptAutomationImg,
  },
  {
    tag: 'New',
    title: 'Software Management System',
    desc: 'A full-featured business management dashboard — tracking active projects, developers, milestones, payroll, financial analytics and client portfolios in one interface.',
    stack: ['React', 'Node.js', 'REST API'],
    img: businessDashboardImg,
  },
];
