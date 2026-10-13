/* global React, Btn, Mono, Tag, SecHead, Reveal, Arrow */
const { useState: useStateB } = React;

// ============================ EXPERIENCE / TIMELINE ============================
function Experience() {
  const items = [
    { year: 'Mar 2025', role: 'Full Stack Developer', org: 'Paygilant · Present',
      desc: 'Building an enterprise fraud-management platform for banking, fintech & payments. I develop backend services, REST APIs and database design end to end, work with OpenSearch and RabbitMQ for large-scale search and async processing, and build reusable, user-facing frontend features. I also serve as Scrum Master and use Claude Code daily to accelerate delivery.',
      tags: ['TypeScript', 'Node.js', 'OpenSearch', 'RabbitMQ', 'Scrum Master'], live: true },
    { year: '2024', role: 'Full Stack Developer', org: 'Girit Interactive',
      desc: 'E-commerce development agency for enterprise retail brands. Built interactive, React-based storefront features on Shopify, responsive desktop & mobile storefronts with Shopify Liquid, and integrated third-party services and APIs using PHP and Laravel.',
      tags: ['React', 'Shopify Liquid', 'PHP', 'Laravel'] },
    { year: '2021—2024', role: 'B.Sc., Computer Science', org: 'Holon Institute of Technology',
      desc: 'Computer Science degree with strong foundations in algorithms, data structures and software-development methods.',
      tags: ['Algorithms', 'Data Structures', 'Software Engineering'] },
  ];
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SecHead num="02" title="Experience" />
        <div style={{ position: 'relative', paddingLeft: 28 }}>
          <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 1, background: 'var(--line)' }} />
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="tl-row" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '92px 1fr', gap: 28, paddingBottom: i === items.length - 1 ? 0 : 44 }}>
                <span style={{
                  position: 'absolute', left: -28, top: 6, width: 13, height: 13, borderRadius: '50%',
                  background: it.live ? 'var(--available)' : 'var(--bg)', border: `2px solid ${it.live ? 'var(--available)' : 'var(--line-strong)'}`,
                  boxShadow: it.live ? '0 0 0 4px color-mix(in srgb, var(--available) 22%, transparent)' : 'none',
                }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--signal)', paddingTop: 2 }}>{it.year}</div>
                <div>
                  <h3 className="serif" style={{ fontSize: 25, marginBottom: 3 }}>{it.role}</h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>{it.org}</div>
                  <p style={{ color: 'var(--text-mid)', fontSize: 16, lineHeight: 1.7, marginBottom: 14, maxWidth: 620 }}>{it.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{it.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:620px){ .tl-row{ grid-template-columns:64px 1fr !important; gap:16px !important; } }`}</style>
    </section>
  );
}

// ============================ SKILLS ============================
function Skills() {
  const groups = [
    ['Languages & Frameworks', ['TypeScript', 'JavaScript', 'Java', 'Python', 'React', 'Node.js', 'Spring Boot']],
    ['APIs & Databases', ['REST', 'GraphQL', 'PostgreSQL', 'OpenSearch', 'MongoDB', 'Redis']],
    ['Cloud & Infra', ['AWS', 'Docker', 'RabbitMQ']],
    ['Tools', ['Git', 'Postman']],
  ];
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SecHead num="03" title="Capabilities" />
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
          {groups.map(([title, items], i) => (
            <Reveal key={title} delay={i * 60} style={{ background: 'var(--bg-elev)' }}>
              <div style={{ padding: '28px 28px 30px' }}>
                <div style={{ marginBottom: 16 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--signal)', display: 'block', marginBottom: 8 }}>0{i + 1}</span>
                  <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.12 }}>{title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>{items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (max-width:680px){ .skills-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}

// ============================ WORK / PROJECTS ============================
function Work() {
  const projects = [
    { n: '01', title: 'URL Shortener', img: '../assets/url_shortener1.png',
      desc: 'A full-stack service that turns long links into short, shareable URLs with redirect handling, a REST API and a clean, responsive UI.',
      tags: ['React', 'Node.js', 'TypeScript'],
      github: 'https://github.com/hilaitzhak/URL_Shortener', live: 'https://url-shortener.hilaitzhak.com' },
    { n: '02', title: 'Portfolio', img: '../assets/portfolio1.png',
      desc: 'This responsive portfolio, built from scratch with React and TypeScript, with scroll-reveal motion and an EmailJS contact pipeline, deployed on AWS S3.',
      tags: ['React', 'TypeScript', 'SCSS', 'AWS S3'],
      github: 'https://github.com/hilaitzhak/Portfolio', live: 'https://portfolio.hilaitzhak.com/' },
  ];
  return (
    <section id="work" className="section">
      <div className="wrap">
        <SecHead num="04" title="Selected work" />
        <div>
          {projects.map((p, i) => <WorkRow key={p.n} p={p} flip={i % 2 === 1} last={i === projects.length - 1} />)}
        </div>
      </div>
    </section>
  );
}

function WorkRow({ p, flip, last }) {
  const [h, setH] = useStateB(false);
  return (
    <Reveal>
      <div
        onClick={() => window.open(p.live, '_blank', 'noopener')}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        className="work-row"
        style={{
          display: 'grid', gridTemplateColumns: flip ? '1fr 0.85fr' : '0.85fr 1fr', gap: 44, alignItems: 'center',
          padding: '40px 0', borderBottom: last ? 'none' : '1px solid var(--line)', cursor: 'pointer',
        }}>
        <div style={{ order: flip ? 2 : 1, borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--line)', background: 'var(--bg-elev-2)', aspectRatio: '16/11', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={p.img} alt={p.title} style={{ width: '46%', transition: 'transform 0.5s var(--ease)', transform: h ? 'scale(1.06) translateY(-2px)' : 'none', filter: 'drop-shadow(0 18px 30px rgba(0,0,0,0.25))' }} />
        </div>
        <div style={{ order: flip ? 1 : 2 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--signal)', marginBottom: 12 }}>{p.n} — PROJECT</div>
          <h3 className="serif" style={{ fontSize: 'clamp(30px,3.6vw,42px)', marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            {p.title}
            <span style={{ display: 'inline-flex', color: 'var(--signal)', transition: 'transform 0.3s var(--ease)', transform: h ? 'translate(3px,-3px)' : 'none' }}><Arrow size={20} /></span>
          </h3>
          <p style={{ color: 'var(--text-mid)', fontSize: 16.5, lineHeight: 1.7, marginBottom: 18, maxWidth: 480 }}>{p.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
          <div style={{ display: 'flex', gap: 18 }} onClick={(e) => e.stopPropagation()}>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="work-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-mid)', borderBottom: '1px solid var(--line-strong)', paddingBottom: 2 }}>GitHub ↗</a>
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="work-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-mid)', borderBottom: '1px solid var(--line-strong)', paddingBottom: 2 }}>Live demo ↗</a>
          </div>
        </div>
      </div>
      <style>{`.work-link:hover{ color:var(--text) !important; border-color:var(--signal) !important; } @media (max-width:760px){ .work-row{ grid-template-columns:1fr !important; gap:24px !important; } .work-row > div{ order:unset !important; } }`}</style>
    </Reveal>
  );
}

Object.assign(window, { Experience, Skills, Work });
