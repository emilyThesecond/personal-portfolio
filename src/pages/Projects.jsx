import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project">
        <h1>The Strokes Fans</h1>
        <h3>Details</h3>
        <h4>Technologies Used: MongoDB, Express, React, Node.js</h4>
        <img src="https://i.imgur.com/ks0HzMr.png" alt="Project 1" />
      </div>
      <div className="project">
        <h1>Glaze Cookbook</h1>
        <h3>Details</h3>
        <h4>Technologies Used: MongoDB, Express, Node.js, JavaScript</h4>
        <img src="https://i.imgur.com/s0NrMV0.png" alt="Project 2" />
      </div>
      <div className="project">
        <h1>Habitualize</h1>
        <h3>Details</h3>
        <h4>Technologies Used: Python, Django, PostgreSQL</h4>
        <img src="https://i.imgur.com/86E64Nb.png" alt="Project 3" />
      </div>
    </div>
  );
};

export default Projects;
