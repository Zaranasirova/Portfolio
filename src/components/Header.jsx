import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='header'>
            <div className="container header-wrapper d-flex">
                <Link className="head-logo-title">
                    <h1>Zarifa Nasirova</h1>
                </Link>
                <nav className='navigation'>
                    <ul className='navigation-list d-flex'>
                        <li className='navigation-item'><Link className='navigation-link'>Work experience</Link></li>
                        <li className='navigation-item'><Link className='navigation-link'>Education</Link></li>
                        <li className='navigation-item'><Link className='navigation-link'>Skills</Link></li>
                        <li className='navigation-item'><Link className='navigation-link'>Projects</Link></li>
                        <li className='navigation-item'><Link className='navigation-link'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header