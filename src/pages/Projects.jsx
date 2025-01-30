import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Fancybox from "../components/Fancybox";
import Project_1 from "../assets/image/layihe1.png";
import Project_2 from "../assets/image/layihe2.png";
import Project_3 from "../assets/image/layihe3.png";
import Project_4 from "../assets/image/layihe4.png";
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
                        <Fancybox
                          options={{
                            Carousel: {
                              infinite: true,
                            },
                          }}
                        >

                          <a data-fancybox="gallery" href={Project_1}>
                            <img src={Project_1} alt="Project 1" />
                          </a>
                          <a data-fancybox="gallery" href={Project_2} style={{ display: 'none' }}>
                            <img src={Project_2} alt="Project 2" />
                          </a>
                          <a data-fancybox="gallery" href={Project_3} style={{ display: 'none' }}>
                            <img src={Project_3} alt="Project 3" />
                          </a>
                          <a data-fancybox="gallery" href={Project_4} style={{ display: 'none' }}>
                            <img src={Project_4} alt="Project 4" />
                          </a>

                        </Fancybox>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
