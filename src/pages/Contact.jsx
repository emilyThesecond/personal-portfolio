import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact'>
      <header>Say Hey!</header>
      <h6>Interested in collaborating on a project? Looking to expand your network? Or perhaps you're simply exploring? Feel free to explore my social links or check out my resume for more information! Alternatively, you can use the contact form below to get in touch.</h6>
      <div className='socials'>
        <ContactForm />
        <h4></h4>
        <div className='social-logo'>
          <a href="https://github.com/emilyThesecond" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Gitub logo" />
            <span className="social-text">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/emily-segundo/" className="social-link">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn logo" />
            <span className="social-text">LinkedIn</span>
          </a>
          <a href="https://docs.google.com/document/d/1ETnFLbj0Fk8JADITdq33AoKebOjWf0IWy_5D7Wej5mI/edit?usp=sharing" className="social-link" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/14501/14501851.png" alt="Google Docs" />
            <span className="social-text">Resume</span>
          </a>
        </div>
      </div>
      <Link to='/about'>
        <button className='back-button'>A B O U T</button>
      </Link>
      <Link to='/'>
        <button className='next-button'>H O M E</button>
      </Link>
    </div>
  );
}

export default Contact;
