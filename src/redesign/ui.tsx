import React, { useState, useEffect, useRef } from 'react';

/** Smooth-scroll to a section by id ('top' goes to the very top). */
export function scrollToId(id: string) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  // On the case-study view the sections aren't rendered: go back to the main page first.
  if (!el && window.location.hash) { window.location.hash = ''; setTimeout(() => scrollToId(id), 50); return; }
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
}

type BtnVariant = 'primary' | 'outline' | 'soft';

interface BtnProps {
  children?: React.ReactNode;
  variant?: BtnVariant;
  as?: React.ElementType;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** Pill CTA. primary = amber fill, outline = bordered, soft = tinted amber. */
export function Btn({ children, variant = 'primary', as: Tag = 'button', icon, style = {}, ...rest }: BtnProps) {
  const [h, setH] = useState(false);
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
    padding: '11px 22px', borderRadius: 9999, cursor: 'pointer', lineHeight: 1.2,
    whiteSpace: 'nowrap', textDecoration: 'none', border: '1px solid transparent',
    transition: 'all 0.25s var(--ease)',
  };
  const variants: Record<BtnVariant, React.CSSProperties> = {
    primary: {
      background: 'var(--primary)', color: 'var(--primary-fg)', borderColor: 'var(--primary)',
      boxShadow: h ? 'var(--shadow-glow)' : 'none', transform: h ? 'translateY(-2px)' : 'none',
    },
    outline: {
      background: 'transparent', color: 'var(--fg)',
      borderColor: h ? 'var(--primary)' : 'var(--border)', transform: h ? 'translateY(-2px)' : 'none',
    },
    soft: {
      background: h ? 'color-mix(in oklch, var(--primary) 18%, transparent)' : 'color-mix(in oklch, var(--primary) 10%, transparent)',
      color: 'var(--primary)', borderColor: 'color-mix(in oklch, var(--primary) 30%, transparent)',
      padding: '7px 16px',
    },
  };
  return (
    <Tag style={{ ...base, ...variants[variant], ...style }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} {...rest}>
      {children}{icon}
    </Tag>
  );
}

/** Mono tag chip for tech-stack / category labels. */
export function Tag({ children }: { children?: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

interface RevealProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: React.ElementType;
}

/** Fade + rise into view on scroll, with a safety snap to the final state. */
export function Reveal({ children, className = '', style = {}, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<any>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const check = () => {
      if (done || !ref.current) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.9 && r.bottom > 0) {
        done = true;
        setTimeout(() => {
          if (!el) return;
          el.classList.add('in');
          setTimeout(() => { if (el) { el.style.transition = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; } }, 680);
        }, delay);
        window.removeEventListener('scroll', check);
      }
    };
    const raf = setTimeout(check, 30);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { clearTimeout(raf); window.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

/** Section header. */
export function SecHead({ title }: { title: string }) {
  return (
    <Reveal className="sec-head">
      <h2 className="sec-title">{title}</h2>
    </Reveal>
  );
}

/* ---- inline icon set (stroke = currentColor) ---- */
const svg = (d: React.ReactNode, size = 18) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
export const Icon = {
  arrow: (s = 16) => svg(<path d="M5 12h14M13 6l6 6-6 6" />, s),
  arrowUp: (s = 14) => svg(<path d="M12 19V5M5 12l7-7 7 7" />, s),
  external: (s = 16) => svg(<><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></>, s),
  github: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
  ),
  linkedin: (s = 18) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C20.3 8.58 22 10.4 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9z" /></svg>
  ),
  mail: (s = 16) => svg(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>, s),
  phone: (s = 16) => svg(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />, s),
  pin: (s = 16) => svg(<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>, s),
  cap: (s = 16) => svg(<><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.7 2 6 2s6-1 6-2v-5" /></>, s),
  globe: (s = 16) => svg(<><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z" /></>, s),
  folder: (s = 22) => svg(<path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4z" />, s),
};

/** Inline right-arrow (kept for compatibility). */
export function Arrow({ size = 16 }: { size?: number }) { return Icon.arrow(size); }
