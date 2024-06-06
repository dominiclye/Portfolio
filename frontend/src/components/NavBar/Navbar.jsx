import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar-elements">
                <li className='home'><a href="#">Home</a></li>
                <li className="centre-elements">
                    <a href="#">Projects</a>
                    <a href="#">About Me</a>
                    <a href="#">Skills</a>
                </li>
                <li className="contace"><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar