import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Ella.jpg';
import '../components/Style/navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <nav className={`navbar ${shadow ? 'shadow' : ''}`}>
      <div className='navbar-container'>
        <div className='logo'>
          <img src={Logo} alt='Logo'/>
        </div>

        <ul className='desktop-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div onClick={handleClick} className={`hamburger ${nav ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className='social-icons desktop'>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/emmanuella-otu-6694b6260/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
                <span className="icon-name">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='https://github.com/otuemmanuella' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
                <span className="icon-name">GitHub</span>
              </a>
            </li>
            <li>
              <a href='mailto:otumanuella@gmail.com'>
                <HiOutlineMail />
                <span className="icon-name">Email</span>
              </a>
            </li>
            <li>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <BsFillPersonLinesFill />
                <span className="icon-name">Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`mobile-menu ${nav ? 'active' : ''}`}>
        <ul>
          <li><Link onClick={handleClick} to='/'>Home</Link></li>
          <li><Link onClick={handleClick} to='/about'>About</Link></li>
          <li><Link onClick={handleClick} to='/work'>Work</Link></li>
          <li><Link onClick={handleClick} to='/contact'>Contact</Link></li>
        </ul>

        <div className='social-icons mobile'>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/emmanuella-otu-6694b6260/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='https://github.com/otuemmanuella' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a href='mailto:otumanuella@gmail.com'>
                <HiOutlineMail />
              </a>
            </li>
            <li>
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <BsFillPersonLinesFill />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;