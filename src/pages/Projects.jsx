import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='project-page'>
    <div className="projects-container">
      <h1 className='project-header'>P R O J E C T S</h1>
      <div className="project">
        <h1>75 Hard</h1>
        <h4>Coming soon</h4>
        {/* <a href="https://the-strokes-fan-page.vercel.app/" target="_blank" rel="noopener noreferrer"> */}
        {/* <button>live site</button> */}
        {/* </a> */}
        <a href="https://github.com/emilyThesecond/seventy-five-hard" target="_blank" rel="noopener noreferrer"><button>Gitub</button></a>
        <h3>Experience the ultimate fitness challenge with 75 Hard, the app that keeps you accountable on your wellness journey. Whether you're following the strict 5-rule program or customizing your goals with 75 Soft, journal daily to track your progress and stay committed to your goals. With features like customizable meal plans and progress photo uploads, achieving your fitness ambitions has never been easier. </h3>
        <h4>Technologies Used: Python | Django | SQL </h4>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fconstruction-butterscotch-vol-2%2F512%2FUnder_Construction_2-1024.png&f=1&nofb=1&ipt=76157be84897415ac5dfc92ef122f80d69f4c3c774bdf79f1dfb68ef42ea3793&ipo=images" alt="Under construction image" width = '200'/>
      </div>
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
        <a href="https://glaze-cookbook-587f2459d5c3.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button>Live site</button></a>
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
