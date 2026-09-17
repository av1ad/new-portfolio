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
import { Sparkle, Underline, Arrow, Tape } from './components/Doodles';

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredProject = {
  title: 'YourFit.ai',
  image: yourfit,
  blurb: 'An AI fitness coach in your pocket, live on the App Store. Personalized plans, real-time guidance, and a model that actually adapts to you.',
  description:
    'An AI-powered fitness app, released and actively updated, that creates personalized workout plans and provides intelligent fitness coaching. Built with React Native and Deno, powered by Gemini and TensorFlow.js. Payments through RevenueCat and Stripe, data on Supabase.',
  liveLink: 'https://yourfit.ai',
  storeLink: 'https://apps.apple.com/us/app/yourfit-calorie-workout-log/id6754610096',
  codeLink: null,
  technologies: ['React Native', 'TypeScript', 'Deno', 'Supabase', 'Gemini API', 'TensorFlow.js'],
  metrics: ['On the App Store', 'AI-powered', 'Actively updated'],
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
    metrics: ['AI recommendations', 'Full-stack', 'Next.js 14'],
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
    metrics: ['Real-time', 'Group chat', 'MERN'],
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
    metrics: ['National Parks API', 'SPA'],
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

const ROLES = [
  'full-stack developer',
  'AI tinkerer',
  'App Store shipper',
  'occasional pianist',
  'professional side-project starter',
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

const useTypewriter = (words, speed = 80, pause = 1900) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') { setIsDeleting(false); setWordIndex(i => i + 1); }
      }
    }, isDeleting ? speed / 2.2 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, wordIndex, words, speed, pause]);

  return text;
};

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

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
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

const SectionTitle = ({ note, children }) => (
  <div className="section-title">
    {note && <span className="handwritten note">{note}</span>}
    <h2>{children}</h2>
  </div>
);

// ─── App ─────────────────────────────────────────────────────────────────────

const App = () => {
  const [theme, toggleTheme] = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [waves, setWaves] = useState(0);
  const role = useTypewriter(ROLES);
  useReveal();

  const year = new Date().getFullYear();

  return (
    <div className="App" id="top">
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <header id="hero" className="hero">
        <div className="hero-text">
          <span className="handwritten hero-hello">hey there, i'm</span>
          <h1>
            Aviad{' '}
            <button
              type="button"
              className={`wave ${waves ? 'waving' : ''}`}
              onClick={() => setWaves(w => w + 1)}
              onAnimationEnd={() => setWaves(0)}
              aria-label="Wave back"
              title="wave back!"
            >
              👋
            </button>
          </h1>
          <p className="hero-tagline">
            I build things that <Underline>ship</Underline>.
          </p>
          <p className="typewriter" aria-live="polite">
            <span className="typewriter-prefix">aka</span> {role}
            <span className="cursor" aria-hidden="true">|</span>
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">see my work</a>
            <a href="#contact" className="btn btn-ghost">say hi</a>
          </div>
          <a href="https://apps.apple.com/us/app/yourfit-calorie-workout-log/id6754610096" target="_blank" rel="noopener noreferrer" className="hero-pill">
            <span className="pill-dot" /> <b>YourFit.ai</b> is live · shipping updates ↗
          </a>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo">
            <Tape className="tape-left" />
            <Tape className="tape-right" />
            <LazyImage src={userPicture} alt="Aviad Churaman" className="user-photo" />
            <span className="handwritten photo-caption">me, probably thinking about a side project</span>
          </div>
          <Sparkle className="spark spark-1" size={26} />
          <Sparkle className="spark spark-2" size={16} />
          <Sparkle className="spark spark-3" size={20} />
        </div>
      </header>

      {/* ── About ────────────────────────────────────────────────────── */}
      <section id="about" className="section reveal">
        <SectionTitle note="a little context">about me</SectionTitle>
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
            <div className="stack">
              <span className="handwritten stack-label">my go-to stack</span>
              <div className="stack-chips">
                {STACK.map(s => (
                  <span key={s} className="tag tag-lg">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="off-clock">
            <span className="handwritten off-clock-title">off the clock</span>
            <div className="hobby hobby-piano">
              <span className="hobby-emoji" aria-hidden="true">🎹</span>
              <div>
                <b>piano</b>
                <p>mostly playing by ear. go on, press a key.</p>
                <Piano />
              </div>
            </div>
            <div className="hobby">
              <span className="hobby-emoji" aria-hidden="true">📚</span>
              <div>
                <b>books</b>
                <p>a growing to-read pile and a shrinking excuse not to read it.</p>
              </div>
            </div>
            <div className="hobby">
              <span className="hobby-emoji" aria-hidden="true">✨</span>
              <div>
                <b>random creative projects</b>
                <p>half-finished, fully enjoyed.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Work ─────────────────────────────────────────────────────── */}
      <section id="work" className="section reveal">
        <SectionTitle note="things i've made">work</SectionTitle>

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
            <span className="featured-badge">★ featured</span>
          </div>
          <div className="featured-info">
            <div className="chips">
              {featuredProject.metrics.map(m => (
                <span key={m} className="chip">{m}</span>
              ))}
            </div>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.blurb}</p>
            <div className="chips">
              {featuredProject.technologies.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="featured-actions" onClick={e => e.stopPropagation()}>
              <a className="btn btn-primary" href={featuredProject.storeLink} target="_blank" rel="noopener noreferrer">
                 get it on the App Store ↗
              </a>
              <a className="btn btn-ghost" href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">
                yourfit.ai ↗
              </a>
              <span className="handwritten featured-note">
                <Arrow /> the big one
              </span>
            </div>
          </div>
        </article>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project
              key={project.title}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      {/* ── Now ──────────────────────────────────────────────────────── */}
      <section id="now" className="section reveal">
        <SectionTitle note="what i'm up to">right now</SectionTitle>
        <div className="now-grid">
          <div className="card building-card">
            <div className="building-status">
              <span className="status-dot" /> shipping updates
            </div>
            <h3>{currentlyBuilding.title}</h3>
            <p>{currentlyBuilding.description}</p>
            <div className="chips">
              {currentlyBuilding.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="card github-card">
            <span className="handwritten card-note">on github</span>
            <GitHubStats username="av1ad" />
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <footer id="contact" className="section contact reveal">
        <span className="handwritten note">that's the tour</span>
        <h2>say hi 👋</h2>
        <p>
          Got a project, a job, or a strong opinion about piano fingering? My inbox is open.
        </p>
        <a href="mailto:aviadchuraman@gmail.com" className="btn btn-primary btn-lg">
          aviadchuraman@gmail.com
        </a>
        <div className="links">
          <a href="https://github.com/av1ad" target="_blank" rel="noreferrer">github</a>
          <a href="https://linkedin.com/in/aviad-churaman" target="_blank" rel="noreferrer">linkedin</a>
          <a href="/Aviad_Churaman_Resume.pdf" target="_blank" rel="noreferrer">resume</a>
        </div>
        <p className="colophon">
          © {year} Aviad Churaman · made with React, too much coffee, and a cat that follows your cursor
        </p>
      </footer>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default App;
