import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";



const Navigation = ({ handleScroll, refs,navbar,navlist,navitem }) => {
     const { workRef, educationRef, skillsRef, projectsRef, contactRef } = refs;
    return (
        <nav className={navbar}>
            <ul className={navlist}>
                <li onClick={() => handleScroll(workRef)} className={navitem}><Link to={"/"} className='navigation-link'>Work experience</Link></li>
                <li onClick={() => handleScroll(educationRef)} className={navitem}><Link to={"/"} className='navigation-link'>Education</Link></li>
                <li onClick={() => handleScroll(skillsRef)} className={navitem}><Link to={"/"} className='navigation-link'>Skills</Link></li>
                <li onClick={() => handleScroll(projectsRef)} className={navitem}><Link to={"/"} className='navigation-link'>Projects</Link></li>
                <li onClick={() => handleScroll(contactRef)} className={navitem}><Link to={"/"} className='navigation-link'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation