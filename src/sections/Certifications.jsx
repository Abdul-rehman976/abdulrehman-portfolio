import React, { useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../data/certifications';

export default function Certifications() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setActive(null);
    }
    if (active) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [active]);

  return (
    <section id="certifications" className="portfolio">
      <div className="wrap">
        <div className="sh rev">
          <div className="sh-ey"><div className="sh-line"></div><span className="sh-tag">Certifications</span></div>
          <h2 className="sh-title">Verified <em>Credentials</em></h2>
          <p className="sh-body">Certifications earned along the way, each one backed by a verifiable credential.</p>
        </div>

        <div className="cert-grid rev">
          {CERTIFICATIONS.map((c) => (
            <div className="cert-card" key={c.title} onClick={() => setActive(c)}>
              <div className="cert-shot-wrap">
                <img className="cert-shot" src={c.img} alt={`${c.title} certificate from ${c.issuer}`} loading="lazy" />
                <div className="cert-shot-overlay">
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="cert-body">
                <div className="cert-title">{c.title}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-foot-row">
                  <span className="cert-date">{c.date}</span>
                  {c.verifyUrl && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Verify →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <div className="cert-lightbox" onClick={() => setActive(null)}>
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <img src={active.img} alt={`${active.title} certificate from ${active.issuer}`} />
            <div className="cert-lightbox-meta">
              <div className="cert-lightbox-title">{active.title}</div>
              <div className="cert-lightbox-issuer">{active.issuer} · {active.date}</div>
              {active.verifyUrl && (
                <a href={active.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                  Verify Credential →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
