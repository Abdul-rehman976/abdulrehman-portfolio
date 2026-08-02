import React, { useEffect } from 'react';
import './App.css';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  useEffect(() => {
    /* CURSOR */
    const cur = document.getElementById('cur');
    const curRing = document.getElementById('cur-ring');
    function handleMouseMove(e) {
      if (cur) { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; }
      if (curRing) { curRing.style.left = e.clientX + 'px'; curRing.style.top = e.clientY + 'px'; }
    }
    if (cur) document.addEventListener('mousemove', handleMouseMove);

    /* MOBILE NAV */
    const ham = document.getElementById('ham');
    const nav = document.getElementById('nav');
    function handleHamClick() { nav && nav.classList.toggle('open'); }
    if (ham) ham.addEventListener('click', handleHamClick);

    const navLinkEls = document.querySelectorAll('a[href^="#"]');
    function handleAnchorClick(e) {
      const a = e.currentTarget;
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
      if (nav) nav.classList.remove('open');
      document.querySelectorAll('nav a:not(.nav-btn)').forEach((l) => l.classList.remove('active'));
      if (!a.classList.contains('nav-btn')) a.classList.add('active');
    }
    navLinkEls.forEach((a) => a.addEventListener('click', handleAnchorClick));

    /* ACTIVE NAV — highlight link based on scroll position */
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const navLinks = {};
    sections.forEach((id) => {
      const el = document.querySelector('nav a[href="#' + id + '"]');
      if (el) navLinks[id] = el;
    });
    function setActive() {
      const scrollY = window.scrollY + 100;
      let current = 'home';
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollY) current = id;
      });
      Object.keys(navLinks).forEach((id) => {
        if (navLinks[id]) navLinks[id].classList.toggle('active', id === current);
      });
    }
    window.addEventListener('scroll', setActive, { passive: true });
    setActive();

    /* SCROLL REVEAL - show all immediately */
    document.querySelectorAll('.rev').forEach((el) => el.classList.add('in'));

    return () => {
      if (cur) document.removeEventListener('mousemove', handleMouseMove);
      if (ham) ham.removeEventListener('click', handleHamClick);
      navLinkEls.forEach((a) => a.removeEventListener('click', handleAnchorClick));
      window.removeEventListener('scroll', setActive);
    };
  }, []);

  return (
    <>
      <div id="cur"></div>
      <div id="cur-ring"></div>

      <header>
        <a href="#home" className="logo">ABDUL<em>.DEV</em></a>
        <nav id="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Skills</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="nav-btn">Let's Talk →</a>
        </nav>
        <button className="ham" id="ham" aria-label="Menu"><span></span><span></span><span></span></button>
      </header>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer>
        <div className="wrap">
          <div className="foot-row">
            <a href="#home" className="logo">ABDUL<em>.DEV</em></a>
            <nav className="foot-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Skills</a>
              <a href="#portfolio">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <p className="foot-copy">© 2026 Abdul Rehman — All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
