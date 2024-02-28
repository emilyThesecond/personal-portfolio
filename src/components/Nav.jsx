import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        {/* <NavLink to='/'>Home</NavLink> */}
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Nav
