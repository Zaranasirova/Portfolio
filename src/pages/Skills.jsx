import React, { useEffect, useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { SiTypescript, SiRedux } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";

const SkillsSection = () => {
  const skills = [
    <FaHtml5 className="icon" />,
    <IoLogoCss3 className="icon" />,
    <BsFiletypeScss className="icon" />,
    <IoLogoJavascript className="icon" />,
    <SiTypescript className="icon" />,
    <FaReact className="icon" />,
    <SiRedux className="icon" />,
    <FaGithub className="icon" />,
  ];

  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 } // 20% göründükdə animasiya başlasın
    );

    const skillElements = skillsRef.current.querySelectorAll(".skill-icon");
    skillElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-container">
      <div className="skills-head-title">
       <h2>skills</h2>
       </div>
      <div className="container skill-wrapper">
        <div className="skills-box" ref={skillsRef}>
          {skills.map((item, index) => (
            <span
              className="skill-icon"
              key={index}
              style={{ "--delay": index }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
