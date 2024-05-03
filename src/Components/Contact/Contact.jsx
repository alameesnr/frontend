import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out rhrough contact form or find our contact
                information below. Your feedback, questions, and suggestions are important to us as we strive to provide
                exceptional service to our university community.
            </p>
          <ul>
            <li> <img src={mail_icon} alt="" /> alameensnr@gmail.com</li>
            <li> <img src={phone_icon} alt="" /> +2348136899907</li>
            <li> <img src={location_icon} alt="" /> Abuja, Nigeria</li>
            
        </ul>  

        </div>

    </div>
  )
}

export default Contact