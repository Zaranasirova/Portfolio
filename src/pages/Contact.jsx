import React, { useRef } from 'react'

import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ge1ngz", // EmailJS-dən əldə etdiyiniz Service ID
        "template_noeaz3h", // EmailJS-dən əldə etdiyiniz Template ID
        form.current,
        "ZOtKpTuE6ux8d5mWw" // EmailJS-dən əldə etdiyiniz Public Key
      )
      .then(
        (result) => {
          alert("Mesaj uğurla göndərildi!");
        },
        (error) => {
          alert("Mesaj göndərilmədi! Xəta baş verdi.");
        }
      );
  };
  return (
   <section className='contact-section'>
  <div className="contact-head">
  <h5 className="contact-head-title">Contact</h5>
  </div>
  <div className="contact-wrapper container">
<div className="contact-form">
<form>
  <div className="name-email">
  <input type="text" placeholder='Name'  className='name'/>
  <input type="text" placeholder='E-mail' className='email' />
  </div>
  <div className="telephone">
    <input type="text" placeholder='telephone' />
  </div>
  <div className="message">
    <textarea name="message" placeholder='message...' required ></textarea>
  </div>
  <button type='submit' className='submit-btn'>Göndər</button>
</form>
</div>
<div className="contact-info">
<div className="consultant-contact-info">
<div className="frontend-consultant-info">
  <h2>Zərifə Nəsirova</h2>
  <p>Frontend Developer</p>
</div>
<div className="contact-phone">
  <h6>Telephone:</h6>
  <Link to={"tel:+994517375883"}> +994 51 737 58 83</Link>
</div>
<div className="contact-email">
  <h6>E-mail</h6>
  <Link to={"mailto:Zerifenesirova784@gamil.com"} >Zerifenesirova784@gamil.com</Link>
</div>
</div>
<div className="social-links">
<Link to={"/"}><FaLinkedinIn /></Link>
<Link to={"/"}><FaGithub /></Link>
<Link to={"/"}><FaFacebookF /></Link>
<Link to={"/"}><FaInstagram /></Link>

</div>
</div>
  </div>
   </section>
  )
}

export default Contact