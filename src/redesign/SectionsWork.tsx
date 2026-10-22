import React, { useState } from 'react';
import { Tag, SecHead, Reveal, Icon } from './ui';
import { CASE_STUDY_HASH } from './CaseStudy';

// ============================ EXPERIENCE ============================
interface Job {
  role: string; org: string; blurb: string; date: string; points: string[]; tags: string[];
}

export function Experience() {
  const jobs: Job[] = [
    {
      role: 'Full Stack Developer & Scrum Master', org: 'Paygilant',
      blurb: 'Fraud-detection platform for banks and fintechs',
      date: 'March 2025 - Present',
      points: [
        'Designed and owned a new customer reporting system (Python, RabbitMQ) across 12 production environments, making reports up to 60% faster.',
        'Built fraud-rule email alerts that run outside the real-time fraud checks (RabbitMQ), and a detector that flags customer channels that stop sending traffic.',
        'Owned login security (JWT, 2FA, role-based access) and real-time device identification used to spot fraudulent users.',
        "Co-built the analysts' portal from scratch (React/TypeScript UI and backend APIs), replacing a legacy portal whose filters used to crash the database.",
        "Built features end to end (database, APIs, UI), like a \"What's New\" center, and dashboard charts on per-minute summary tables, each loading independently.",
        "Co-built the team's shared AI-agent skills (Claude Code, Gemini): 44 skills for code review, testing and repo conventions.",
        "Lead the team's Scrum process (pre-planning, sprint planning, retrospectives), and built an AI sprint dashboard from Jira and GitHub that tracks progress and flags security alerts.",
      ],
      tags: ['Java', 'Spring Boot', 'Python', 'RabbitMQ', 'PostgreSQL', 'OpenSearch', 'Redis', 'React', 'TypeScript', 'AWS'],
    },
    {
      role: 'Full Stack Developer', org: 'Girit Interactive',
      blurb: 'E-commerce development agency for enterprise retail brands',
      date: 'May 2024 - Nov 2024',
      points: [
        'Built responsive desktop and mobile storefronts for enterprise retail brands (React, Shopify Liquid, JavaScript, CSS), with a focus on performance.',
        'Integrated third-party services and APIs using PHP and Laravel to extend store functionality.',
      ],
      tags: ['React', 'Shopify Liquid', 'JavaScript', 'PHP', 'Laravel'],
    },
  ];
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SecHead title="Where I've worked" />
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

// ============================ HIGHLIGHTS ============================
export function Highlights() {
  const items: [string, string, string, string?][] = [
    ['60% faster', 'Customer reporting system', 'Designed and owned a new reporting pipeline (Python, RabbitMQ) running across 12 production environments.', CASE_STUDY_HASH],
    ['From scratch', "Analysts' portal", 'Co-built the React/TypeScript UI and backend APIs that replaced a legacy portal whose filters crashed the database.'],
    ['44 skills', 'Shared AI-agent skills', "Co-built the team's Claude Code and Gemini skills for code review, testing and repo conventions."],
    ['Jira + GitHub', 'AI sprint dashboard', 'Built a dashboard that tracks sprint progress and flags security alerts for the team.'],
  ];
  return (
    <section id="highlights" className="section">
      <div className="wrap">
        <SecHead title="Highlights" />
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {items.map(([stat, title, desc, link], i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="card" style={{ padding: 26, height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--primary)', marginBottom: 8 }}>{stat}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'var(--muted-fg)', fontSize: 15, lineHeight: 1.65 }}>{desc}</p>
                {link && (
                  <a href={link} className="proj-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, fontSize: 14, fontWeight: 500, color: 'var(--primary)', textDecoration: 'none' }}>
                    Read the case study {Icon.arrow(14)}
                  </a>
                )}
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
    ['folder', 'Frontend', ['React', 'TypeScript', 'JavaScript', 'React Query', 'Tailwind']],
    ['folder', 'Backend', ['Java', 'Spring Boot', 'Python', 'Node.js', 'REST APIs', 'RabbitMQ', 'Docker']],
    ['folder', 'Data & Cloud', ['PostgreSQL', 'OpenSearch', 'Redis', 'AWS S3', 'AWS RDS', 'AWS SES']],
    ['folder', 'AI-assisted development', ['Claude Code', 'GPT', 'Gemini']],
  ];
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SecHead title="Skills & tools" />
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
      title: 'Easy Tasty Fun',
      desc: 'A recipe app with built-in AI (Claude API): scan a recipe from a photo, ask what you can cook with what you have, get substitutions and chat about any recipe. Google sign-in, Redis caching, S3 image uploads, Hebrew and English.',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'AWS S3', 'Claude API'],
      github: 'https://github.com/hilaitzhak/EasyTastyFun', live: 'https://recipes.hilaitzhak.com',
    },
    {
      title: 'URL Shortener',
      desc: 'A full-stack URL shortener that turns long links into short, manageable ones with redirect handling and analytics.',
      tags: ['TypeScript', 'Node.js', 'React', 'MongoDB'],
      github: 'https://github.com/hilaitzhak/URL_Shortener', live: 'https://url-shortener.hilaitzhak.com',
    },
    {
      title: 'Portfolio Website',
      desc: 'My personal portfolio, built and deployed end to end on AWS S3 and CloudFront, with a custom domain and a one-command deploy.',
      tags: ['React', 'TypeScript', 'AWS S3', 'CloudFront'],
      github: 'https://github.com/hilaitzhak/Portfolio', live: 'https://portfolio.hilaitzhak.com/',
    },
  ];
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SecHead title="Selected projects" />
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
