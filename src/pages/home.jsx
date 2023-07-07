import React from 'react'

import UserInformation from '../Components/user/userinformation'
import '../assets/css/home.css'
import { Award, Book, Box, Code, Coffee, Figma, Grid, Home, Mail, User, Zap } from 'react-feather'

import splash from '../assets/images/splash-wallpaper.png';
import travel from '../assets/images/travel-journal.png';

const home = () => {
  return (
    <main className='home'>
        <UserInformation />
        <div className='container'>
            <section id="introduction" data-aos="fade-up" className='introduction'>
                <div className='slug'>
                    <h2><Home size={14} role="none"/> Introduction</h2>
                </div>
                <h1 className='container__header'>
                    Say hi to <span className="highlight">Aviad,</span><br/>Frontend Web Developer.
                </h1>
                <p>
                Dive into the exhilarating world of digital design and development with me! My canvas stretches across <span className="highlight">web, mobile, and desktop landscapes</span>, constantly bustling with innovative projects. Despite the excitement of my current endeavors, I'm perpetually primed for <span className="highlight">fresh opportunities</span> that stir my creativity. If you're interested in joining forces to craft digital masterpieces, don't hesitate to connect. <span className="highlight">Together</span>, let's shape the future of digital innovation!
                </p>
            </section>
            <section id="about" data-aos="fade-up">
                <div className='slug'>
                    <h2><User size={14} role="none"/> About</h2>
                </div>
                <h2 className='container__header'>
                    Every great story starts with a great <span className='highlight'>story teller</span>.
                </h2>
                <p>
                Welcome to my world as a web developer, where I weave captivating narratives through the art of code. Since <span className="highlight">2021</span>, I've been immersed in the dynamic currents of modern web development, curating an extensive toolkit of state-of-the-art solutions.
                </p>
                <p>
                During my last year of high school I decided to learn web development headstart my career into the IT space. During these two years I have learned a multitude of technologies and practices.
                </p>
                <p>
                When I'm not crafting digital masterpieces, you'll find me indulging myself in being even more creative, I find myself creating every day, whether it be reading a book or sewing clothes I try my best to keep my mind busy.
                </p>
                <p>
                2021 marked a pivotal chapter in my life, as I tied the knot and embarked on an exhilarating new life journey. I would be honored if you chose to be a part of this ongoing, thrilling narrative. Let's script our success <span className="highlight">story together</span>!
                </p>
            </section>
            <section className="skills" data-aos="fade-up">
                <div className="slug">
                    <h2><Zap size={14} role="none"/>Skills</h2>
                </div>
                <div className="skills-container">

                    { /* HTML5 skill */}
                    <article className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>HTML5</h2>
                        </div>
                        <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/html-5.svg" alt="HTML5 Logo" />
                    </article>

                    { /* JavaScript skill */}
                    <article className="skill" data-aos="fade-left">
                        <div className="skill__header">
                            <h2>JavaScript</h2>
                        </div>
                        <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg" alt="JavaScript Logo" />
                    </article>

                    { /* ReactJS Skill */ }
                    <article className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>ReactJS</h2>
                        </div>
                        <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/react.svg" alt="React Logo" />
                    </article>

                    { /* Sass Skill */ }
                    <article className="skill" data-aos="fade-right">
                        <div className="skill__header">
                            <h2>Sass</h2>
                        </div>
                        <img src="https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/sass.svg" alt="SASS Logo" />
                    </article>

                </div>
            </section>
            <section id="education" data-aos="fade-up">
                <div className='slug'>
                    <h2><Book size={14} role="none"/> Education</h2>
                </div>
                <article className='education-tile'>
                    <div className='education-tile__header'>
                        <div className="education-tile__header__left">
                            <h2>Burnsville Senior Highschool</h2>
                            <p>Burnsville, MN</p>
                        </div>
                        <div className="education-tile__header__right">
                            <h2>Degree: <span className='highlight'>Highschool Diploma</span></h2>
                            <p>2018-2022</p>
                        </div>
                    </div>
                    <div className="education-tile__body">
                        <h2>Areas of Study:</h2>
                        <ul>
                            <li data-aos="fade-right"><p><span className="highlight">Communication</span>: Harness excellent communication skills to foster effective collaboration, streamline processes, and ensure clarity and alignment within project teams.</p></li>
                            <li data-aos="fade-left"><p><span className="highlight">Creativty</span>: I've attended tons of creative classes such as fashion design and just regular art classes which lead me to what I do now which is web development, I love being creative.</p></li>
                        </ul>
                    </div>
                </article>
            </section>
            <section id="awards" data-aos="fade-up">
                <div className='slug'>
                    <h2><Award size={14} role="none"/>Certificates</h2>
                </div>
                <article className="award-container">
                    <div className="award-container__header">
                        <h2>Scrimba's Frontend Developeer Career</h2>
                        <p>2021-2023</p>
                    </div>
                    <div className="award-container__body">
                        <p>
                        Scrimba is a course / bootcamp that is over 70 hours of content just for front-end web development. I completed it over the course of a year and a half and learned technologies such as HTML, CSS, Javascript, ReactJS, SASS, and Firebase.
                        </p>
                    </div>
                </article>
            </section>
            <section id="projects" data-aos="fade-up">
                <div className='slug'>
                    <h2><Box size={14} role="none"/> Projects</h2>
                </div>
                <h2 className='container__header'>
                    Featured <span className="highlight">Projects</span>
                </h2>
                <article className='project-card' data-aos="fade-left">
                    <a href="https://creative-moxie-076da4.netlify.app/" target='_blank' rel="noopener noreferrer" aria-label='View the Splash Wallpaper Project'>Splash Wallpaper</a>
                    <p>
                        A splash wallpaper built with HTML, CSS, API, and Javascript
                        This application was built as a challenge.
                    </p>
                    <img src={splash} className='project-image' alt="Screenshot of the Interactive Dictionary project" />
                </article>
                <article className='project-card' data-aos="fade-left">
                    <a href="https://gorgeous-arithmetic-e2e15a.netlify.app/" target='_blank' rel="noopener noreferrer" aria-label='View the GitHub User Information Project'>Travel Journal</a>
                    <p>
                        A simple one page website created using React.
                        This application was built as part of a challenge and is apart of the Scrimba curriculum.
                    </p>
                    <img src={travel} className='project-image' alt="Screenshot of the Interactive GitHub User Search project" />
                </article>
            </section>
            <section id="services" data-aos="fade-up">
                <div className="slug">
                    <h2><Grid size={14} role="none"/>Services</h2>
                </div>
                <article className="service-card" data-aos="fade-left">
                    <div className="service-card__header">
                        <h2>Website Design</h2>
                        <Figma size={16} role="none" color='#28e98c'/>
                    </div>
                    <p>
                    Step into the thrilling world of bespoke digital design with Figma! Together, we'll embark on an engaging, interactive journey where your invaluable insights will be woven into each stage of the design process. Witness your visions spring to life as we collaborate to mold the perfect concept that's as unique as you are. Let's shape your digital landscape together!
                    </p>
                </article>
                <article className="service-card" data-aos="fade-right">
                    <div className="service-card__header">
                        <h2>Development</h2>
                        <Code size={16} role="none" color='#28e98c'/>
                    </div>
                    <p>
                    Get ready for a thrilling expedition into the dynamic world of coding! I'll meticulously weave each strand of code, crafting the perfect digital tapestry to bring your website or web application to life. But this isn't just a solo act — it's a tandem venture. You'll be included in every strategic twist and turn, enabling us to seamlessly blend your vision into each line of code. Let's collaborate and watch your digital dreams come alive!
                    </p>
                </article>
            </section>
        </div>
    </main>
  )
}

export default home
