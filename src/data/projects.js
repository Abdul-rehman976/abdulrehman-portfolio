import projectsData from './projects.json';

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

// Maps the plain filename stored in projects.json to the Vite-processed
// (hashed, optimized) asset import. projects.json stays framework-agnostic
// so scripts/generate-static-pages.mjs can read it directly with plain
// Node, without needing to resolve JSX/image imports.
const IMAGE_MAP = {
  'youtube-clone.jpg': youtubeCloneImg,
  'youtube-data-scraper.jpg': youtubeScraperImg,
  'personal-portfolio.jpg': personalPortfolioImg,
  'shopify-portfolio.jpg': shopifyPortfolioImg,
  'whatsapp-agent.jpg': whatsappAgentImg,
  'gmail-clone.jpg': gmailCloneImg,
  'bulk-mail-sender.jpg': bulkMailSenderImg,
  'airport-luggage-system.jpg': airportLuggageImg,
  'chatgpt-automation.jpg': chatgptAutomationImg,
  'business-dashboard.jpg': businessDashboardImg,
};

export const GITHUB_PROFILE_URL = 'https://github.com/Abdul-Rehman-gif';

export const PROJECTS = projectsData.map((p) => ({
  ...p,
  img: IMAGE_MAP[p.imgFile],
  imgAlt: `Screenshot of the ${p.title} project`,
}));
