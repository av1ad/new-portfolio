import { useState } from 'react';
import './Project.scss';

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

const Project = ({ project, onClick }) => (
  <article
    className="project"
    onClick={onClick}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    tabIndex={0}
    role="button"
    aria-label={`Open details for ${project.title}`}
  >
    <div className="project-frame">
      <LazyImage src={project.image} alt={project.title} className="project-image" />
    </div>
    <div className="project-body">
      <h3>{project.title}</h3>
      <p>{project.blurb || project.description}</p>
      <p className="tech-list">{project.technologies.slice(0, 4).join(' · ')}</p>
      <div className="project-links" onClick={e => e.stopPropagation()}>
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live site
          </a>
        )}
        {project.codeLink && (
          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  </article>
);

export default Project;
