/* global React */
// Reusable primitives for the redesign. Exported to window for sibling scripts.

const { useState, useEffect, useRef } = React;

// ---- Button: pill, accent-fill primary / outline secondary, ghost ----
function Btn({ children, variant = 'primary', as = 'button', icon, style = {}, ...rest }) {
  const Tag = as;
  const [h, setH] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 9,
    fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 500,
    letterSpacing: '0.02em', padding: '13px 22px', borderRadius: 'var(--r-sm)',
    cursor: 'pointer', transition: 'all 0.3s var(--ease)', lineHeight: 1,
    border: '1px solid var(--line-strong)', whiteSpace: 'nowrap', textDecoration: 'none',
  };
  const variants = {
    primary: { background: h ? 'transparent' : 'var(--signal)', color: h ? 'var(--signal)' : 'var(--signal-ink)', borderColor: 'var(--signal)', transform: h ? 'translateY(-2px)' : 'none' },
    secondary: { background: 'transparent', color: 'var(--text)', borderColor: h ? 'var(--text)' : 'var(--line-strong)', transform: h ? 'translateY(-2px)' : 'none' },
    ghost: { background: 'transparent', color: h ? 'var(--text)' : 'var(--text-dim)', border: '1px solid transparent', padding: '8px 0' },
  };
  return (
    <Tag style={{ ...base, ...variants[variant], ...style }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} {...rest}>
      {children}{icon}
    </Tag>
  );
}

function Mono({ children, style = {} }) {
  return <span className="mono" style={style}>{children}</span>;
}

function Tag({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-mid)',
      border: '1px solid var(--line)', borderRadius: 'var(--r-sm)', padding: '5px 11px',
      background: 'var(--bg-elev)', whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

function SecHead({ num, title }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
      <span className="sec-rule" />
    </Reveal>
  );
}

function Reveal({ children, className = '', style = {}, delay = 0, as = 'div' }) {
  const ref = useRef(null);
  const Tag = as;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const host = window;
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
          setTimeout(() => { if (el) { el.style.transition = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; } }, 780);
        }, delay);
        host.removeEventListener('scroll', check);
      }
    };
    const raf = setTimeout(check, 30);
    host.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    return () => { clearTimeout(raf); host.removeEventListener('scroll', check); window.removeEventListener('resize', check); };
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${className}`} style={style}>{children}</Tag>;
}

function ThemeToggle({ theme, onToggle }) {
  const [h, setH] = useState(false);
  const dark = theme === 'dark';
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      aria-label="Toggle theme"
      style={{
        width: 38, height: 38, borderRadius: '50%', cursor: 'pointer',
        background: h ? 'var(--bg-elev-2)' : 'transparent',
        border: '1px solid var(--line)', color: 'var(--text-mid)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.3s var(--ease)', flex: 'none',
      }}
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      )}
    </button>
  );
}

function scrollToId(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
}

function Arrow({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>;
}
function Download({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 11l5 4 5-4M5 21h14"/></svg>;
}

Object.assign(window, { Btn, Mono, Tag, SecHead, Reveal, ThemeToggle, Arrow, Download, scrollToId });
