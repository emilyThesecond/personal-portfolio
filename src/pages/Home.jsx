import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='name'>
        <p>Emily Segundo</p>
        <h3>SOFTWARE ENGINEER</h3>
        {/* <h4>Technology:</h4> */}

      </div>
      <div className='buttons'>
        <Link to='/contact'>
          <button className='back-button'>CONTACT</button>
        </Link>
        <Link to='/projects'>
          <button className='next-button'>PROJECTS</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;