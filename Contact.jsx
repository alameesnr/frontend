import React from 'react';
import './Contact.css';
import { useForm } from '@formspree/react';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  
  function ContactForm() {
    const [state, handleSubmitForm] = useForm("xoqgrkgn");
    if (state.succeeded) {
        return <p>Form Submitted Successfully</p>;
    } else {
        // You need to return some JSX here for the form to render
        return (
            <form onSubmit={handleSubmitForm}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label> Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile' required/>
                <label> Write your message here </label>
                <textarea name='message' id='' rows="10" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now <img src={white_arrow} alt="" /></button>
            </form>
        );
    }
  } 
  
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, questions, and suggestions are important to us as we strive to provide
                exceptional service to our university community.
            </p>
          <ul>
            <li> <img src={mail_icon} alt="" /> alameensnr@gmail.com</li>
            <li> <img src={phone_icon} alt="" /> +2348136899907</li>
            <li> <img src={location_icon} alt="" /> Abuja, Nigeria</li>
        </ul>  
        </div>
        <div className='contact-col'>
            <ContactForm />
            <span></span>
        </div>
    </div>
  );
}

export default Contact;
