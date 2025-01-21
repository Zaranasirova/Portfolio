import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import project_1 from "../../src/assets/image/layihe1.png"


const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container projects-wrapper">
        <div className="projects-section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects-box-wrapper">

          <Swiper className="mySwiper">
            <SwiperSlide>
              <div className="swiper-box">
                <div className="left-side">
                  <div className="project-info">
                    <h2 className="project-number">01</h2>
                    <h3 className="project-name">Frontend Projects</h3>
                    <p className="project-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sint, illo ab recusandae autem voluptatem.</p>
                    <span>Html</span>
                  </div>
                  <div className="project-links">
                    <Link to={"/"}><GoArrowUpRight /></Link>
                    <Link to={"/"}><FaGithub /></Link>
                  </div>

                </div>
                <div className="right-side">
                  <div className="project-image">
                    <img src={project_1} alt="project_1" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-box">
                <div className="left-side">
                  <div className="project-info">
                    <h2 className="project-number">02</h2>
                    <h3 className="project-name">Frontend Projects</h3>
                    <p className="project-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sint, illo ab recusandae autem voluptatem.</p>
                    <span>Html</span>
                  </div>
                  <div className="project-links">
                    <Link to={"/"}><GoArrowUpRight /></Link>
                    <Link to={"/"}><FaGithub /></Link>
                  </div>

                </div>
                <div className="right-side">
                  <div className="project-image">
                    <img src={project_1} alt="project_1" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-box">
                <div className="left-side">
                  <div className="project-info">
                    <h2 className="project-number">03</h2>
                    <h3 className="project-name">Frontend Projects</h3>
                    <p className="project-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sint, illo ab recusandae autem voluptatem.</p>
                    <span>Html</span>
                  </div>
                  <div className="project-links">
                    <Link to={"/"}><GoArrowUpRight /></Link>
                    <Link to={"/"}><FaGithub /></Link>
                  </div>

                </div>
                <div className="right-side">
                  <div className="project-image">
                    <img src={project_1} alt="project_1" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </section>
  )
}

export default Projects