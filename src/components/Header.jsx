import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import Navigation from './Navigation';
import { IoMdClose } from "react-icons/io";

const Header = ({ handleScroll, refs }) => {
    const { workRef, educationRef, skillsRef, projectsRef, contactRef } = refs;
    const [menuToggle, setMenuToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 920) {
                setMenuToggle(false);
            } else {
                setMenuToggle(true);
                setIsOpen(false); // Ekran geniş olduqda menyunu bağla
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openMenuBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container header-wrapper d-flex">
                <Link className="head-logo-title">
                    <h1>Zarifa Nasirova</h1>
                </Link>
                {menuToggle ? (
                    <Navigation
                        handleScroll={handleScroll}
                        refs={refs}
                        navbar={"navigation"}
                        navlist={"navigation-list"}
                    />
                ) : (
                    <div className="burger-menu-wrapper" onClick={openMenuBar}>
                        {isOpen ? (
                            <div className='burger-menu'><IoMdClose className="menu-icon" /></div>
                        ) : (
                           <div className="burger-menu"><RxHamburgerMenu className='menu-icon' /></div> 
                        )}
                        {isOpen && (
                            <Navigation
                                handleScroll={handleScroll}
                                refs={refs}
                                navbar={"responsive-navigation active"}
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
