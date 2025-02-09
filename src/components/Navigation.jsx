import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";



const Navigation = ({ handleScroll, refs,navbar,navlist }) => {
     const { workRef, educationRef, skillsRef, projectsRef, contactRef } = refs;
    return (
        <nav className={navbar}>
            <ul className={navlist}>
                <li onClick={() => handleScroll(workRef)} className='navigation-item'><Link to={"/"} className='navigation-link'>Work experience</Link></li>
                <li onClick={() => handleScroll(educationRef)} className='navigation-item'><Link to={"/"} className='navigation-link'>Education</Link></li>
                <li onClick={() => handleScroll(skillsRef)} className='navigation-item'><Link to={"/"} className='navigation-link'>Skills</Link></li>
                <li onClick={() => handleScroll(projectsRef)} className='navigation-item'><Link to={"/"} className='navigation-link'>Projects</Link></li>
                <li onClick={() => handleScroll(contactRef)} className='navigation-item'><Link to={"/"} className='navigation-link'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation