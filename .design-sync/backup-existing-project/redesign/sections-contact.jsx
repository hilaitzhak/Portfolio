/* global React, Btn, Mono, Reveal, Arrow, Download */

// ============================ CONTACT ============================
function Contact() {
  const email = 'hila87219@gmail.com';
  const socials = [
    ['LinkedIn', 'https://www.linkedin.com/in/hila-itzhak-b85118233/'],
    ['GitHub', 'https://github.com/hilaitzhak'],
    ['Email', `mailto:${email}`],
  ];
  return (
    <section id="contact" className="section" style={{ paddingBottom: 70 }}>
      <div className="wrap">
        <SecHead num="05" title="Get in touch" />
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end' }}>
          <div>
            <Reveal>
              <h2 className="serif" style={{ fontSize: 'clamp(40px,6.5vw,76px)', lineHeight: 1.16, marginBottom: 40 }}>
                Let's build something <span className="italic signal-text">reliable.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p style={{ color: 'var(--text-mid)', fontSize: 18, lineHeight: 1.7, maxWidth: 460, marginBottom: 30 }}>
                Have a role or project in mind? I'd love to hear from you — I'm currently open to
                full-stack and backend opportunities.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Btn variant="primary" as="a" href={`mailto:${email}`} icon={<Arrow />}>Say hello</Btn>
                <Btn variant="secondary" as="a" href="Hila_Itzhak_CV.pdf" target="_blank" icon={<Download />}>Download CV</Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
                <Mono>Direct</Mono>
                <a href={`mailto:${email}`} className="c-mail" style={{ display: 'block', marginTop: 6, fontSize: 17, color: 'var(--text)' }}>{email}</a>
                <a href="tel:+972504083499" className="c-mail" style={{ display: 'block', marginTop: 4, fontSize: 15, color: 'var(--text-mid)' }}>050-4083499</a>
              </div>
              {socials.map(([label, href], i) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="c-row"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderTop: i ? '1px solid var(--line)' : 'none', background: 'var(--bg-elev)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-mid)' }}>{label}</span>
                  <span style={{ color: 'var(--text-dim)' }}><Arrow size={15} /></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .c-mail:hover{ color:var(--signal) !important; }
        .c-row{ transition: background 0.2s var(--ease); }
        .c-row:hover{ background: var(--bg-elev-2) !important; }
        .c-row:hover span{ color: var(--text) !important; }
        @media (max-width:760px){ .contact-grid{ grid-template-columns:1fr !important; gap:36px !important; } }
      `}</style>
    </section>
  );
}

// ============================ FOOTER ============================
function Footer() {
  const back = () => window.scrollToId('top');
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }}>
      <div className="wrap" style={{ padding: '26px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)' }}>© {new Date().getFullYear()} Hila Itzhak — Built with React</span>
        <button onClick={back} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-dim)', background: 'transparent', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          Back to top <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </button>
      </div>
    </footer>
  );
}

Object.assign(window, { Contact, Footer });
