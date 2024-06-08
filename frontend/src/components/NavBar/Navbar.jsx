import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
            <ul className="navbar-elements">
                <li className='home'><a href="#" className='navlink'>Home</a></li>
                <li className="centre-elements">
                    <a href="#" className='navlink'>Projects</a>
                    <a href="#" className='navlink'>About Me</a>
                    <a href="#" className='navlink'>Skills</a>
                </li>
                <li className="contace"><a href="#" className='navlink'>Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar