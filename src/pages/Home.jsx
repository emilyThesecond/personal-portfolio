import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
        <div className='name'>
        <p>Emily Segundo</p>
        {/* <p>EMILY SEGUNDO</p> */}
        <h3>SOFTWARE ENGINEER</h3>

        </div>
        <Link to='/contact'>
    <button className='back-button'>C O N T A C T</button>
    </Link>
     <Link to='/projects'>
    <button className='next-button'>P R O J E C T S</button>
    </Link>
    </div>
  )
}

export default Home
