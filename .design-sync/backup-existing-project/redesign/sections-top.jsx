/* global React, Btn, Mono, Reveal, ThemeToggle, Arrow, Download */
const { useState: useStateA, useEffect: useEffectA } = React;

// ============================ NAV ============================
function Nav({ theme, onToggle }) {
  const links = ['About', 'Experience', 'Skills', 'Work', 'Contact'];
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const jump = (id) => window.scrollToId(id.toLowerCase());
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      background: scrolled ? 'color-mix(in srgb, var(--bg) 80%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s var(--ease)',
    }}>
      <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a onClick={() => jump('top')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1 }}>Hila Itzhak</span>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--available)', marginTop: 2 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div className="nav-links" style={{ display: 'flex', gap: 26 }}>
            {links.map((l, i) => (
              <a key={l} onClick={() => jump(l)} className="navlink" style={{ cursor: 'pointer', display: 'inline-flex', gap: 6, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--signal)' }}>0{i + 1}</span>
                <span style={{ fontSize: 14, color: 'var(--text-mid)' }}>{l}</span>
              </a>
            ))}
          </div>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </nav>
      </div>
      <style>{`
        .navlink span:last-child { transition: color 0.2s var(--ease); }
        .navlink:hover span:last-child { color: var(--text); }
        @media (max-width: 760px){ .nav-links{ display:none !important; } }
      `}</style>
    </header>
  );
}

// ============================ HERO ============================
function Hero() {
  const jump = (id) => window.scrollToId(id);
  return (
    <section id="top" style={{ padding: '88px 0 96px' }}>
      <div className="wrap">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Reveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 26 }}>
                <Mono style={{ color: 'var(--signal)' }}>Full Stack Developer · Fintech</Mono>
                <span style={{ flex: 1, height: 1, background: 'var(--line)', maxWidth: 90 }} />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="serif" style={{ fontSize: 'clamp(52px, 9vw, 104px)', letterSpacing: '-0.01em', lineHeight: 1.16, marginBottom: 38 }}>
                I build reliable<br />systems, <span className="italic signal-text">end&nbsp;to&nbsp;end.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p style={{ fontSize: 19, color: 'var(--text-mid)', maxWidth: 520, lineHeight: 1.65, marginBottom: 34 }}>
                I'm Hila — a full stack developer building enterprise, production-grade web
                applications end to end. Currently shipping a fintech fraud-detection platform
                with TypeScript, Node.js, React &amp; Spring Boot.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Btn variant="primary" onClick={() => jump('work')} icon={<Arrow />}>View selected work</Btn>
                <Btn variant="secondary" as="a" href="Hila_Itzhak_CV.pdf" target="_blank" icon={<Download />}>Download CV</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line)',
                background: 'var(--bg-elev)', boxShadow: 'var(--shadow)',
              }}>
                <div style={{ aspectRatio: '1/1', background: 'radial-gradient(120% 120% at 60% 30%, var(--signal-soft), transparent 60%), var(--bg-elev-2)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <img src="../assets/welcome.png" alt="Hila Itzhak" style={{ width: '88%', display: 'block', filter: 'saturate(0.92)' }} />
                </div>
                <div style={{ borderTop: '1px solid var(--line)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>BASED IN ISRAEL</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--available)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--available)' }} /> OPEN TO WORK
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width:860px){ .hero-grid{ grid-template-columns:1fr !important; gap:40px !important; } .hero-grid > div:last-child{ max-width:340px; } }`}</style>
    </section>
  );
}

// ============================ ABOUT ============================
function About() {
  const facts = [
    ['Current role', 'Full Stack Dev · Paygilant'],
    ['Core stack', 'TypeScript · Node · React'],
    ['Education', 'B.Sc. CS · HIT'],
    ['Languages', 'Hebrew · English'],
  ];
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SecHead num="01" title="About" />
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64 }}>
          <div>
            <Reveal>
              <p className="serif" style={{ fontSize: 'clamp(24px,3.2vw,32px)', lineHeight: 1.3, marginBottom: 22 }}>
                A full stack developer who builds enterprise, production-grade applications
                end to end — from secure backend services to modern frontend interfaces.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: 'var(--text-mid)', fontSize: 17, lineHeight: 1.75, marginBottom: 16 }}>
                I'm currently building a fintech fraud-detection platform at Paygilant, where I
                develop backend services and REST APIs, design databases, and ship responsive
                user-facing features. I also serve as Scrum Master and use Claude Code as part
                of my day-to-day development workflow.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ color: 'var(--text-mid)', fontSize: 17, lineHeight: 1.75 }}>
                I care about clean, maintainable code, secure systems and strong cross-functional
                collaboration — and I'm always learning new technologies to grow as an engineer.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
              {facts.map(([k, v], i) => (
                <div key={k} style={{ padding: '18px 20px', borderTop: i ? '1px solid var(--line)' : 'none', background: 'var(--bg-elev)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 16, color: 'var(--text)' }}>{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width:820px){ .about-grid{ grid-template-columns:1fr !important; gap:36px !important; } }`}</style>
    </section>
  );
}

Object.assign(window, { Nav, Hero, About });
