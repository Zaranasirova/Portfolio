import React from 'react';
import img from "../assets/image/developer.jpg";
import cv_image from "../assets/image/cv_image.png"

const Home = () => {
    return (
        <section className='home-section'>
            <div className="bg-image">

            </div>
            <div className="contact-wrapper">
                <div className="contact-image">
                    <img src={cv_image} alt="" />
                </div>
                <div className="contact-info">
                    
                </div>
            </div>
        </section>
    )
}

export default Home