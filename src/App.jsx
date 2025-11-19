import React, { useEffect, useState } from 'react';
import './app.scss';
import userPicture from './assets/images/aviad.jpeg';
import booksearcher from './assets/images/booksearcher.png';
import spotifyprofile from './assets/images/spotify.png';
import enjoyingtheoutdoors from './assets/images/enjoyingtheoutdoors.png';
import chattergrape from './assets/images/chattergrape.png';
import traveljournal from './assets/images/travel-journal.png';
import Project from './components/Project'; // Import the Project component


const projects = [
  {
    title: "BookSearcher",
    image: booksearcher,
    description: "A comprehensive, modern book discovery platform built with Next.js that combines traditional search with AI-powered recommendations. Discover, explore, and curate your personal book collection with intelligent features and beautiful design.",
    liveLink: "https://book-searcher-self-six.vercel.app/",
    codeLink: "https://github.com/av1ad/BookSearcher",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "TailwindCSS"]
  },
  {
    title: "Spotify Profile",
    image: spotifyprofile,
    description: "This React application utilizes the Spotify API to display a user`s top artists, top tracks, recently played tracks, and public playlists.",
    liveLink: "https://aviad-spotify-profile-24b1df1946bf.herokuapp.com/",
    codeLink: "https://github.com/av1ad/spotify-application",
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js"]
  },
  {
    title: "Enjoying The Outdoors",
    image: enjoyingtheoutdoors,
    description: "This web application is designed to assist users in discovering national parks and mountains.",
    liveLink: "https://enjoy-the-outdoors-woad.vercel.app/",
    codeLink: "https://github.com/av1ad/enjoy-the-outdoors-remake",
    technologies: ["React.js", "Typescript", "Bootstrap"]
  },
  {
    title: "Chattergrape",
    image: chattergrape,
    description: "Chattergrape is a real-time chat application built using the MERN stack. It features user authentication, one-on-one messaging, and group chats.",
    liveLink: "https://chattergrape.onrender.com/",
    codeLink: "https://github.com/av1ad/Chattergrape",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"]
  },
  {
    title: "Travel Journal",
    image: traveljournal,
    description: "A simple travel journal application built with React that allows users to record and display their travel experiences.",
    liveLink: "https://travel-journal-av1ad.vercel.app/",
    codeLink: "https://github.com/av1ad/travel-journal",
    technologies: ["React", "JavaScript", "CSS"]
  }
];

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

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // Changed to true for default dark mode

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <header className="fade-in-section">
        <LazyImage src={userPicture} alt="Aviad Churaman" className="user-photo" />
        <h1>Aviad Churaman</h1>
        <p>Software Developer</p>
      </header>

      <section id="about" className="fade-in-section">
        <h2>About Me</h2>
        <p>
          I'm a Full-stack developer specializing in modern web technologies. Since 2021, I've been immersed in web
          development, constantly expanding my skillset and tackling exciting challenges. Proficient in JavaScript,
          Typescript, React/React Native, Node.js, Deno, Python, and various modern frameworks.
        </p>
        <p>
          I combine technical expertise with creative problem-solving to build innovative digital solutions. When I'm not
          coding, I play piano, read, and explore my creative side through various hobbies, keeping my mind sharp and my
          perspective fresh. This balance helps me bring unique solutions to technical challenges.
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
          <li>OpenAI GPT Integration</li>
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
          <li>Vercel</li>
          <li>Stripe</li>
          <li>RevenueCat</li>
        </ul>
      </section>

      <section id="projects" className="fade-in-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </section>

      <footer className="fade-in-section">
        <p>&copy; {new Date().getFullYear()} Aviad Churaman; All rights reserved.</p>
        <div className="links">
          <a href="mailto:aviadchuraman@gmail.com">Email</a>
          <a href="https://github.com/av1ad" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/aviad-churaman" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Aviad_Churaman_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </footer>
    </div>
  );
};

export default App;