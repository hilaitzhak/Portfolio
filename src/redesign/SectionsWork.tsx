import React, { useState } from 'react';
import { Tag, SecHead, Reveal, Icon } from './ui';

// ============================ EXPERIENCE ============================
interface Job {
  role: string; org: string; blurb: string; date: string; points: string[]; tags: string[];
}

export function Experience() {
  const jobs: Job[] = [
    {
      role: 'Full Stack Developer', org: 'Paygilant',
      blurb: 'Enterprise fraud-management platform for banking, fintech & payments',
      date: 'March 2025 – Present',
      points: [
        'Develop and maintain backend services, REST APIs, and database design for the fraud-detection platform — from requirements through deployment.',
        'Work with OpenSearch to store and quickly search large volumes of data, and RabbitMQ to queue and process asynchronous tasks across services.',
        'Build responsive, user-facing features and reusable UI components, integrating them with backend APIs for a smooth user experience.',
        'Collaborate with cross-functional teams through code reviews, technical discussions, and ongoing improvements to system architecture.',
        'Serve as Scrum Master — running pre-planning, sprint planning, and retrospectives to keep the team aligned.',
        'Use Claude Code daily to accelerate feature delivery, code reviews, and refactoring.',
      ],
      tags: ['TypeScript', 'Node.js', 'React', 'OpenSearch', 'PostgreSQL', 'RabbitMQ', 'AWS'],
    },
    {
      role: 'Full Stack Developer', org: 'Girit Interactive',
      blurb: 'E-commerce development agency for enterprise retail brands',
      date: 'May 2024 – Nov 2024',
      points: [
        'Developed interactive React-based storefront features integrated into the Shopify platform.',
        'Built responsive desktop and mobile storefronts using Shopify Liquid, JavaScript, and CSS focused on performance.',
        'Integrated third-party services and APIs using PHP and Laravel to extend store functionality.',
      ],
      tags: ['React', 'Shopify Liquid', 'JavaScript', 'PHP', 'Laravel'],
    },
  ];
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SecHead num="02." title="Where I've worked" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {jobs.map((j, i) => (
            <Reveal key={j.org} delay={i * 80}>
              <div className="card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600 }}>
                    {j.role} <span style={{ color: 'var(--muted-fg)', fontWeight: 400 }}>@</span> <span style={{ color: 'var(--primary)' }}>{j.org}</span>
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--muted-fg)' }}>{j.date}</span>
                </div>
                <div style={{ color: 'var(--muted-fg)', fontSize: 14, marginBottom: 18 }}>{j.blurb}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {j.points.map((p) => (
                    <li key={p} style={{ display: 'flex', gap: 12, color: 'var(--muted-fg)', fontSize: 15, lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--primary)', flex: 'none', marginTop: 2 }}>{Icon.arrow(14)}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{j.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================ SKILLS ============================
export function Skills() {
  const groups: [keyof typeof Icon, string, string[]][] = [
    ['folder', 'Languages & Frameworks', ['TypeScript', 'JavaScript', 'Java', 'Python', 'React', 'Node.js', 'Spring Boot']],
    ['folder', 'Databases', ['PostgreSQL', 'OpenSearch', 'MongoDB', 'Redis']],
    ['folder', 'Cloud & APIs', ['AWS', 'REST', 'GraphQL']],
    ['folder', 'Tools & Infra', ['Git', 'Postman', 'Docker', 'RabbitMQ']],
    ['folder', 'AI Tools', ['Claude Code', 'GitHub Copilot', 'ChatGPT']],
  ];
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SecHead num="03." title="Skills & tools" />
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {groups.map(([ic, title, items], i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="card" style={{ padding: 26, height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <span style={{ color: 'var(--primary)', display: 'inline-flex' }}>{Icon[ic](20)}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 600 }}>{title}</h3>
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

// ============================ PROJECTS ============================
interface Project { title: string; desc: string; tags: string[]; github?: string; live?: string; }

export function Work() {
  const projects: Project[] = [
    {
      title: 'URL Shortener',
      desc: 'A full-stack URL shortener that turns long links into short, manageable ones with redirect handling and analytics.',
      tags: ['Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/hilaitzhak/URL_Shortener', live: 'https://url-shortener.hilaitzhak.com',
    },
    {
      title: 'Portfolio Website',
      desc: 'My personal portfolio — built and deployed end to end, hosted on AWS S3 with a custom domain.',
      tags: ['React', 'TypeScript', 'AWS S3'],
      github: 'https://github.com/hilaitzhak/Portfolio', live: 'https://portfolio.hilaitzhak.com/',
    },
    {
      title: 'EasyTastyFun',
      desc: 'A recipes web app exploring full-stack patterns and clean component-driven UI.',
      tags: ['React', 'Node.js'],
      github: 'https://github.com/hilaitzhak',
    },
  ];
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SecHead num="04." title="Selected projects" />
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 70} />)}
        </div>
      </div>
      <style>{`@media (max-width:860px){ .projects-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}

function ProjectCard({ p, delay }: { p: Project; delay: number }) {
  const [h, setH] = useState(false);
  return (
    <Reveal delay={delay} style={{ height: '100%' }}>
      <div className="card" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ padding: 26, height: '100%', display: 'flex', flexDirection: 'column', transform: h ? 'translateY(-4px)' : 'none' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <span style={{ color: 'var(--primary)', display: 'inline-flex' }}>{Icon.folder(26)}</span>
          <div style={{ display: 'flex', gap: 14 }}>
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="GitHub" style={linkStyle}>{Icon.github(18)}</a>}
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link" aria-label="Live demo" style={linkStyle}>{Icon.external(18)}</a>}
          </div>
        </div>
        <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{p.title}</h3>
        <p style={{ color: 'var(--muted-fg)', fontSize: 15, lineHeight: 1.65, marginBottom: 20, flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
      </div>
      <style>{`.proj-link:hover{ color:var(--primary) !important; }`}</style>
    </Reveal>
  );
}

const linkStyle: React.CSSProperties = { color: 'var(--muted-fg)', display: 'inline-flex', transition: 'color 0.2s var(--ease)' };
