import React from 'react';
import { Tag, Icon, scrollToId } from './ui';

export const CASE_STUDY_HASH = '#reports-case-study';

const built = [
  'A scheduler sends one RabbitMQ message per customer every minute. A dedicated pool of report workers decides which reports are due, in each customer\'s own time zone.',
  'Report definitions live in code, so they are reviewed and tested. Schedules and on/off settings live in a table that admins edit from the portal.',
  'Queries run only on read replicas and stream straight into a ZIP file, so memory stays flat for any report size.',
  'Each report fails on its own, retries with a backoff and has a timeout per frequency. Database locks prevent duplicate reports.',
  'Every success and failure posts to Slack, and failures include the exact SQL to reproduce them.',
  'A shadow mode ran the new system next to the old one on real production data, so each customer could be compared before switching.',
];

const results = [
  'The slowest reports are about 60% faster: weekly 95s to 37s, monthly ~400s to 172s.',
  'Running across all 12 production environments.',
  'Failures are visible right away, instead of being found by customers.',
  'Report changes need no database migration, and a new environment needs only config and a flag.',
];

export function CaseStudy() {
  return (
    <main>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <a href="#highlights" onClick={(e) => { e.preventDefault(); scrollToId('highlights'); }} className="cs-back"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted-fg)', fontSize: 14, textDecoration: 'none', marginBottom: 32 }}>
            <span style={{ display: 'inline-flex', transform: 'rotate(180deg)' }}>{Icon.arrow(14)}</span> Back
          </a>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 44px)', lineHeight: 1.15, marginBottom: 18 }}>
            Moving customer reports from database cron jobs to an event-driven service
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
            {['Python', 'RabbitMQ', 'PostgreSQL', 'TimescaleDB', 'AWS S3', 'Docker'].map((t) => <Tag key={t}>{t}</Tag>)}
          </div>

          <Block title="The problem">
            <p style={para}>
              Scheduled reports ran as cron jobs inside each customer's production database. Heavy
              queries ran on the primary database that serves live traffic, every environment kept its
              own copy of the report logic, nobody was alerted when a report failed, and every change
              needed an engineer and a database migration.
            </p>
          </Block>

          <Block title="What I built">
            <p style={{ ...para, marginBottom: 18 }}>On top of our existing async worker platform, I designed and built the reporting service:</p>
            <List items={built} />
          </Block>

          <Block title="How it fits together">
            <Diagram />
          </Block>

          <Block title="Results">
            <List items={results} />
          </Block>

          <Block title="Hardest problem">
            <p style={para}>
              Two workers could pick up the same due report and both generate it. I fixed it with a
              non-blocking Postgres advisory lock and a second check under the lock, while keeping the
              every-minute check lock-free.
            </p>
          </Block>
        </div>
      </section>
      <style>{`.cs-back:hover{ color:var(--primary) !important; }`}</style>
    </main>
  );
}

const para: React.CSSProperties = { color: 'var(--muted-fg)', fontSize: 16, lineHeight: 1.75 };

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 44 }}>
      <h2 style={{ fontSize: 22, marginBottom: 14 }}>{title}</h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((p) => (
        <li key={p} style={{ display: 'flex', gap: 12, color: 'var(--muted-fg)', fontSize: 15, lineHeight: 1.65 }}>
          <span style={{ color: 'var(--primary)', flex: 'none', marginTop: 3 }}>{Icon.arrow(14)}</span>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/** Scheduler -> RabbitMQ -> workers, fanning out to four outputs. Stacks vertically on small screens. */
function Diagram() {
  const box = (label: string, sub: string, accent = false) => (
    <div className="card" style={{ padding: '12px 14px', textAlign: 'center', borderColor: accent ? 'var(--primary)' : undefined }}>
      <div style={{ fontWeight: 600, fontSize: 14 }}>{label}</div>
      <div style={{ color: 'var(--muted-fg)', fontSize: 12, marginTop: 2 }}>{sub}</div>
    </div>
  );
  const arrow = <span className="cs-arrow" style={{ color: 'var(--primary)', display: 'inline-flex', justifyContent: 'center' }}>{Icon.arrow(18)}</span>;
  return (
    <div className="cs-diagram" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1.2fr', alignItems: 'center', gap: 10 }}>
      {box('Scheduler', 'every minute')}
      {arrow}
      {box('RabbitMQ', 'one message per customer')}
      {arrow}
      {box('Report workers', 'dedicated pool', true)}
      {arrow}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {box('Read replicas', 'streamed queries')}
        {box('S3', 'ZIP files')}
        {box('Customer portal', 'listing + email alerts')}
        {box('Slack', 'success / failure')}
      </div>
      <style>{`
        @media (max-width: 720px){
          .cs-diagram{ grid-template-columns: 1fr !important; }
          .cs-arrow{ transform: rotate(90deg); }
        }
      `}</style>
    </div>
  );
}
