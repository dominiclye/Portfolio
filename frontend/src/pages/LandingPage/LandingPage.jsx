import React from 'react'
import './LandingPage.css'
import Navbar from '../../components/NavBar/Navbar'
import heroPhoto from '../../assets/hero-photo.jpg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import linkedinIcon from '../../assets/linkedin.svg'



const LandingPage = () => {
  return (
    <>
    <div className="bg-grid">
        <Navbar />
        <div className="hero">
                <div className="portrait-container">
                    <img src={heroPhoto} alt="portrait" className='portrait' />
                    <p className="caption">📍 Hakuba, Japan</p>
                </div>

                <div className="text-container">
                    <h1 className="hero-title">Hello, I'm <span className='hero-name'>Dominic</span></h1>
                    <p className="hero-text">A first-year student at The University of Melbourne, completing a Bachelor of Science majoring in Data Science</p>
                </div>

        </div>
        <div className="hero-links">
                        <a href="https://github.com/dominiclye" target="_blank" rel="noreferrer" className="link-wrapper"><img src={githubIcon} alt="#" className="hero-link" /></a>
                        <a href="https://github.com/dominiclye" target="_blank" rel="noreferrer" className="link-wrapper"><img src={instagramIcon} alt="#" className="hero-link" /></a>
                        <a href="https://github.com/dominiclye" target="_blank" rel="noreferrer" className="link-wrapper"><img src={linkedinIcon} alt="#" className="hero-link" /></a>
        </div>
        <p className="cttc">Don't feel like exploring? <a href="#" className="resume">Download Resume</a></p>
    </div>
    <div className="skills-bg">
      <div className="skills-content">
        <ul className="tech-stack">
          <li className="tech-icons">Golang</li>
          <li className="tech-icons">Python</li>
          <li className="tech-icons">Javascript</li>
          <li className="tech-icons">SQL</li>
          <li className="tech-icons">C</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default LandingPage