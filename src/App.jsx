import React, { useEffect, useState, useCallback } from 'react';
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

// ─── Data ────────────────────────────────────────────────────────────────────

const featuredProject = {
  title: "YourFit.ai",
  image: yourfit,
  description: "An AI-powered fitness app that creates personalized workout plans and provides intelligent fitness coaching. Built with React Native and Deno, powered by Gemini and TensorFlow.js.",
  liveLink: "https://yourfit.ai",
  codeLink: null,
  technologies: ["React Native", "TypeScript", "Deno", "Supabase", "Gemini API", "TensorFlow.js"],
  metrics: ["Live Product", "AI-Powered", "iOS & Android"]
};

const projects = [
  {
    title: "BookSearcher",
    image: booksearcher,
    description: "A comprehensive, modern book discovery platform built with Next.js that combines traditional search with AI-powered recommendations. Discover, explore, and curate your personal book collection with intelligent features and beautiful design.",
    liveLink: "https://book-searcher-self-six.vercel.app/",
    codeLink: "https://github.com/av1ad/BookSearcher",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Gemini API", "TailwindCSS"],
    metrics: ["AI Recommendations", "Full-Stack", "Next.js 14"]
  },
  {
    title: "Enjoying The Outdoors",
    image: enjoyingtheoutdoors,
    description: "This web application is designed to assist users in discovering national parks and mountains.",
    liveLink: "https://enjoy-the-outdoors-woad.vercel.app/",
    codeLink: "https://github.com/av1ad/enjoy-the-outdoors-remake",
    technologies: ["React.js", "Typescript", "Bootstrap"],
    metrics: ["National Parks API", "SPA"]
  },
  {
    title: "Chattergrape",
    image: chattergrape,
    description: "Chattergrape is a real-time chat application built using the MERN stack. It features user authentication, one-on-one messaging, and group chats.",
    liveLink: "https://chattergrape.onrender.com/",
    codeLink: "https://github.com/av1ad/Chattergrape",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    metrics: ["Real-time", "Group Chat", "MERN Stack"]
  }
];

// Update this whenever you start something new
const currentlyBuilding = {
  title: "YourFit.ai — App Store Launch",
  description: "Putting the finishing touches on YourFit.ai before its App Store release. AI-powered fitness coaching, personalized workout plans, and real-time guidance — shipping soon.",
  tech: ["React Native", "TypeScript", "Deno", "Supabase", "Gemini API", "TensorFlow.js"]
};

// ─── Typewriter hook ─────────────────────────────────────────────────────────

const ROLES = [
  "Full-stack Developer",
  "AI Enthusiast",
  "Problem Solver",
  "Building cool stuff",
];

const useTypewriter = (words, speed = 90, pause = 2000) => {
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
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex(i => i + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, wordIndex, words, speed, pause]);

  return text;
};

// ─── Lazy image ──────────────────────────────────────────────────────────────

const LazyImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imageLoaded ? 'loaded' : ''}`}
      onLoad={() => setImageLoaded(true)}
      loading="lazy"
    />
  );
};

// ─── App ─────────────────────────────────────────────────────────────────────

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const role = useTypewriter(ROLES);

  const toggleDarkMode = useCallback(() => setDarkMode(d => !d), []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
      });
    });
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <header className="fade-in-section">
        <LazyImage src={userPicture} alt="Aviad Churaman" className="user-photo" />
        <h1>Aviad Churaman</h1>
        <p className="typewriter">
          {role}
          <span className="cursor">|</span>
        </p>
      </header>

      <section id="about" className="fade-in-section">
        <h2>About Me</h2>
        <p>
          Full-stack developer who loves building cool stuff with JavaScript, TypeScript, React, Node.js, and Python. When I'm not coding, you'll find me playing piano, reading, or diving into random creative projects.
        </p>
      </section>

      <section id="skills" className="fade-in-section">
        <h2>Skills</h2>
        <h3>Languages</h3>
        <ul>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Java</li>
          <li>Go</li>
          <li>C++</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SQL</li>
        </ul>
        <h3>Frontend</h3>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>React Native</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Backend</h3>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Deno</li>
          <li>RESTful APIs</li>
          <li>JWT Authentication</li>
        </ul>
        <h3>Databases</h3>
        <ul>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>Supabase</li>
          <li>Firebase</li>
          <li>Prisma ORM</li>
        </ul>
        <h3>AI/ML</h3>
        <ul>
          <li>Gemini API Integration</li>
          <li>TensorFlow.js</li>
          <li>Natural Language Processing</li>
        </ul>
        <h3>Tools</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Cloudflare</li>
          <li>Stripe</li>
          <li>RevenueCat</li>
        </ul>
      </section>

      <section id="projects" className="fade-in-section">
        <h2>Projects</h2>

        {/* Featured project */}
        <div className="featured-project" onClick={() => setSelectedProject(featuredProject)}>
          <div className="featured-image-wrap">
            <LazyImage src={featuredProject.image} alt={featuredProject.title} className="featured-image" />
            <span className="featured-badge">Featured</span>
          </div>
          <div className="featured-info">
            <h3>{featuredProject.title}</h3>
            <div className="featured-metrics">
              {featuredProject.metrics.map((m, i) => (
                <span key={i} className="metric-chip">{m}</span>
              ))}
            </div>
            <p>{featuredProject.description}</p>
            <div className="project-technologies">
              {featuredProject.technologies.map((tech, i) => (
                <span key={i} className="technology-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links" onClick={e => e.stopPropagation()}>
              <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
            </div>
          </div>
        </div>

        {/* Rest of projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      <section id="github-activity" className="fade-in-section">
        <h2>GitHub Activity</h2>
        <div className="github-stats">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=av1ad&theme=tokyo-night&hide_border=true&bg_color=1e1e1e&color=8a4baf&line=8a4baf&point=c084fc"
            alt="Aviad's GitHub activity graph"
            className="github-chart"
          />
          <GitHubStats username="av1ad" />
        </div>
      </section>

      <section id="currently-building" className="fade-in-section">
        <h2>Currently Building</h2>
        <div className="building-card">
          <div className="building-status">
            <span className="status-dot" />
            <span>In progress</span>
          </div>
          <h3>{currentlyBuilding.title}</h3>
          <p>{currentlyBuilding.description}</p>
          <div className="building-tech">
            {currentlyBuilding.tech.map((t, i) => (
              <span key={i} className="technology-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="fade-in-section">
        <div className="links">
          <a href="mailto:aviadchuraman@gmail.com">Email</a>
          <a href="https://github.com/av1ad" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/aviad-churaman" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Aviad_Churaman_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </footer>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default App;
