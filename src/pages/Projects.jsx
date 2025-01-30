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

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-section-title">
        <h5>Projects</h5>
      </div>
      <div className="projects-wrapper">
        <div className="projects-box-wrapper container">
          <Swiper className="mySwiper">
            <SwiperSlide className="swiper">
              <div className="swiper-box">
                <div className="left-side-swiper">
                  <div className="project-info">
                    <h2 className="project-number">01</h2>
                    <h3 className="project-name">Frontend Projects</h3>
                    <p className="project-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sint, illo ab recusandae autem voluptatem.
                    </p>
                    <span>Html</span>
                  </div>
                  <div className="project-links">
                    <Link to={"/"}><GoArrowUpRight /></Link>
                    <Link to={"/"}><FaGithub /></Link>
                  </div>
                </div>
                <div className="right-side-swiper">
                  <div className="project-image">
                    <Fancybox
                      options={{
                        Carousel: {
                          infinite: true, // Infinite scroll between images
                        },
                      }}
                    >
                      {/* Initially display only one image */}
                      <a data-fancybox="gallery"  href={Project_1}>
                        <img src={Project_1} width="200" height="150" alt="Project 1" />
                      </a>
                      {/* All images are part of the same gallery */}
                      <a data-fancybox="gallery" href={Project_2} style={{ display: 'none' }}>
                        <img src={Project_2} width="200" height="150" alt="Project 2" />
                      </a>
                      <a data-fancybox="gallery" href={Project_3}  style={{ display: 'none' }}>
                        <img src={Project_3} width="200" height="150" alt="Project 3" />
                      </a>
                      <a data-fancybox="gallery" href={Project_4} style={{ display: 'none' }}>
                        <img src={Project_4} width="200" height="150" alt="Project 4" />
                      </a>
      
                    </Fancybox>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
