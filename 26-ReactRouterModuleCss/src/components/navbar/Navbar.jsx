import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <section id='nav'>
        <div className="container">
            <div className="navbar">
                <h1>Start Bootstrap</h1>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Navbar