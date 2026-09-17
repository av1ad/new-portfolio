import { useState, useEffect } from 'react';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'about', href: '#about' },
  { label: 'work', href: '#work' },
  { label: 'now', href: '#now' },
  { label: 'say hi', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = ['#hero', ...NAV_LINKS.map(l => l.href)]
      .map(sel => document.querySelector(sel))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setActive(entry.target.id === 'hero' ? '' : '#' + entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main">
      <div className="navbar-pill">
        <a href="#top" className="navbar-brand" aria-label="Back to top">
          <span className="brand-dot" />
          aviad
        </a>
        <div className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={active === href ? 'active' : ''}>
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="navbar-theme"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Lights on' : 'Lights off'}
        >
          <span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
