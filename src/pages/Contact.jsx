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
        <ContactForm/>
        <Link to='/projects'>
    <button className='back-button'>P R O J E C T S</button>
    </Link>
      </div>
    </div>
  )
}

export default Contact
