import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = 'service_tlwm6k8';
const templateId = 'template_dgjmfu7';
const userId = 'OpgOmsq6w1i0ZoMlZ';

export const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey: userId,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset the form after successful submission
          form.current.reset();
          // Show confirmation message
          setIsSubmitted(true);
          // Hide confirmation message after 2 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        <input placeholder='Enter Your Name' type="text" name="user_name" />
        {/* <label>Email</label> */}
        <input placeholder='Enter Your Email' type="email" name="user_email" />
        {/* <label>Message</label> */}
        <textarea placeholder='Enter Your message' name="message" />
        <button type="submit">Send</button>
      {isSubmitted && <h6>Message sent successfully!</h6>}
      </form>
    </div>
  );
};

export default ContactForm;