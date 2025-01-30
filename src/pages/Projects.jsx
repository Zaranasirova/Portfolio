import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Fancybox from "../components/Fancybox";

import { projectsData } from "../data";


const Projects = () => {





  return (
    <section className="projects-section">
      <div className="projects-section-title">
        <h5>Projects</h5>
      </div>
      <div className="projects-wrapper">
        <div className="projects-box-wrapper container">
          <Swiper className="mySwiper">
            {
              projectsData.map((item, index) => (
                <SwiperSlide className="swiper" key={index}>
                  <div className="swiper-box">
                    <div className="left-side-swiper">
                      <div className="project-info">
                        <h2 className="project-number">{item.id}</h2>
                        <h3 className="project-name">{item.title}</h3>


                        <p className="project-text">{item.text}</p>
                        <span>{item.skills}</span>

                      </div>
                      <div className="project-links">
                        <Link to={item.demo_link} target="_blank"><GoArrowUpRight /></Link>
                        <Link to={item.github_link} target="_blank"><FaGithub /></Link>
                      </div>
                    </div>
                    <div className="right-side-swiper">
                      <div className="project-image">
                        {
                          item.image.map((item, index) => (
                            <Fancybox
                              key={index}
                            options = {{
                            Carousel: {
                              infinite: true,
                            },

                          }}
                            >
                        <a data-fancybox="gallery" href={item.image1}>
                          <img src={item.image1} alt="Project 1" />
                        </a>
                        <a data-fancybox="gallery" href={item.image2} style={{ display: 'none' }}>
                          <img src={item.image2} alt="Project 2" />
                        </a>
                        <a data-fancybox="gallery" href={item.image3} style={{ display: 'none' }}>
                          <img src={item.image3} alt="Project 3" />
                        </a>
                        <a data-fancybox="gallery" href={item.image4} style={{ display: 'none' }}>
                          <img src={item.image4} alt="Project 4" />
                        </a>

                      </Fancybox>
                      ))
                        }

                    </div>
                  </div>
                </div>
                </SwiperSlide>
          ))
            }
        </Swiper>
      </div>
    </div>
    </section >
  );
};

export default Projects;
