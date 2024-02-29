import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <h1>Emily Segundo</h1>
      <h3>software engineer
      </h3>
      <div>
        <Link>Projects</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        </div>

            
    </div>
  )
}

export default Home
