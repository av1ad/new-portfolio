import React, { useState, useRef, useEffect } from 'react';

import '../../assets/css/navbar.css'

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Award, Book, Box, GitHub, Grid, Home, Instagram, Mail, Twitter, User, Zap } from 'react-feather';
import { Link as ScrollLink } from 'react-scroll';

const navbar = () => {

    const ref = useRef();
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            setNavbarOpen(window.innerWidth >= 768);
        };

        if (window.innerWidth >= 768) {
            setNavbarOpen(true);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(() => {
        const handler = (event) => {
          if (
            navbarOpen &&
            ref.current
          ) {
            if (window.innerWidth < 768) {
                 setNavbarOpen(false);
            }
          }
        };
        //document.addEventListener('mousedown', handler);
        return () => {
          document.removeEventListener('mousedown', handler);
        };
      }, [navbarOpen]);

      return (
        <nav ref={ref} className='navbar'>
            <button aria-label='Toggle navigation drawer' className='toggle' onClick={() => setNavbarOpen((prev) => !prev)}>
              {navbarOpen ? (<MdClose style={{ width: '24px', height: '24px' }} />) : (<FiMenu style={{width: '24px',height: '24px'}}/>)}
            </button>

            <div className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                <div className='inner-menu'>
                  <h3>Navigation</h3>
                    <ul className='contact-links'>
                      <li role='button'>
                    <ScrollLink
                      className='link-holder'
                      to="introduction"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                      aria-label='Introduction Section'
                    >
                      <span className='icon-wrapper'><Home size={16}/></span><p>Home</p>
                    </ScrollLink>
                    </li>
                    <li role='button'>
                    <ScrollLink
                      className='link-holder'
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                      aria-label='About Section'
                    >
                      <span className='icon-wrapper'><User size={16}/></span><p>About</p>
                    </ScrollLink>
                    </li>

                    <li role='button'>
                    <ScrollLink
                      className='link-holder'
                      to='skills'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      aria-label='Skills Section'
                      >

                      <span className='icon-wrapper'><Zap size={16}/></span><p>Skills</p>

                      </ScrollLink>
                      </li>

                      <li role='button'>
                      <ScrollLink
                      className='link-holder'
                      to='education'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      aria-label='Education Section'
                      >

                      <span className='icon-wrapper'><Book size={16}/></span><p>Education</p>

                      </ScrollLink>
                      </li>

                      <li role='button'>
                      <ScrollLink
                      className='link-holder'
                      to='awards'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      aria-label='Awards Section'
                      >

                      <span className='icon-wrapper'><Award size={16}/></span><p>Awards</p>

                      </ScrollLink>
                      </li>

                    <li role='button'>
                    <ScrollLink
                      className='link-holder'
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass="active-link"
                      aria-label='Projects Section'
                    >
                      <span className='icon-wrapper'><Box size={16}/></span><p>Projects</p>
                    </ScrollLink>
                    </li>

                    <li role='button'>
                    <ScrollLink
                      className='link-holder'
                      to='services'
                      spy={true}
                      smooth={true}
                      offset={-170}
                      duration={500}
                      activeClass='active-link'
                      aria-label='Services Section'
                      >

                      <span className='icon-wrapper'><Grid size={16}/></span><p>Services</p>

                      </ScrollLink>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
      )
}

export default navbar
