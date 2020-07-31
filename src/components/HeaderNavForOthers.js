import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";

const HeaderNavForOthers = () => {
    return (
        <>
            <ul className='nav justify-content-end nav--second'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        Start
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        O co chodzi?
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        O nas
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        Fundacja i organizacje
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>
                        Kontakt
                    </Link>
                </li>
            </ul>
            <nav className="navbar navbar-light light-blue lighten-4 nav--burger">
                <a className="navbar-brand" href="/"></a>
                <button className="navbar-toggler toggler-example page-nav-burger" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="dark-blue-text">
                            <i className="fas fa-bars fa-1x"></i>
                        </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="HomeHero" spy={true} smooth={true} offset={0}
                                        duration={500} className='nav-link'>
                                Start
                            </LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="SeparatorFour" spy={true} smooth={true} offset={2}
                                        duration={500} className='nav-link'>
                                O co chodzi?
                            </LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="HomeAboutUs" spy={true} smooth={true} offset={1}
                                        duration={500} className='nav-link'>
                                O nas
                            </LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="SeparatorOptions" spy={true} smooth={true} offset={1}
                                        duration={500} className='nav-link'>
                                Fundacja i organizacje
                            </LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="HomeContactUs" spy={true} smooth={true} offset={40}
                                        duration={500} className='nav-link'>
                                Kontakt
                            </LinkScroll>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default HeaderNavForOthers;