import React, { useRef, useState } from 'react'

import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const nameField = form.current.elements["from_name"];
    const phoneField = form.current.elements["from_phone"];
    const emailField = form.current.elements["from_email"];
    const messageField = form.current.elements["message"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameField.value.trim()) {
      toast.error("Ad sahəsi boş ola bilməz!", { position: "top-right" });
      return;
    }


    if (!phoneField.value.trim()) {
      toast.error("Telefon nömrəsi boş ola bilməz!", { position: "top-right" });
      return;
    }


    if (!emailField.value.trim()) {
      toast.error("Email sahəsi boş ola bilməz!", { position: "top-right" });
      return;
    }
    if (!emailRegex.test(emailField.value.trim())) {
      toast.error("Zəhmət olmasa düzgün formatda bir email daxil edin!", {
        position: "top-right",
      });
      return; 
    }
  
    if (!messageField.value.trim()) {
      toast.error("Message sahəsi boş ola bilməz!", { position: "top-right" });
      return;
    }

    emailjs
      .sendForm(
        "service_8ge1ngz", // EmailJS-dən əldə etdiyiniz Service ID
        "template_noeaz3h", // EmailJS-dən əldə etdiyiniz Template ID
        form.current,
        "ZOtKpTuE6ux8d5mWw" // EmailJS-dən əldə etdiyiniz Public Key
      )
      .then(
        (result) => {
          toast.success("Mesaj uğurla göndərildi!");
        },
        (error) => {
          toast.error("Mesaj göndərilmədi! Xəta baş verdi.");
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="name-email">
              <input type="text" placeholder='Name' name="from_name" value={name} onChange={(e) => setName(e.target.value)} className='name' />
              <input type="text" placeholder='E-mail' name="from_email" value={email} onChange={(e) => setEmail(e.target.value)} className='email' />
            </div>
            <div className="telephone">
              <input type="text" placeholder='telephone' name="from_phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="message">
              <textarea name="message" placeholder='message...' required ></textarea>
            </div>
            <button type='submit' className='submit-btn'>Göndər</button>
          </form>
          <ToastContainer />
        </div>
        <div className="divider"></div>
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
            <Link to={"/"}><FaLinkedinIn className='contact-link-icon' /></Link>
            <Link to={"/"}><FaGithub className='contact-link-icon' /></Link>
            <Link to={"/"}><FaFacebookF className='contact-link-icon' /></Link>
            <Link to={"/"}><FaInstagram className='contact-link-icon' /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact