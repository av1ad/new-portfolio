import UserInformation from "../Components/user/userinformation";
import "../assets/css/home.css";
import {
  Award,
  Book,
  Box,
  Code,
  Coffee,
  Grid,
  Home,
  User,
  Zap,
  ArrowUp,
} from "react-feather";

import booksearcher from "../assets/images/booksearcher.png";
import chattergrape from "../assets/images/chattergrape.png";
import enjoyingtheoutdoors from "../assets/images/enjoyingtheoutdoors.png";
import spotifyprofile from "../assets/images/spotify.png";
import { useEffect, useState } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${imageLoaded ? "loaded" : ""}`}
      onLoad={() => setImageLoaded(true)}
      loading="lazy"
    />
  );
};

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Aviad Churaman | Software Developer";
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <main id="main-content" className="home">
        <UserInformation />
        <div className="container">
          <section
            id="introduction"
            data-aos="fade-up"
            className="introduction"
          >
            <div className="slug">
              <h2>
                <Home size={14} aria-hidden="true" /> Introduction
              </h2>
            </div>
            <h1 className="container__header">
              Say hi to <span className="highlight">Aviad,</span>
              <br />
              Software Developer.
            </h1>
            <p>
              <span className="highlight">Full-stack developer</span>{" "}
              specializing in modern web technologies. Proficient in{" "}
              <span className="highlight">
                JavaScript, Typescript, React, Node.js, Python
              </span>
              , and various modern frameworks. Experienced in building
              responsive, user-friendly applications with a focus on clean,
              efficient code.
            </p>
          </section>

          <section id="about" data-aos="fade-up">
            <div className="slug">
              <h2>
                <User size={14} aria-hidden="true" /> About
              </h2>
            </div>
            <h2 className="container__header">
              Every great story starts with a great{" "}
              <span className="highlight">story teller</span>.
            </h2>
            <p>
              Since <span className="highlight">2021</span>, I've been immersed
              in web development, constantly expanding my skillset and tackling
              exciting challenges. I combine technical expertise with creative
              problem-solving to build innovative digital solutions.
            </p>
            <p>
              When I'm not coding, I explore my creative side through various
              hobbies, keeping my mind sharp and my perspective fresh. This
              balance helps me bring unique solutions to technical challenges.
            </p>
          </section>
          <section className="skills" data-aos="fade-up">
            <div className="slug">
              <h2>
                <Zap size={14} aria-hidden="true" /> Skills
              </h2>
            </div>
            <div className="skills-container">
              {/* Frontend */}
              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>HTML5/CSS3</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/others/html.svg" alt="HTML5 Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>JavaScript (ES6+)</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/programming%20languages/javascript.svg" alt="JavaScript Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>React/Next.js</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/react.svg" alt="React Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>TypeScript</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/programming%20languages/typescript.svg" alt="TypeScript Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Redux/Context API</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/redux.svg" alt="Redux Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Tailwind</h2>
                </div>
                <LazyImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind Logo" />
              </article>

              {/* Backend */}
              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Node.js/Express</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/nodejs.svg" alt="Node.js Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>MongoDB/MySQL</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/databases/mongodb.svg" alt="MongoDB Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>RESTful APIs</h2>
                </div>
                <LazyImage src="https://cdn-icons-png.flaticon.com/512/103/103093.png" alt="API Logo" />
              </article>

              {/* Tools & Others */}
              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Git/GitHub</h2>
                </div>
                <LazyImage src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Docker</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/cloud/docker.svg" alt="Docker Logo" />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>AWS/Vercel</h2>
                </div>
                <LazyImage src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/cloud/amazon.svg" alt="AWS Logo" />
              </article>
            </div>
          </section>
          <section id="education" data-aos="fade-up">
            <div className="slug">
              <h2>
                <Book size={14} aria-hidden="true" /> Education
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
                    Degree:{" "}
                    <span className="highlight">Highschool Diploma</span>
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
                      collaboration, streamline processes, and ensure clarity
                      and alignment within project teams.
                    </p>
                  </li>
                  <li data-aos="fade-left">
                    <p>
                      <span className="highlight">Creativity</span>: I`ve
                      attended tons of creative classes such as fashion design
                      and just regular art classes which lead me to what I do
                      now which is web development, I love being creative.
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
                      <span className="highlight">Experience</span>: Year Up is
                      a leading one-year career development program with over
                      250 corporate partners that include professional training,
                      and a six-month internship.
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
                <Award size={14} aria-hidden="true" /> Certificates
              </h2>
            </div>
            <article className="award-container">
              <div className="award-container__header">
                <h2>Scrimba Frontend Developeer Career</h2>
                <p>2021-2023</p>
              </div>
              <div className="award-container__body">
                <p>
                  Scrimba is a course / bootcamp that is over 70 hours of
                  content just for front-end web development. I completed it
                  over the course of a year and a half and learned technologies
                  such as HTML, CSS, Javascript, ReactJS, SASS, and Firebase.
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
                <Box size={14} aria-hidden="true" /> Projects
              </h2>
            </div>
            <h2 className="container__header">
              Featured <span className="highlight">Projects</span>
            </h2>
            <article className="project-card" data-aos="fade-right">
              <div className="project-links">
                <a
                  href="https://github.com/av1ad/BookSearcher"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BookSearcher
                </a>
                <a
                  href="https://book-searcher-self-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
              <p className="highlight">Typescript, Tailwind, NextJS</p>
              <p>
                A modern web application built with Next.js that helps users
                discover books using the OpenLibrary API.
              </p>
              <LazyImage
                src={booksearcher}
                className="project-image"
                alt="Screenshot of the BookSearcher project interface"
              />
            </article>

            <article className="project-card" data-aos="fade-left">
              <div className="project-links">
                <a
                  href="https://github.com/av1ad/spotify-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify Profile
                </a>
                <a
                  href="https://aviad-spotify-profile-24b1df1946bf.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
              <p className="highlight">
                JavaScript, React.js, Node.js, Express.js
              </p>
              <p>
                This React application utilizes the Spotify API to display a
                user`s top artists, top tracks, recently played tracks, and
                public playlists.
              </p>
              <LazyImage
                src={spotifyprofile}
                className="project-image"
                alt="Screenshot of the Spotify Profile project"
              />
            </article>
            <article className="project-card" data-aos="fade-right">
              <div className="project-links">
                <a
                  href="https://github.com/av1ad/enjoy-the-outdoors-remake"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enjoying The Outdoors
                </a>
                <a
                  href="https://av1ad.github.io/Capstone2_EnjoyTheOutdoors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
              <p className="highlight">
                HTML, CSS, Bootstrap, ReactJS, JavaScript
              </p>
              <p>
                This web application is designed to assist users in discovering
                national parks and mountains.
              </p>
              <LazyImage
                src={enjoyingtheoutdoors}
                className="project-image"
                alt="Screenshot of the Enjoying the Outdoors project"
              />
            </article>

            <article className="project-card" data-aos="fade-left">
              <div className="project-links">
                <a
                  href="https://github.com/av1ad/ChatterGrape"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ChatterGrape
                </a>
                <a
                  href="https://av1ad.github.io/ChatterGrape/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Preview
                </a>
              </div>
              <p className="highlight">
                HTML, CSS, Bootstrap, JavaScript, REST-API
              </p>
              <p>
                ChatterGrape allows users to register, login, logout, make post,
                delete post, like post, dislike post, and view their own
                profiles.
              </p>
              <LazyImage
                src={chattergrape}
                className="project-image"
                alt="Screenshot of the ChatterGrape project"
              />
            </article>
          </section>

          <section id="services" data-aos="fade-up">
            <div className="slug">
              <h2>
                <Grid size={14} aria-hidden="true" /> Skillsets
              </h2>
            </div>
            <article className="service-card" data-aos="fade-left">
              <div className="service-card__header">
                <h2>Web Development</h2>
                <Code size={16} color="#28e98c" />
              </div>
              <p>
                Proficient in web development technologies including{" "}
                <span className="highlight">HTML</span>,{" "}
                <span className="highlight">CSS</span>, and{" "}
                <span className="highlight">JavaScript</span>, with experience
                in modern frameworks like{" "}
                <span className="highlight">ReactJS</span>.
              </p>
            </article>

            <article className="service-card" data-aos="fade-right">
              <div className="service-card__header">
                <h2>Backend Development</h2>
                <Code size={16} color="#28e98c" />
              </div>
              <p>
                Experienced in backend development using{" "}
                <span className="highlight">Node.js</span>,{" "}
                <span className="highlight">Express</span>, and{" "}
                <span className="highlight">MySQL</span>.
              </p>
            </article>

            <article className="service-card" data-aos="fade-right">
              <div className="service-card__header">
                <h2>Communication / Team Player</h2>
                <Coffee size={16} color="#28e98c" />
              </div>
              <p>
                Strong communicator with excellent teamwork abilities.
                Collaborates effectively with cross-functional teams.
              </p>
            </article>
          </section>
        </div>

        {isScrolled && (
          <button
            onClick={scrollToTop}
            className="scroll-to-top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </button>
        )}
      </main>
    </>
  );
};

export default HomePage;

