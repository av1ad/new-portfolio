import UserInformation from "../Components/user/userinformation";
import "../pages/home.css";
import { Box, User, Zap, ArrowUp } from "react-feather";

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
          <section id="about" data-aos="fade-up" className="introduction">
            <div className="slug">
              <h2>
                <User size={14} aria-hidden="true" /> About Me
              </h2>
            </div>
            <h1 className="container__header">
              <span className="highlight">Aviad Churaman</span>
              <br />
              Software Developer.
            </h1>
            <p>
              I'm a<span className="highlight"> Full-stack developer</span>{" "}
              specializing in modern web technologies. Since{" "}
              <span className="highlight">2021</span>, I've been immersed in web
              development, constantly expanding my skillset and tackling
              exciting challenges. Proficient in{" "}
              <span className="highlight">
                JavaScript, Typescript, React/React Native, Node.js, Dino,
                Python
              </span>
              , and various modern frameworks.
            </p>
            <p>
              I combine technical expertise with creative problem-solving to
              build innovative digital solutions. When I'm not coding, I explore
              my creative side through various hobbies, keeping my mind sharp
              and my perspective fresh. This balance helps me bring unique
              solutions to technical challenges.
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
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/others/html.svg"
                  alt="HTML5 Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>JavaScript (ES6+)</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/programming%20languages/javascript.svg"
                  alt="JavaScript Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>React/Next.js</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/react.svg"
                  alt="React Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>React/Next.js</h2>
                </div>
                <LazyImage
                  src="https://www.iquest.cz/_next/image?url=%2Ftechnology%2Freact-native.png&w=640&q=75"
                  alt="React Native Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>TypeScript</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/programming%20languages/typescript.svg"
                  alt="TypeScript Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Redux/Context API</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/redux.svg"
                  alt="Redux Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Tailwind</h2>
                </div>
                <LazyImage
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                  alt="Tailwind Logo"
                />
              </article>

              {/* Backend */}
              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Node.js/Express</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/frameworks/nodejs.svg"
                  alt="Node.js Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>MongoDB/MySQL</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/databases/mongodb.svg"
                  alt="MongoDB Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>RESTful APIs</h2>
                </div>
                <LazyImage
                  src="https://cdn-icons-png.flaticon.com/512/103/103093.png"
                  alt="API Logo"
                />
              </article>

              {/* Tools & Others */}
              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Git/GitHub</h2>
                </div>
                <LazyImage
                  src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                  alt="Git Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>Docker</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/cloud/docker.svg"
                  alt="Docker Logo"
                />
              </article>

              <article className="skill" data-aos="fade-right">
                <div className="skill__header">
                  <h2>AWS/Vercel</h2>
                </div>
                <LazyImage
                  src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/cloud/amazon.svg"
                  alt="AWS Logo"
                />
              </article>
            </div>
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
            <div className="project-cards-container">
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
                <p className="highlight">
                  Next.js, TypeScript, PostgreSQL, OpenAI API, TailwindCSS
                </p>
                <p>
                  A comprehensive, modern book discovery platform built with
                  Next.js that combines traditional search with AI-powered
                  recommendations. Discover, explore, and curate your personal
                  book collection with intelligent features and beautiful
                  design.
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
                    href="https://enjoy-the-outdoors-woad.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a>
                </div>
                <p className="highlight">
                  React.js, Typescript, Bootstrap
                </p>
                <p>
                  This web application is designed to assist users in
                  discovering national parks and mountains.
                </p>
                <LazyImage
                  src={enjoyingtheoutdoors}
                  className="project-image"
                  alt="Screenshot of the Enjoying the Outdoors project"
                />
              </article>
            </div>
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
