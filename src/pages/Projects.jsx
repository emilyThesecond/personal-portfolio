import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project-page'>
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project">
        <h1>The Strokes Fans</h1>
        <a href="https://the-strokes-fan-page.vercel.app/">live site</a>
        <a href="https://github.com/emilyThesecond/the-strokes-client">Github</a>
        <h3>Details</h3>
        <h4>Technologies Used: MongoDB, Express, React, Node.js</h4>
        <img src="https://i.imgur.com/ks0HzMr.png" alt="Project 1" />
      </div>
      <div className="project">
        <h1>Glaze Cookbook</h1>
        <a href=""></a>
        <a href="https://github.com/emilyThesecond/glaze-cookbook">Github</a>
        <h3>Details</h3>
        <h4>Technologies Used: MongoDB, Express, Node.js, JavaScript</h4>
        <img src="https://i.imgur.com/s0NrMV0.png" alt="Project 2" />
      </div>
      <div className="project">
        <h1>Habitualize</h1>
        <a href="https://habitualize-07273966efbf.herokuapp.com/">Live Site</a>
        <a href="https://github.com/harmonica23/habitualize">Github</a>
        <h3>Details</h3>
        <h4>Technologies Used: Python, Django, PostgreSQL</h4>
        <img src="https://i.imgur.com/86E64Nb.png" alt="Project 3" />
      </div>
    </div>
    <Link to='/'>
    <button className='back-button'>H O M E</button>
    </Link>
    <Link to='/about'>
    <button className='next-button'>ABOUT</button>
    </Link>
    </div>
  );
};

export default Projects;
