import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 const serviceId = 'service_tlwm6k8'
const templateId = 'template_dgjmfu7'
const userId = 'OpgOmsq6w1i0ZoMlZ'

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId, 
        templateId, 
        form.current, {
        publicKey: userId,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
 

export default ContactForm
