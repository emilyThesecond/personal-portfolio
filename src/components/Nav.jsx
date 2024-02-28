import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <div className={`nav ${isOpen ? 'open' : ''}`}>
    {/* Toggle button */}
    <button className="toggle-button" onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
    </button>
    {/* Navigation links */}
    <div className="nav-links">
        <NavLink to='/projects' onClick={toggleMenu}>Projects</NavLink>
        <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
        <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
    </div>
</div>
  )
}

export default Nav
