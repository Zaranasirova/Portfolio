import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({ handleScroll, refs }) => {
    const { workRef, educationRef, skillsRef, projectsRef, contactRef } = refs;
    return (
        <header className='header'>
            <div className="container header-wrapper d-flex">
                <Link className="head-logo-title">
                    <h1>Zarifa Nasirova</h1>
                </Link>
                <nav className='navigation'>
                    <ul className='navigation-list d-flex'>
                        <li onClick={() => handleScroll(workRef)} className='navigation-item'><Link className='navigation-link'>Work experience</Link></li>
                        <li onClick={() => handleScroll(educationRef)} className='navigation-item'><Link className='navigation-link'>Education</Link></li>
                        <li onClick={() => handleScroll(skillsRef)} className='navigation-item'><Link className='navigation-link'>Skills</Link></li>
                        <li onClick={() => handleScroll(projectsRef)} className='navigation-item'><Link className='navigation-link'>Projects</Link></li>
                        <li onClick={() => handleScroll(contactRef)} className='navigation-item'><Link className='navigation-link'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header