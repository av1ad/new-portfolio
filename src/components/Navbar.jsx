import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Now', href: '#now' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
      <div className="navbar-inner">
        <a href="#top" className="navbar-brand">Aviad</a>
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
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
