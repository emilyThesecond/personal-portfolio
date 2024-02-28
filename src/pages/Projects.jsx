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
    <Link to='/contact'>
      <button class="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">C O N T A C T </span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>
      </Link>

    </div>
  );
};

export default Projects;
