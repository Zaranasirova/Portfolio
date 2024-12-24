import React from 'react';
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si"


const Skills = () => {
   const skills = [<FaReact />, <FaHtml5 />, <IoLogoCss3 />, <BsFiletypeScss />, <IoLogoJavascript />, <SiTypescript />, <SiRedux />]
  return (
    <section>
      <div className="container">
        <div className="skills-box">
          {
            skills.map(item => (
              <span className='icon'>{item}</span>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills