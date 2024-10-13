<<<<<<< HEAD
import React, { useState } from 'react';
import logoMedium from '../assets/MediumLogo.png';
import logo from '../assets/Logo 1.svg';
import '../css/Hero.css';
import '../css/Header.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Function to handle the click event for toggling dropdowns
    const toggleDropdown = (dropdown) => {
        setDropdownOpen(dropdownOpen === dropdown ? null : dropdown); // Toggle the dropdown
    };

=======
import logo from '../assets/Logo.svg'; // Import your logo image
import '../css/Hero.css'; // Import CSS
import { Link } from 'react-router-dom';

const Hero = () => {
>>>>>>> 5626796 (new commit)
    return (
        <section className="main-page">
            <div className="navbarHero w-nav">
                <div className="container-navigation">
                    <div className="navigation-left">
<<<<<<< HEAD
                        <a href="/" className="brand w-nav-brand w--current">
=======
                        <a href="/index.html" className="brand w-nav-brand w--current">
>>>>>>> 5626796 (new commit)
                            <img
                                width="49"
                                loading="lazy"
                                alt="logo"
<<<<<<< HEAD
                                src={logoMedium}
=======
                                src={logo}
>>>>>>> 5626796 (new commit)
                                className="logo-2"
                            />
                        </a>
                    </div>
                    <div className="navigation-middle">
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <a href="/" className="nav-link w-nav-link">Početna</a>
                            <a href="/novosti" className="nav-link w-nav-link">Novosti</a>
<<<<<<< HEAD


                            <div
                                className={`nav-link w-nav-link ${dropdownOpen === 'prvi-tim' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('prvi-tim')}
                                onMouseEnter={() => setDropdownOpen('prvi-tim')}
                                onMouseLeave={() => setDropdownOpen(null)}
                            >
                                Prvi tim <FontAwesomeIcon icon={faCaretDown}/>
                                <ul className={`dropdown-menu ${dropdownOpen === 'prvi-tim' ? 'show' : ''}`}>
                                    <li><a href="/seniorke" className="dropdown-item">Seniorke</a></li>
                                    <li><a href="/seniori" className="dropdown-item">Seniori</a></li>
                                    <li><a href="/strucnistab" className="dropdown-item">Stručni štab</a></li>
                                </ul>
                            </div>

                            <div
                                className={`nav-link w-nav-link ${dropdownOpen === 'raspored' ? 'active' : ''}`}
                                onClick={() => toggleDropdown('raspored')}
                                onMouseEnter={() => setDropdownOpen('raspored')}
                                onMouseLeave={() => setDropdownOpen(null)}
                            >
                                Raspored <FontAwesomeIcon icon={faCaretDown}/>
                                <ul className={`dropdown-menu ${dropdownOpen === 'raspored' ? 'show' : ''}`}>
                                    <li><a href="/seniorke-raspored" className="dropdown-item">Seniorke A1</a></li>
                                    <li><a href="/seniori-raspored" className="dropdown-item">Seniori A1</a></li>
                                </ul>
                            </div>

                            <a href="/historija" className="nav-link w-nav-link">Klub</a>
                            <a href="/clanske-karte" className="nav-link w-nav-link">Članske kartice</a>
=======
                            <a href="/tim" className="nav-link w-nav-link">Tim</a>
                            <a href="/raspored" className="nav-link w-nav-link">Raspored</a>
                            <a href="/historija" className="nav-link w-nav-link">Klub</a>
                            <a href="/" className="nav-link w-nav-link">Članske kartice</a>
>>>>>>> 5626796 (new commit)
                        </nav>
                    </div>
                    <div className="navigation-right">
                        <div className="navigation-button-wrap">
<<<<<<< HEAD
                            <a href="/kontakt" className="nav-link w-nav-link">Kontakt</a>
=======
                            <a href="/index.html" className="nav-link w-nav-link">Kontakt</a>
>>>>>>> 5626796 (new commit)
                        </div>
                        <div className="menu-button w-nav-button">
                            <div className="w-icon-nav-menu"></div>
                        </div>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
            <div id="Home" className="main">
                <div className="columns w-row">
                    <div className="text-column w-col w-col-7">
                        <h1 className="main-heading">KK Željezničar</h1>
                        <p className="main-subtitle">103 godine uspješnog rada. To je moj tim!</p>
                    </div>
                    <div className="image-column w-col w-col-5">
                        <img width="362" src={logo} alt="Logo" className="main-image"/>
                    </div>
                </div>
            </div>
            <div className="triangles">
                <div id="triangles1" className="triangle triangle2"></div>
                <div id="triangles2" className="triangle"></div>
            </div>

        </section>
    );

   /* return(
        <section className="main-page">
            <div id="Home" className="main">
                <div className="columns w-row">
                    <div className="text-column w-col w-col-7">
                        <h1 className="main-heading">KK Željezničar</h1>
                        <p className="main-subtitle">103 godine uspješnog rada. To je moj tim!</p>
                    </div>
                    <div className="image-column w-col w-col-5">
                        <img width="362" src={logo} alt="Logo" className="main-image"/>
                    </div>
                </div>
            </div>
            <div className="triangles">
                <div id="triangles1" className="triangle triangle2"></div>
                <div id="triangles2" className="triangle"></div>
            </div>

        </section>
    );*/
=======
    <div id="Home" className="main">
        <div className="columns w-row">
            <div className="text-column w-col w-col-7">
                <h1 className="main-heading">KK Željezničar</h1>
                <p className="main-subtitle">103 godine uspješnog rada. To je moj tim!</p>
            </div>
            <div className="image-column w-col w-col-5">
                <img width="362" src={logo} alt="Logo" className="main-image"/>
            </div>
        </div>
    </div>
        <div className="triangles">
            <div id="triangles1" className="triangle triangle2"></div>
            <div id="triangles2" className="triangle"></div>
        </div>

        </section>
    );
>>>>>>> 5626796 (new commit)
};

export default Hero;
