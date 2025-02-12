import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import Fancybox from "../components/Fancybox"; // Fancybox komponentini daxil et
import { Autoplay } from "swiper/modules";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-section-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-wrapper">
        <div className="projects-box-wrapper container">
          <Swiper
            className="mySwiper"
            modules={[Autoplay]}
            slidesPerView={1} // Sadəcə bir şəkil göstər
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
          >
            {projectsData.map((item, index) => (
              <SwiperSlide className="swiper" key={index}>
                <div className="swiper-box">
                  <div className="left-side-swiper">
                    <div className="project-info">
                      <h2 className="project-number">{item.number}</h2>
                      <h3 className="project-name">{item.title}</h3>
                      <div className="project-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="projects-skills">
                        <span>{item.skills}</span>
                      </div>
                    </div>
                    <div className="project-links">
                      <Link to={item.demo_link} target="_blank">
                        <GoArrowUpRight className="link" />
                      </Link>
                      <Link to={item.github_link} target="_blank">
                        <FaGithub className="link" />
                      </Link>
                    </div>
                  </div>
                  <div className="right-side-swiper">
                    <div className="project-image">
                      <Fancybox options={{ Carousel: { infinite: true } }}>
                        {item.image.map((imgSrc, imgIndex) => (
                          <a
                            key={imgIndex}
                            data-fancybox={`gallery-${index}`} // Hər layihənin öz qalereyası olacaq
                            href={imgSrc}
                            className="image-link"
                          >
                            {imgIndex === 0 && ( // Yalnız birinci şəkili göstər
                              <img src={imgSrc} alt={`Project ${index + 1}`} />
                            )}
                          </a>
                        ))}
                      </Fancybox>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
