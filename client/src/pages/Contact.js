import React from "react";
import "../style/ContactForm.css";
import call from '../Assets/call.png';
import mail from '../Assets/mail.png';
import loaction from '../Assets/maps-and-flags.png';

const Contact = () => {
  return (
   <>
      <div className="getintouch">
        <h5>Get in Touch</h5>
        <h1>We're Here to Help</h1>
        <p>Connect with us for any inquires or support .Your education journey start here!</p>

        <div className="container_one" >
          {/* Email  */}
        <div className=" contact-box email">
          <img src={mail} alt="emailImage" className="contact-icon" /> 
          <h1>Email us</h1>
          <p>For any questions or support, please reach out via email at <span>
          <a> support@zagerpublicschool.com.</a>
            </span>
          We look forward to assisting you!</p>
        </div>

        <div className=" contact-box Callus">
          <img src={call} alt="callImage"  className="contact-icon" /> 
          <h1>Call us </h1>
          <p>Need immediate assistance? Call us at <span>+1 (555) 123-4567.
            </span>
          Our team is ready to help!</p>
        </div>

        <div className="contact-box Vist US">
          <img src={loaction} alt="locationImage" className="contact-icon" /> 
          <h1>Vist us</h1>
          <p>Find us at <span> 123 Education Lane, Springfield, IL 62701.</span>
          We welcome you to our campus!</p>
        </div>
        </div>

      </div>
       <div className="contact-container">
      <div className="contact-info">
        <h1>Get in Touch</h1>
        <p>We are here to assist you with any questions or support you may need.</p>
        <div className="contact-details">
          <p>📧 Email: support@zagerpublicschool.com</p>
          <p>📞 Phone: +1 (555) 123-4567</p>
          <p>📍 Address: 123 Education Lane, Springfield, IL 62701</p>
        </div>
      </div>
      <div className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Type your message"></textarea>

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I accept the Terms</label>
        </div>

        <button type="submit">Submit</button>
      </div>
    </div>
    </>
  );
};

export default Contact;
