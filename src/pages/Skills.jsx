import React from 'react';
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Skills = () => {
   const skills = [ <FaHtml5 className='icon' />, <IoLogoCss3 className='icon' />, <BsFiletypeScss className='icon' />, <IoLogoJavascript className='icon' />, <SiTypescript className='icon' />,<FaReact className='icon'/>, <SiRedux className='icon' />,<FaGithub className='icon'/>]
  return (
    <section className='skills-container'>
      <div className="container skill-wrapper">
        <h2 className='skills-head-title'>Skills</h2>
        <div className="skills-box">
          {
            skills.map((item,index) => (
              <span className='skill-icon' key={index}>{item}</span>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills