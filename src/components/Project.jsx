import React from 'react';
import './Project.scss'; // Assuming a SCSS file for styling

const LazyImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

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

const Project = ({ project }) => {
  return (
    <div className="project">
      <LazyImage src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="technology-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
      </div>
    </div>
  );
};

export default Project;
