import React from 'react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="sh rev">
          <div className="sh-ey"><div className="sh-line"></div><span className="sh-tag">Get to Know Me</span></div>
          <h2 className="sh-title">About <em>Me</em></h2>
          <p className="sh-body">A bit of background on who I am, what I'm studying, and what drives the way I build.</p>
        </div>
        <div className="about-grid rev">
          <div className="about-text-col">
            <div className="about-card">
              <div className="about-row"><span className="about-k">Name</span><span className="about-v">Abdul Rehman</span></div>
              <div className="about-row"><span className="about-k">Role</span><span className="about-v">Frontend Developer</span></div>
              <div className="about-row"><span className="about-k">Education</span><span className="about-v">BSCS · 3rd Year</span></div>
              <div className="about-row"><span className="about-k">University</span><span className="about-v">University of Central Punjab</span></div>
              <div className="about-row"><span className="about-k">Location</span><span className="about-v">Lahore, Pakistan</span></div>
              <div className="about-row"><span className="about-k">Focus</span><span className="about-v">React.js · AI Automation · n8n</span></div>
            </div>
            <div className="about-body">
              <p>I'm a Computer Science student at the University of Central Punjab, currently in my 3rd year, with a strong focus on frontend development and AI-powered automation.</p>
              <p>I build with React and Next.js, design interfaces in Figma first, and increasingly explore how tools like n8n and generative AI can turn repetitive manual work into smart, automated workflows. I also serve as a National Ambassador at CodeAlpha, promoting tech learning among students.</p>
              <p>This portfolio itself is part of that learning journey, built and refined as a student project to showcase real, hands-on work rather than theory alone.</p>
              <div className="about-tags">
                <span className="about-tag">React</span>
                <span className="about-tag">Next.js</span>
                <span className="about-tag">JavaScript</span>
                <span className="about-tag">Figma</span>
                <span className="about-tag">n8n</span>
                <span className="about-tag">C++</span>
                <span className="about-tag">Networking</span>
              </div>
            </div>
          </div>
          <div className="about-photo-wrap">
            <div className="about-photo">
              <img src={profileImg} alt="Abdul Rehman"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
