import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    /* COUNTER */
    let counted = false;
    const statsRow = document.querySelector('.stats-row');
    let observer;
    if (statsRow) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !counted) {
              counted = true;
              document.querySelectorAll('.st-n').forEach((v) => {
                const tgt = parseInt(v.dataset.count, 10);
                const sfx = v.dataset.sfx;
                let cur2 = 0;
                const inc = tgt / 70;
                const t = setInterval(() => {
                  cur2 += inc;
                  if (cur2 >= tgt) { cur2 = tgt; clearInterval(t); }
                  v.textContent = Math.floor(cur2) + sfx;
                }, 16);
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(statsRow);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <section id="home" className="hero">
        <div className="hero-lamp-stage" aria-hidden="true">
          <div className="hero-lamp-cone"></div>
          <div className="hero-lc hero-lc-left"></div>
          <div className="hero-lc hero-lc-right"></div>
          <div className="hero-lamp-orb"></div>
          <div className="hero-lamp-line"></div>
          <div className="hero-lamp-ceil"></div>
          <div className="hero-lamp-floor"></div>
        </div>
        <div className="hglow1"></div>
        <div className="hglow2"></div>
        <div className="hglow3"></div>
        <div className="wrap hero-inner">
          <div>
            <div className="h-label"><div className="h-dot"></div><span className="h-label-txt">Frontend Developer · AI Automation</span></div>
            <h1>Building<br />Clean Apps<br />&amp; Smart <span className="dim">Workflows.</span></h1>
            <p className="hero-body">CS student and frontend developer working with React, Next.js and Figma, and exploring AI automation with n8n to turn ideas into intelligent, productive systems.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn-p">Let's Connect →</a>
              <a href="#portfolio" className="btn-o">View Work</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="fc fc1"><div className="fc-v">React</div><div className="fc-l">Frontend</div></div>
            <div className="fc fc2"><div className="fc-v">n8n</div><div className="fc-l">Automation</div></div>
            <div className="mcard">
              <div className="mc-hd">
                <span className="mc-title">Currently Learning</span>
                <span className="mc-status"><span className="mc-dot"></span>Active</span>
              </div>
              <div className="mc-body">
                <div><div className="bm-val">BSCS</div><div className="bm-lbl">3rd Year · Computer Science</div></div>
                <div className="btrack"><div className="bfill" style={{'--w':'75%'}}></div></div>
                <div className="blbls"><span>Started</span><span>In Progress</span></div>
                <div className="mini-stats">
                  <div className="ms"><div className="ms-v">5+</div><div className="ms-l">Certs</div></div>
                  <div className="ms"><div className="ms-v">React</div><div className="ms-l">Stack</div></div>
                  <div className="ms"><div className="ms-v">n8n</div><div className="ms-l">Tooling</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="statsbar rev">
        <div className="wrap">
          <div className="stats-row">
            <div className="st"><span className="st-n" data-count="5" data-sfx="+">0+</span><span className="st-l">Certifications</span></div>
            <div className="st"><span className="st-n" data-count="3" data-sfx="rd">0rd</span><span className="st-l">Year CS</span></div>
            <div className="st"><span className="st-n" data-count="100" data-sfx="%">0%</span><span className="st-l">Self-Driven Learning</span></div>
            <div className="st"><span className="st-n" data-count="1" data-sfx="">0</span><span className="st-l">National Ambassador Role</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
