import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoMdDownload } from 'react-icons/io';
import '../components/Style/home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='content-wrapper'>
          <div className='text-content'>
            <p className='intro'>Hey! I'm</p>
            <h1 className='name'>OTU EMMANUELLA</h1>
            <h2 className='title'>Frontend Developer</h2>
            <p className='description'>
              Crafting exceptional digital experiences through responsive full-stack web applications.
              I solve real-world problems, combining design flair with clean code for seamless user-centric interfaces.
            </p>
            <div className='cta-container'>
              <Link to="/work" className='cta-button primary'>
                View Work
                <span className='cta-button-icon'>
                  <HiArrowNarrowRight />
                </span>
              </Link>
              <a href="/CV/Otu Emmanuella Original Resume 001.pdf" download className='cta-button secondary'>
                Download CV
                <span className='cta-button-icon'>
                  <IoMdDownload />
                </span>
              </a>
            </div>
          </div>
          <div className='image-container'>
            <div className='profile-image'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
