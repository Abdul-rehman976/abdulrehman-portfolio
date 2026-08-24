import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, GITHUB_PROFILE_URL } from '../data/projects';

export default function Projects() {
  return (
    <>
      <section id="portfolio" className="portfolio" style={{paddingBottom:'100px'}}>
        <div className="wrap">
          <div className="sh rev">
            <div className="sh-ey"><div className="sh-line"></div><span className="sh-tag">Projects</span></div>
            <h2 className="sh-title">Selected <em>Work</em></h2>
            <p className="sh-body">Hands-on projects from frontend builds to AI automation workflows, each one a step in learning by doing.</p>
          </div>
          <div className="proj-grid rev">
            {PROJECTS.map((p) => (
              <div className="proj-card" key={p.title}>
                <Link to={`/projects/${p.slug}`} className="proj-link-area" aria-label={`View ${p.title} details`}>
                  <div className="proj-shot-wrap">
                    <img className="proj-shot" src={p.img} alt={p.imgAlt} loading="lazy" />
                  </div>
                  <div className="proj-body">
                    <span className={'proj-tag' + (p.tag === 'New' ? ' new' : '')}>{p.tag}</span>
                    <div className="proj-title">{p.title}</div>
                    <p className="proj-desc proj-desc-sm">{p.summary}</p>
                    <div className="proj-tags-row">
                      {p.stack.map((s) => (
                        <span className="proj-pill" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="proj-foot">
                  <Link to={`/projects/${p.slug}`} className="proj-details-link">View Details →</Link>
                  <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="proj-icon-btn" title="View on GitHub" aria-label="GitHub profile">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band rev">
        <div className="cta-glow"></div>
        <div className="wrap">
          <div className="cta-inner">
            <h2>Let's <span className="tint">Build</span><br />Something?</h2>
            <p>Open to frontend development projects, AI automation work, and collaborations. Let's create something useful together.</p>
            <div className="cta-btns">
              <a href="#contact" className="btn-p">Get In Touch →</a>
              <a href="#contact" className="btn-o">Start a Project</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
