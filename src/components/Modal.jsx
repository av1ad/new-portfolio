import { useEffect } from 'react';
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
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={e => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-image-wrap">
          <img src={project.image} alt={project.title} className="modal-image" />
        </div>
        <div className="modal-body">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p className="tech-list">{project.technologies.join(' · ')}</p>
          <div className="modal-links">
            {project.storeLink && (
              <a className="btn btn-primary" href={project.storeLink} target="_blank" rel="noopener noreferrer">
                App Store
              </a>
            )}
            {project.liveLink && (
              <a
                className={`btn ${project.storeLink ? 'btn-ghost' : 'btn-primary'}`}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.storeLink ? 'Website' : 'Live site'}
              </a>
            )}
            {project.codeLink && (
              <a className="btn btn-ghost" href={project.codeLink} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
