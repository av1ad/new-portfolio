import Pdf from "../../assets/Aviad_Churaman_Resume.pdf";
import "../../assets/css/userinformation.css";
import userPicture from "../../assets/images/aviad.jpeg";
import { GitHub, FileText, Linkedin } from 'react-feather'; // Updated imports
const UserInformationContent = () => {
  return (
    <div className="user-card">
      <section className="user-card__header">
        <h1 className="user-card__header__name">Aviad Churaman</h1>
        <p className="user-card__header__title">Software Developer</p>
      </section>
      <section className="user-card__image">
        <img
          className="user-card__image__photo"
          src={userPicture}
          alt="Picture of Aviad Churaman"
          tabIndex="-1"
        />
      </section>
      <section className="user-card__footer">
        <a
          href="mailto:aviadchuraman@gmail.com"
          className="user-card__footer__email"
        >
          aviadchuraman@gmail.com
        </a>
        <p className="user-card__footer__based">Based in USA</p>
        <div className="user-card__footer__links">
          <a
            href={Pdf}
            target="_blank"
            className="user-card__footer__link"
            rel="noreferrer"
            aria-label="Download Resume"
          >
            <FileText size={20} />
          </a>
          <a
            href="https://github.com/av1ad"
            target="_blank"
            className="user-card__footer__link"
            rel="noreferrer"
            aria-label="Visit GitHub Profile"
          >
            <GitHub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aviad-churaman"
            target="_blank"
            className="user-card__footer__link"
            rel="noreferrer"
            aria-label="Visit LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
        <p className="user-card__footer__copyright">
          © 2024 Aviad Churaman; All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default UserInformationContent;
