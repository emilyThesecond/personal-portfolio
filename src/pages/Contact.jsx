import React from 'react'
import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
      <header>Say Hey!</header>
      <div>
        <h1>Socials</h1>
        <h4></h4>
        <a href="https://docs.google.com/document/d/1ETnFLbj0Fk8JADITdq33AoKebOjWf0IWy_5D7Wej5mI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button>Resume</button>
        </a>
        <ContactForm/>
        <Link to='/projects'>
    <button className='back-button'>P R O J E C T S</button>
    </Link>
      </div>
    </div>
  )
}

export default Contact
