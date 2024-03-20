import React from "react";

import UserInformation from "../Components/user/userinformation";
import "../assets/css/home.css";
import {
  Award,
  Book,
  Box,
  Code,
  Coffee,
  Figma,
  Grid,
  Home,
  Mail,
  User,
  Zap,
} from "react-feather";

import cardealership from "../assets/images/cardealership.png";
import chattergrape from "../assets/images/chattergrape.png";
import enjoyingtheoutdoors from "../assets/images/enjoyingtheoutdoors.png";

const home = () => {
  return (
    <main className="home">
      <UserInformation />
      <div className="container">
        <section id="introduction" data-aos="fade-up" className="introduction">
          <div className="slug">
            <h2>
              <Home size={14} role="none" /> Introduction
            </h2>
          </div>
          <h1 className="container__header">
            Say hi to <span className="highlight">Aviad,</span>
            <br />
            Software Developer.
          </h1>
          <p>
            I'm a passionate{" "}
            <span className="highlight">software developer</span> who loves to
            create engaging digital experiences. With a strong foundation in{" "}
            <span className="highlight">HTML, CSS, and JavaScript</span>, I
            enjoy building responsive and interactive websites. I leverage the
            power of <span className="highlight">Bootstrap</span> to create
            sleek and modern designs, while also diving into the world of web
            applications using <span className="highlight">ReactJS</span>. My
            skills extend beyond the web, as I'm proficient in{" "}
            <span className="highlight">Java</span> for crafting robust desktop
            and mobile applications.{" "}
          </p>
        </section>
        <section id="about" data-aos="fade-up">
          <div className="slug">
            <h2>
              <User size={14} role="none" /> About
            </h2>
          </div>
          <h2 className="container__header">
            Every great story starts with a great{" "}
            <span className="highlight">story teller</span>.
          </h2>
          <p>
            Welcome to my world as a web developer, where I weave captivating
            narratives through the art of code. Since{" "}
            <span className="highlight">2021</span>, I've been immersed in the
            dynamic currents of modern web development, curating an extensive
            toolkit of state-of-the-art solutions.
          </p>
          <p>
            During my last year of high school I decided to learn web
            development headstart my career into the IT space. During these two
            years I have learned a multitude of technologies and practices.
          </p>
          <p>
            When I'm not crafting digital masterpieces, you'll find me indulging
            myself in being even more creative, I find myself creating every
            day, whether it be reading a book or sewing clothes I try my best to
            keep my mind busy.
          </p>
          <p>
            2021 marked a pivotal chapter in my life, as I tied the knot and
            embarked on an exhilarating new life journey. I would be honored if
            you chose to be a part of this ongoing, thrilling narrative. Let's
            script our success <span className="highlight">story together</span>
            !
          </p>
        </section>
        <section className="skills" data-aos="fade-up">
          <div className="slug">
            <h2>
              <Zap size={14} role="none" />
              Skills
            </h2>
          </div>
          <div className="skills-container">
            {/* HTML5 skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>HTML5</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/html-5.svg"
                alt="HTML5 Logo"
              />
            </article>

            {/* Sass Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>Sass</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/sass.svg"
                alt="SASS Logo"
              />
            </article>

            {/* Bootstrap Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>Bootstrap</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bootstrap.svg"
                alt="Bootstrap Logo"
              />
            </article>

            {/* JavaScript skill */}
            <article className="skill" data-aos="fade-left">
              <div className="skill__header">
                <h2>JavaScript</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg"
                alt="JavaScript Logo"
              />
            </article>

            {/* ReactJS Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>ReactJS</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/react.svg"
                alt="React Logo"
              />
            </article>

            {/* Java Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>Java</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/java.svg"
                alt="Java Logo"
              />
            </article>

            {/* mySQL Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>MySQL</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/bwks/vendor-icons-svg/master/mysql-logo.svg"
                alt="MySQL Logo"
              />
            </article>

            {/* Git Skill */}
            <article className="skill" data-aos="fade-right">
              <div className="skill__header">
                <h2>Git</h2>
              </div>
              <img
                src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg"
                alt="Git Logo"
              />
            </article>
          </div>
        </section>
        <section id="education" data-aos="fade-up">
          <div className="slug">
            <h2>
              <Book size={14} role="none" /> Education
            </h2>
          </div>
          <article className="education-tile">
            <div className="education-tile__header">
              <div className="education-tile__header__left">
                <h2>Burnsville Senior Highschool</h2>
                <p>Burnsville, MN</p>
              </div>
              <div className="education-tile__header__right">
                <h2>
                  Degree: <span className="highlight">Highschool Diploma</span>
                </h2>
                <p>2018-2022</p>
              </div>
            </div>
            <div className="education-tile__body">
              <h2>Areas of Study:</h2>
              <ul>
                <li data-aos="fade-right">
                  <p>
                    <span className="highlight">Communication</span>: Harness
                    excellent communication skills to foster effective
                    collaboration, streamline processes, and ensure clarity and
                    alignment within project teams.
                  </p>
                </li>
                <li data-aos="fade-left">
                  <p>
                    <span className="highlight">Creativity</span>: I've attended
                    tons of creative classes such as fashion design and just
                    regular art classes which lead me to what I do now which is
                    web development, I love being creative.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article className="education-tile">
            <div className="education-tile__header">
              <div className="education-tile__header__left">
                <h2>Pluralsight / YearUp</h2>
                <p>Tampa, FL</p>
              </div>
              <div className="education-tile__header__right">
                <h2>
                  <span className="highlight">Coding Bootcamp</span>
                </h2>
                <p>2023-2024</p>
              </div>
            </div>
            <div className="education-tile__body">
              <h2>Areas of Study:</h2>
              <ul>
                <li data-aos="fade-right">
                  <p>
                    <span className="highlight">Experience</span>: Year Up is a
                    leading one-year career development program with over 250
                    corporate partners that include professional training, and a
                    six-month internship.
                  </p>
                </li>
                <li data-aos="fade-left">
                  <p>
                    <span className="highlight">Experience</span>: Accrue 200+
                    hours of hands-on training in Software Development using
                    HTML, CSS, JavaScript, and Java.
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section id="awards" data-aos="fade-up">
          <div className="slug">
            <h2>
              <Award size={14} role="none" />
              Certificates
            </h2>
          </div>
          <article className="award-container">
            <div className="award-container__header">
              <h2>Scrimba Frontend Developeer Career</h2>
              <p>2021-2023</p>
            </div>
            <div className="award-container__body">
              <p>
                Scrimba is a course / bootcamp that is over 70 hours of content
                just for front-end web development. I completed it over the
                course of a year and a half and learned technologies such as
                HTML, CSS, Javascript, ReactJS, SASS, and Firebase.
              </p>
            </div>
          </article>

          <article className="award-container">
            <div className="award-container__header">
              <h2>Frontend Developer 12-Week Immersive Developer Academy</h2>
              <p>2023-2024</p>
            </div>
            <div className="award-container__body">
              <p>
                Accrue 200+ hours of hands-on training in Software Development
                using HTML, CSS, JavaScript, and Java.{" "}
              </p>
            </div>
          </article>
        </section>
        <section id="projects" data-aos="fade-up">
          <div className="slug">
            <h2>
              <Box size={14} role="none" /> Projects
            </h2>
          </div>
          <h2 className="container__header">
            Featured <span className="highlight">Projects</span>
          </h2>
          <article className="project-card" data-aos="fade-left">
            <a
              href="https://github.com/jewelsonmyjeans/enjoy-the-outdoors-remake"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Enjoying The Outdoors Project"
            >
              Enjoying The Outdoors
            </a>
            <p class="highlight">HTML, CSS, Bootstrap, ReactJS, JavaScript</p>
            <p>
              This web application is designed to assist users in discovering
              national parks and mountains. Users have the ability to search for
              activities based on location or park type. Additionally, a
              dropdown menu allows users to select a specific mountain,
              providing them with detailed information about that particular
              mountain.
            </p>
            <img
              src={enjoyingtheoutdoors}
              className="project-image"
              alt="Screenshot of the Interactive Dictionary project"
            />
          </article>
          <article className="project-card" data-aos="fade-left">
            <a
              href="https://github.com/jewelsonmyjeans/CarDealership"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Car Dealership Project"
            >
              Car Dealership
            </a>
            <p class="highlight">Java</p>
            <p>
              The CarDealership application is a simple console-based
              application developed in Java. It allows users to interact with a
              virtual car dealership, providing functionalities such as viewing
              all vehicles, adding a vehicle, removing a vehicle, and finding
              vehicles based on various criteria.
            </p>
            <img
              src={cardealership}
              className="project-image"
              alt="Screenshot of the Interactive GitHub User Search project"
            />
          </article>
          <article className="project-card" data-aos="fade-left">
            <a
              href="https://github.com/jewelsonmyjeans/ChatterGrape"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ChatterGrape"
            >
              ChatterGrape
            </a>
            <p class="highlight">HTML, CSS, Bootstrap, JavaScript, REST-API</p>
            <p>
              ChatterGrape allows users to register, login, logout, make post,
              delete post, like post, dislike post, and view their own profiles.
              This was a project I did to learn how to use REST-API's and how to
              use them in a web application alongside that I worked with a group
              for of 3 for this project.
            </p>
            <img
              src={chattergrape}
              className="project-image"
              alt="Screenshot of the Interactive GitHub User Search project"
            />
          </article>
        </section>
        <section id="services" data-aos="fade-up">
          <div className="slug">
            <h2>
              <Grid size={14} role="none" />
              Skillsets
            </h2>
          </div>
          <article className="service-card" data-aos="fade-left">
            <div className="service-card__header">
              <h2>Web Development</h2>
              <Code size={16} role="none" color="#28e98c" />
            </div>
            <p>
              Proficient in web development technologies including HTML, CSS,
              and JavaScript, with experience in modern frameworks like ReactJS.
              Skilled in creating responsive and dynamic web applications that
              provide seamless user experiences across various devices. Utilizes
              Bootstrap and SASS to enhance the design and maintainability of
              stylesheets, ensuring consistent and visually appealing
              interfaces. Passionate about staying up-to-date with the latest
              web development trends and best practices to deliver high-quality,
              efficient, and maintainable code. Committed to creating accessible
              and user-friendly web solutions that meet client requirements and
              exceed user expectations.
            </p>
          </article>
          <article className="service-card" data-aos="fade-right">
            <div className="service-card__header">
              <h2>Backend Developerment</h2>
              <Code size={16} role="none" color="#28e98c" />
            </div>
            <p>
              Experienced in backend development using Java and MySQL.
              Proficient in designing and implementing robust and scalable
              server-side applications. Skilled in writing clean, efficient, and
              maintainable Java code, following best practices and design
              patterns. Knowledgeable in database management using MySQL,
              including data modeling, query optimization, and performance
              tuning. Experienced in integrating frontend and backend components
              to create seamless and responsive web applications. Committed to
              writing secure and reliable code, implementing authentication and
              authorization mechanisms, and following industry standards for
              data protection. Continuously learning and adapting to new
              technologies and frameworks to deliver high-quality backend
              solutions.
            </p>
          </article>
          <article className="service-card" data-aos="fade-right">
            <div className="service-card__header">
              <h2>Communication / Team Player</h2>
              <Coffee size={16} role="none" color="#28e98c" />
            </div>
            <p>
              Strong communicator with excellent teamwork abilities.
              Collaborates effectively with cross-functional teams, including
              designers, product managers, and other developers, to understand
              requirements, provide technical insights, and deliver high-quality
              results. Proactively communicates progress, challenges, and
              solutions to stakeholders, ensuring transparency and alignment
              throughout the development process.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
};

export default home;
