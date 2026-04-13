import React, { useEffect } from 'react';
import './Modal.scss';

const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKey = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <div className="modal-body">
          <h2>{project.title}</h2>
          {project.metrics && (
            <div className="modal-metrics">
              {project.metrics.map((m, i) => (
                <span key={i} className="metric-chip">{m}</span>
              ))}
            </div>
          )}
          <p>{project.description}</p>
          <div className="modal-technologies">
            {project.technologies.map((tech, i) => (
              <span key={i} className="technology-tag">{tech}</span>
            ))}
          </div>
          <div className="modal-links">
            {project.codeLink && (
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
