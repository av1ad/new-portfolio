import React from "react";

import "../../assets/css/userinformation.css";
import userPicture from "../../assets/images/aviad.jpeg";
import { GitHub, Mail, Linkedin } from "react-feather";

const UserInformation = () => {
  return (
    <div className="user-card">
      <section className="user-card__header">
        <p className="user-card__header__name" role="heading">
          Aviad
        </p>
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
        <a
          href="https://drive.google.com/file/d/11StpWL5xpi8LRb-D8twJCmWl0IUHvB85/view?usp=sharing"
          className="user-card__footer__resume"
        >
          Resume
        </a>
        <p className="user-card__footer__copyright">
          © 2024 Aviad Churaman; All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default UserInformation;
