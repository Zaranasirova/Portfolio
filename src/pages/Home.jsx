import React, { forwardRef } from 'react';
import cv_image from "../assets/image/zara.png";
import { Contact_data } from '../data';
import { FaLinkedinIn, FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = forwardRef((props, ref) => {
    return (
        <section className='home-section' ref={ref}>
            <div className="home-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <defs>
                        <filter id="kennedy-comp-isuax1ud" colorInterpolationFilters="sRGB">
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
                <div className="bg-image"></div>
                <div className="contact-wrapper">
                    <div className="contact-image">
                        <div className='image'>
                            <img src={cv_image} alt="cv-image" style={{ filter: "url(#kennedy-comp-isuax1ud)" }} />
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="profile-box">
                            <h4 className='name'>Zarifa Nasirova</h4>
                            <h6 className='role'>Front-End Developer</h6>
                        </div>
                        <ul className='contact-box'>
                            {Contact_data.map((item, index) => (
                                <li className='contact-list-item' key={index}>
                                    <h6 className='type'>{item.type}</h6>
                                    <span className='value'>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-me-wrapper d-flex">
                <div className='social'>
                    <ul className='social-list'>
                        <li className='social-list-item'>
                            <Link to="https://www.linkedin.com/in/z%C9%99rif%C9%99-n%C9%99sirova-34a551309/" target="_blank">
                                <FaLinkedinIn className='social-icon' />
                            </Link>
                        </li>
                        <li className='social-list-item'>
                            <Link to="https://github.com/Zaranasirova" target="_blank">
                                <FaGithub className='social-icon' />
                            </Link>
                        </li>
                        <li className='social-list-item'>
                            <Link to="https://www.facebook.com/profile.php?id=61564042628039" target="_blank">
                                <FaFacebookF className='social-icon' />
                            </Link>
                        </li>
                        <li className='social-list-item'>
                            <Link to="https://wa.me/994517375883" target="_blank">
                                <FaWhatsapp className='social-icon' />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="about-me">
                    <h2 className='about-me-head-title'>About me</h2>
                    <p className='text'>

                        I’m Zərifə Nəsirova, a professional Frontend Developer in the field of web application development. I am focused on creating modern and functional web applications with a strong emphasis on user experience. In the projects I develop, I strive to ensure high quality and performance
                    </p>
                </div>
            </div>
        </section>
    );
});

export default Home;
