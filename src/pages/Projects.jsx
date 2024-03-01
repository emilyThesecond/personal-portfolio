import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project-page'>
    <div className="projects-container">
      <h1 className='project-header'>P R O J E C T S</h1>
      <div className="project">
        <h1>The Strokes Fans</h1>
        <a href="https://the-strokes-fan-page.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button>live site</button>
        </a>
        <a href="https://github.com/emilyThesecond/the-strokes-client" target="_blank" rel="noopener noreferrer"><button>Gitub</button></a>
        <h3>Details: Welcome to the ultimate destination for all things related to The Strokes! 🎸🎶 Dive into the world of this iconic indie rock band and connect with fellow fans. Stay updated on the latest news, tour dates, music releases, and explore their extensive setlists from past performances. Let's celebrate the music and legacy of The Strokes together! This fan page is powered by a full stack MERN (MongoDB, Express.js, React.js, Node.js) application, providing a seamless and interactive experience for fans worldwide.</h3>
        <h4>Technologies Used: MongoDB, Express, React, Node.js</h4>
        <img src="https://i.imgur.com/ks0HzMr.png" alt="Project 1" />
      </div>
      <div className="project">
        <h1>Glaze Cookbook</h1>
        <a href="https://glaze-cookbook2-839a7d9cf08f.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Live site</button></a>
        <a href="https://github.com/emilyThesecond/glaze-cookbook" target="_blank" rel="noopener noreferrer"><button>Gitub</button></a>
        <h3>Details: A full-stack community application for pottery enthusiasts to share real-life experiences, insights on brands, colors, glaze combinations, and techniques, fostering collaboration and support among members.</h3>
        <h4>Technologies Used: MongoDB, Express, Node.js, JavaScript</h4>
        <img src="https://i.imgur.com/s0NrMV0.png" alt="Project 2" />
      </div>
      <div className="project">
        <h1>Habitualize</h1>
        <a href="https://habitualize-07273966efbf.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Live site</button></a>
        <a href="https://github.com/harmonica23/habitualize" target="_blank" rel="noopener noreferrer"><button>Gitub</button></a>
        <h3>Details: Habitualize is a Habit Tracker application that helps users build positive habits and break unwanted ones. It provides a user-friendly interface for tracking habits and setting goals. With Habitualize, users can login to their personal tracker, customize their habits and visualize their progress over time, watching their streaks grow as they build or break habits.</h3>
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
