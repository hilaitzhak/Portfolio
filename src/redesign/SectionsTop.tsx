import React, { useState, useEffect } from 'react';
import { Btn, Reveal, SecHead, Icon, scrollToId } from './ui';

const SOCIALS: [keyof typeof Icon, string][] = [
  ['github', 'https://github.com/hilaitzhak'],
  ['linkedin', 'https://www.linkedin.com/in/hila-itzhak-b85118233/'],
  ['mail', 'mailto:hila87219@gmail.com'],
];

// ============================ NAV ============================
export function Nav() {
  const links = ['About', 'Highlights', 'Experience', 'Skills', 'Projects', 'Contact'];
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const ids = links.map((l) => l.toLowerCase());
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      background: scrolled ? 'color-mix(in oklch, var(--bg) 80%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s var(--ease)',
    }}>
      <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span onClick={() => scrollToId('top')} style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>
          Hila<span style={{ color: 'var(--primary)' }}>.</span>
        </span>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <div className="nav-links" style={{ display: 'flex', gap: 28 }}>
            {links.map((l) => {
              const on = active === l.toLowerCase();
              return (
                <span key={l} onClick={() => scrollToId(l.toLowerCase())} className="navlink"
                  style={{ cursor: 'pointer', fontSize: 14, fontWeight: 500, color: on ? 'var(--primary)' : 'var(--muted-fg)', transition: 'color 0.2s var(--ease)' }}>
                  {l}
                </span>
              );
            })}
          </div>
          <Btn variant="soft" as="a" href="#contact" onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToId('contact'); }}>Get in touch</Btn>
        </nav>
      </div>
      <style>{`
        .navlink:hover { color: var(--primary) !important; }
        @media (max-width: 760px){ .nav-links{ display:none !important; } }
      `}</style>
    </header>
  );
}

// ============================ HERO ============================
export function Hero() {
  return (
    <section id="top" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
      <div className="wrap" style={{ width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Reveal delay={80}>
              <h1 style={{ fontSize: 'clamp(44px, 7vw, 72px)', lineHeight: 1.05, marginBottom: 14 }}>Hila Itzhak.</h1>
            </Reveal>
            <Reveal delay={110}>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', lineHeight: 1.2, color: 'var(--muted-fg)', marginBottom: 24 }}>Software Engineer</h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontSize: 18, color: 'var(--muted-fg)', maxWidth: 540, lineHeight: 1.7, marginBottom: 34 }}>
                I build a fraud-detection platform for banks and fintechs, from Java and
                Python services and event-driven pipelines to React and TypeScript interfaces.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 34 }}>
                <Btn variant="primary" onClick={() => scrollToId('projects')} icon={Icon.arrow(16)}>View my work</Btn>
                <Btn variant="outline" onClick={() => scrollToId('contact')}>Contact me</Btn>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div style={{ display: 'flex', gap: 18 }}>
                {SOCIALS.map(([ic, href]) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="social"
                    style={{ color: 'var(--muted-fg)', display: 'inline-flex', transition: 'color 0.2s var(--ease), transform 0.2s var(--ease)' }}>
                    {Icon[ic](20)}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={240}><CodeCard /></Reveal>
        </div>
      </div>
      <style>{`
        .social:hover { color: var(--primary) !important; transform: translateY(-2px); }
        @media (max-width: 860px){ .hero-grid{ grid-template-columns:1fr !important; gap:40px !important; } }
      `}</style>
    </section>
  );
}

/** Terminal-style code card in the hero. */
function CodeCard() {
  const amber = 'var(--primary)', blue = 'var(--accent)', green = 'var(--green)', fg = 'var(--fg)';
  return (
    <div style={{
      background: 'color-mix(in oklch, var(--surface) 80%, transparent)',
      border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', boxShadow: 'var(--shadow-card)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        <span style={{ marginLeft: 8, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted-fg)' }}>developer.js</span>
      </div>
      <pre style={{ margin: 0, padding: 22, fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.8, overflowX: 'auto' }}>
        <code>
          <span style={{ color: amber }}>const</span> <span style={{ color: fg }}>hila</span> <span style={{ color: 'var(--muted-fg)' }}>= {'{'}</span>{'\n'}
          {'  '}<span style={{ color: blue }}>role</span><span style={{ color: 'var(--muted-fg)' }}>: </span><span style={{ color: green }}>"Software Engineer"</span><span style={{ color: 'var(--muted-fg)' }}>,</span>{'\n'}
          {'  '}<span style={{ color: blue }}>stack</span><span style={{ color: 'var(--muted-fg)' }}>: [</span><span style={{ color: green }}>"Java"</span><span style={{ color: 'var(--muted-fg)' }}>, </span><span style={{ color: green }}>"Python"</span><span style={{ color: 'var(--muted-fg)' }}>, </span><span style={{ color: green }}>"TS"</span><span style={{ color: 'var(--muted-fg)' }}>, </span><span style={{ color: green }}>"React"</span><span style={{ color: 'var(--muted-fg)' }}>],</span>{'\n'}
          {'  '}<span style={{ color: blue }}>focus</span><span style={{ color: 'var(--muted-fg)' }}>: </span><span style={{ color: green }}>"Secure, event-driven systems"</span>{'\n'}
          <span style={{ color: 'var(--muted-fg)' }}>{'}'};</span>
        </code>
      </pre>
    </div>
  );
}

// ============================ ABOUT ============================
export function About() {
  const facts: [keyof typeof Icon, string][] = [
    ['pin', 'Israel'],
    ['mail', 'hila87219@gmail.com'],
    ['phone', '050-4083499'],
    ['cap', 'B.Sc. Computer Science'],
    ['globe', 'Hebrew (Native) · English (Professional)'],
  ];
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SecHead title="About me" />
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <Reveal>
              <p style={{ color: 'var(--muted-fg)', fontSize: 17, lineHeight: 1.8, marginBottom: 20 }}>
                Software engineer at Paygilant, where I own features end to end on a
                fraud-detection platform used by banks and fintechs: Java and Python services,
                RabbitMQ pipelines, databases, and the React interfaces analysts work in every day.
                I care about secure, maintainable code and systems that hold up in production.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: 'var(--muted-fg)', fontSize: 17, lineHeight: 1.8 }}>
                I also lead the team's Scrum process and build AI-assisted tooling with Claude
                Code and Gemini. I hold a B.Sc. in Computer Science from the Holon
                Institute of Technology.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="card" style={{ padding: 8 }}>
              {facts.map(([ic, v], i) => (
                <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 14px', borderTop: i ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ color: 'var(--primary)', display: 'inline-flex' }}>{Icon[ic](18)}</span>
                  <span style={{ fontSize: 15, color: 'var(--fg)' }}>{v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width:820px){ .about-grid{ grid-template-columns:1fr !important; gap:32px !important; } }`}</style>
    </section>
  );
}
