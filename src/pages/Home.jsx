import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='name'>
        <h1>Emily Segundo</h1>
        <h3>software engineer
        </h3>
        </div>
     <Link to='/projects'>
    <button className='next-button'>P R O J E C T S</button>
    </Link>
    </div>
  )
}

export default Home
