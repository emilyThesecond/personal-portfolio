import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
    </div>
  )
}

export default Nav
