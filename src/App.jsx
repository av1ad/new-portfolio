import { useEffect, useState, useCallback } from 'react';
import './app.scss';
import userPicture from './assets/images/aviad.jpeg';
import booksearcher from './assets/images/booksearcher.png';
import enjoyingtheoutdoors from './assets/images/enjoyingtheoutdoors.png';
import chattergrape from './assets/images/chattergrape.png';
import yourfit from './assets/images/yourfit.png';
import Project from './components/Project';
import GitHubStats from './components/GitHubStats';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Piano from './components/Piano';

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredProject = {
  title: 'YourFit.ai',
  image: yourfit,
  blurb: 'A workout and calorie tracker with an AI coach that writes your training plan and changes it as you go.',
  description:
    'A workout and calorie tracker with an AI coach that writes your training plan and changes it as you go. The app is React Native, the backend runs on Deno with data in Supabase, Gemini and TensorFlow.js handle the AI side, and payments go through RevenueCat and Stripe.',
  liveLink: 'https://yourfit.ai',
  storeLink: 'https://apps.apple.com/us/app/yourfit-calorie-workout-log/id6754610096',
  codeLink: null,
  technologies: ['React Native', 'TypeScript', 'Deno', 'Supabase', 'Gemini API', 'TensorFlow.js'],
};

const projects = [
  {
    title: 'BookSearcher',
    image: booksearcher,
    blurb: 'Find your next book with AI recommendations that actually get your taste.',
    description:
      'A modern book discovery platform built with Next.js that combines traditional search with AI-powered recommendations. Discover, explore, and curate your personal book collection.',
    liveLink: 'https://book-searcher-self-six.vercel.app/',
    codeLink: 'https://github.com/av1ad/BookSearcher',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API', 'TailwindCSS'],
  },
  {
    title: 'Chattergrape',
    image: chattergrape,
    blurb: 'Real-time chat with rooms, DMs, and a grape for a mascot.',
    description:
      'Chattergrape is a real-time chat application built on the MERN stack. It features user authentication, one-on-one messaging, and group chats over Socket.IO.',
    liveLink: 'https://chattergrape.onrender.com/',
    codeLink: 'https://github.com/av1ad/Chattergrape',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
  },
  {
    title: 'Enjoying The Outdoors',
    image: enjoyingtheoutdoors,
    blurb: 'Discover national parks and mountains worth the drive.',
    description:
      'A web app that helps you discover national parks and mountains, with search and filtering on top of the National Parks API.',
    liveLink: 'https://enjoy-the-outdoors-woad.vercel.app/',
    codeLink: 'https://github.com/av1ad/enjoy-the-outdoors-remake',
    technologies: ['React', 'TypeScript', 'Bootstrap'],
  },
];

// Update this whenever you start something new
const currentlyBuilding = {
  title: 'YourFit.ai updates',
  description:
    "YourFit.ai is out in the wild, so now the fun part: reading feedback, tightening the AI coaching, and shipping updates to real users. New builds go out regularly.",
  tech: ['React Native', 'Deno', 'Supabase', 'Gemini'],
};

const STACK = [
  'TypeScript', 'React', 'Next.js', 'React Native', 'Node.js',
  'Deno', 'PostgreSQL', 'Supabase', 'Python', 'Gemini API',
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

const useTheme = () => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') || 'light'
  );
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1c1424' : '#fbf5ec');
  }, [theme]);
  const toggle = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), []);
  return [theme, toggle];
};

// ─── Bits ────────────────────────────────────────────────────────────────────

const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${loaded ? 'loaded' : ''}`}
      onLoad={() => setLoaded(true)}
      loading="lazy"
    />
  );
};

// ─── App ─────────────────────────────────────────────────────────────────────

const App = () => {
  const [theme, toggleTheme] = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const year = new Date().getFullYear();

  return (
    <div className="App" id="top">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header id="hero" className="hero">
        <div className="hero-text">
          <h1>Aviad Churaman</h1>
          <p className="hero-lede">
            I'm a full-stack developer. I built{' '}
            <a href={featuredProject.storeLink} target="_blank" rel="noopener noreferrer">YourFit.ai</a>,
            an AI fitness app that's on the App Store now, and I'm still shipping updates to it.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">See my work</a>
            <a href="mailto:aviadchuraman@gmail.com" className="btn btn-ghost">Email me</a>
          </div>
        </div>

        <div className="hero-photo">
          <LazyImage src={userPicture} alt="Aviad Churaman" className="user-photo" />
        </div>
      </header>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              I'm a full-stack developer who likes the whole journey: the idea, the ugly first
              version, and the part where real people actually use it. Lately that's meant a lot
              of React Native, Deno, and wiring AI models into things that feel useful instead
              of gimmicky.
            </p>
            <p>
              I care about products that feel warm and thought-through, which is probably why
              there's a cat following your cursor right now.
            </p>
            <p className="stack">
              <b>What I usually reach for:</b> {STACK.join(', ')}.
            </p>
          </div>

          <aside className="off-clock">
            <h3 className="off-clock-title">Off the clock</h3>
            <div className="hobby">
              <b>Piano</b>
              <p>Mostly playing by ear. Go on, press a key.</p>
              <Piano />
            </div>
            <div className="hobby">
              <b>Books</b>
              <p>A growing to-read pile and a shrinking excuse not to read it.</p>
            </div>
            <div className="hobby">
              <b>Random creative projects</b>
              <p>Half-finished, fully enjoyed.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────── */}
      <section id="work" className="section">
        <h2 className="section-title">Work</h2>

        <article
          className="featured"
          onClick={() => setSelectedProject(featuredProject)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(featuredProject); } }}
          tabIndex={0}
          role="button"
          aria-label="Open details for YourFit.ai"
        >
          <div className="featured-media">
            <LazyImage src={featuredProject.image} alt={featuredProject.title} className="featured-image" />
          </div>
          <div className="featured-info">
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.blurb}</p>
            <p className="tech-list">{featuredProject.technologies.join(' · ')}</p>
            <div className="featured-actions" onClick={e => e.stopPropagation()}>
              <a className="btn btn-primary" href={featuredProject.storeLink} target="_blank" rel="noopener noreferrer">
                App Store
              </a>
              <a className="btn btn-ghost" href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                yourfit.ai
              </a>
            </div>
          </div>
        </article>

        <div className="projects-grid">
          {projects.map(project => (
            <Project
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* ── Now ──────────────────────────────────────────────────────── */}
      <section id="now" className="section">
        <h2 className="section-title">Right now</h2>
        <div className="now-grid">
          <div className="card building-card">
            <h3>{currentlyBuilding.title}</h3>
            <p>{currentlyBuilding.description}</p>
            <p className="tech-list">{currentlyBuilding.tech.join(' · ')}</p>
          </div>
          <div className="card github-card">
            <h3>GitHub</h3>
            <GitHubStats username="av1ad" />
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <footer id="contact" className="section contact">
        <h2>Say hi</h2>
        <p>
          Got a project, a job, or a strong opinion about piano fingering? My inbox is open.
        </p>
        <a href="mailto:aviadchuraman@gmail.com" className="btn btn-primary btn-lg">
          aviadchuraman@gmail.com
        </a>
        <div className="links">
          <a href="https://github.com/av1ad" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/aviad-churaman" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Aviad_Churaman_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
        <p className="colophon">© {year} Aviad Churaman</p>
      </footer>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default App;
