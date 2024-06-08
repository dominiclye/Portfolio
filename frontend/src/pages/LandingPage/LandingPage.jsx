import React from 'react'
import './LandingPage.css'
import Navbar from '../../components/NavBar/Navbar'
import heroPhoto from '../../assets/hero-photo.jpg'

const LandingPage = () => {
  return (
    <div className="bg-grid">
        <Navbar />
        <div className="hero">
            <div className="portrait-container">
                <img src={heroPhoto} alt="portrait" className='portrait' />
                <p className="caption">📍 Hakuba, Japan</p>
            </div>

            <div className="text-container">
                <h1 className="hero-title">Hello, I'm <span className='hero-name'>Dominic</span></h1>
                <p className="hero-text">A first-year student at The University of Melbourne, completing a Bachelor of Science with hopes of majoring in Data Science</p>
            </div>
            
        </div>

        <div className="skills">
            <h1>Skills</h1>
            <ul className="skill-icons">
                <li className='skill-icon'>Python</li>
                <li className='skill-icon'>JavaScript</li>
                <li className='skill-icon'>Golang</li>
                <li className='skill-icon'>SQL</li>
                <li className='skill-icon'>Docker</li>
            </ul>
        </div>
    </div>

  )
}

export default LandingPage