import React from 'react';
import reactNextImg from '../assets/skills/react-nextjs.jpg';
import htmlCssJsImg from '../assets/skills/html-css-js.jpg';
import aiAutomationImg from '../assets/skills/ai-automation.jpg';
import figmaUiImg from '../assets/skills/figma-ui.jpg';
import networkingImg from '../assets/skills/networking.jpg';
import cppImg from '../assets/skills/cpp-problem-solving.jpg';

const SKILLS = [
  {
    img: reactNextImg,
    title: 'React & Next.js Dev',
    desc: 'Building responsive, component-driven web apps with React and Next.js, clean code, reusable components, modern tooling.',
    tags: ['React', 'Next.js', 'JavaScript'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    img: htmlCssJsImg,
    title: 'HTML5, CSS3 & JS',
    desc: 'Solid fundamentals in semantic HTML5, modern CSS3 and JavaScript, the foundation behind every interface I build.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    img: aiAutomationImg,
    title: 'AI Automation (n8n)',
    desc: 'Designing intelligent, automated workflows with n8n and generative AI tools, connecting apps to remove repetitive manual work.',
    tags: ['n8n', 'Generative AI', 'Workflows'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    img: figmaUiImg,
    title: 'UI Design in Figma',
    desc: 'Wireframing and designing interfaces in Figma before writing a line of code, so the build matches the vision from day one.',
    tags: ['Figma', 'Wireframes', 'UI Design'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    img: networkingImg,
    title: 'Networking Fundamentals',
    desc: 'Practical understanding of networking concepts that support building and deploying connected, real-world applications.',
    tags: ['Networking', 'Fundamentals'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    img: cppImg,
    title: 'C++ & Problem Solving',
    desc: 'Strong grounding in object-oriented programming and C++, built through coursework, certifications, and a short stint as a C++ developer.',
    tags: ['C++', 'OOP', 'Logic'],
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="sh rev">
          <div className="sh-ey"><div className="sh-line"></div><span className="sh-tag">What I Do</span></div>
          <h2 className="sh-title">Skills &amp; Services</h2>
          <p className="sh-body">From clean React interfaces to AI-powered automation, I build and learn in public, one project at a time.</p>
        </div>
        <div className="svc-grid rev">
          {SKILLS.map((s) => (
            <div className="svc-card" key={s.title}>
              <div className="svc-shot-wrap">
                <img className="svc-shot" src={s.img} alt={s.title} />
              </div>
              <div className="svc-body">
                <div className="svc-ico">{s.icon}</div>
                <div className="svc-title">{s.title}</div>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-tags">
                  {s.tags.map((t) => (
                    <span className="svc-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
