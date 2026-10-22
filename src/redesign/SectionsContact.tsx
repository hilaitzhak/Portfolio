import React from 'react';
import { Btn, Reveal, Icon, scrollToId } from './ui';

const email = 'hila87219@gmail.com';

// ============================ CONTACT ============================
export function Contact() {
  return (
    <section id="contact" className="section" style={{ textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: 640 }}>
        <Reveal delay={80}>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', lineHeight: 1.1, marginBottom: 22 }}>Get in touch</h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ color: 'var(--muted-fg)', fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            I'm always open to interesting conversations, new opportunities, or collaboration on
            interesting engineering work. Drop me a line and I'll get back to you.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <Btn variant="primary" as="a" href={`mailto:${email}`} icon={Icon.arrow(16)}>Say hello</Btn>
        </Reveal>
      </div>
    </section>
  );
}

// ============================ FOOTER ============================
export function Footer() {
  const socials: [keyof typeof Icon, string][] = [
    ['github', 'https://github.com/hilaitzhak'],
    ['linkedin', 'https://www.linkedin.com/in/hila-itzhak-b85118233/'],
    ['mail', `mailto:${email}`],
  ];
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="wrap" style={{ padding: '26px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontSize: 14, color: 'var(--muted-fg)' }}>© {new Date().getFullYear()} Hila Itzhak. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          {socials.map(([ic, href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="foot-link"
              style={{ color: 'var(--muted-fg)', display: 'inline-flex', transition: 'color 0.2s var(--ease)' }}>
              {Icon[ic](18)}
            </a>
          ))}
          <button onClick={() => scrollToId('top')} aria-label="Back to top" className="foot-link"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--muted-fg)', display: 'inline-flex', padding: 0, transition: 'color 0.2s var(--ease)' }}>
            {Icon.arrowUp(18)}
          </button>
        </div>
      </div>
      <style>{`.foot-link:hover{ color:var(--primary) !important; }`}</style>
    </footer>
  );
}
