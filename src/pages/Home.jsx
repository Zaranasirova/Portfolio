import React from 'react';
import cv_image from "../assets/image/cv_image.png";
import { Contact_data } from '../data';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Home = () => {

    return (
        <section className='home-section'>
            <div className="home-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <defs>
                        <filter id="kennedy-comp-isuax1ud" color-interpolation-filters="sRGB">
                            <feComponentTransfer result="srcRGB">
                                <feFuncR type="linear" slope="1.1" intercept="-0.05"></feFuncR>
                                <feFuncG type="linear" slope="1.1" intercept="-0.05"></feFuncG>
                                <feFuncB type="linear" slope="1.1" intercept="-0.05"></feFuncB>
                            </feComponentTransfer>
                            <feColorMatrix type="saturate" values="0"></feColorMatrix>
                            <feComponentTransfer>
                                <feFuncR type="linear" slope="0.9"></feFuncR>
                                <feFuncG type="linear" slope="0.9"></feFuncG>
                                <feFuncB type="linear" slope="0.9"></feFuncB>
                            </feComponentTransfer>
                        </filter>
                    </defs>
                </svg>
                <div className="bg-image">
                </div>
                <div className="contact-wrapper d-flex">
                    <div className="contact-image">
                        <div className='image'> <img src={cv_image} alt="cv-image" style={{ filter: "url(#kennedy-comp-isuax1ud)" }} /></div>
                    </div>
                    <div className="contact-info">
                        <div className="profile-box">
                            <h4 className='name'>Zarifa Nasirova</h4>
                            <h6 className='role'>Front-End Developer</h6>
                        </div>
                        <ul className='contact-box'>
                            {
                                Contact_data.map(item => (
                                    <li className='contact-list-item'><h6 className='type'>{item.type}</h6> <span className='value'>{item.value}</span></li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <div className="about-me-wrapper d-flex">
                <div className='social'>
                    <ul className='social-list'>
                        <li className='social-list-item'><Link to={"/"}><FaLinkedinIn className='social-icon' /></Link></li>
                        <li className='social-list-item'><Link to={"/"}><FaGithub className='social-icon' /></Link></li>
                        <li className='social-list-item'><Link to={"/"}><FaFacebookF className='social-icon' /></Link></li>
                        <li className='social-list-item'><Link to={"/"}><FaWhatsapp className='social-icon' /></Link></li>
                    </ul>
                </div>
                <div className="about-me">
                    <h4 className='about-me-head-title'>About me</h4>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quasi eum ratione consequatur accusantium sunt illo ab quae beatae! Architecto itaque officia error a voluptate.</p>
                </div>

            </div>
        </section>
    )
}

export default Home