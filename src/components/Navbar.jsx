import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github-activity' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map(l => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-brand">AC</a>
        <div className="navbar-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={active === href ? 'active' : ''}>
              {label}
            </a>
          ))}
        </div>
        <button className="navbar-theme" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
