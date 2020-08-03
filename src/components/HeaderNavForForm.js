import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from "classnames";
import {Link as LinkScroll} from "react-scroll";

const HeaderNavForForm = () => {
    const [burgerOpen, setBurgerOpen] = useState(true);

    const handleBurgerClick = () => {
        setBurgerOpen(!burgerOpen);
        setTimeout(() => {
            setBurgerOpen(true);
        },3000);
    };

    return (
        <>
            <ul className='nav justify-content-end nav--second'>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="FormHero" spy={true} smooth={true} offset={40}
                                duration={500} className='nav-link'>
                        Start
                    </LinkScroll>
                </li>
                <li className='nav-item'>
                    <Link to="/#SeparatorFour" className='nav-link'>
                        O co chodzi?
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/#HomeAboutUs" className='nav-link'>
                        O nas
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/#SeparatorOptions" className='nav-link'>
                        Fundacja i organizacje
                    </Link>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeContactUs" spy={true} smooth={true} offset={40}
                                duration={500} className='nav-link'>
                        Kontakt
                    </LinkScroll>
                </li>
            </ul>
            <nav className="navbar navbar-light light-blue lighten-4 nav--burger">
                <button className="navbar-toggler toggler-example page-nav-burger" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleBurgerClick}>
                        <span className="dark-blue-text">
                            <i className="fas fa-bars fa-1x"></i>
                        </span>
                </button>
                <div className={classNames('navbar-collapse',{'collapse': burgerOpen})}
                     id="navbarSupportedContent1">
                    <ul className="navbar-nav mr-auto" >
                        <li className='nav-item'>
                            <LinkScroll activeClass='active' to="FormHero" spy={true} smooth={true} offset={40}
                                        duration={500} className='nav-link'>
                                Start
                            </LinkScroll>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#SeparatorFour" className='nav-link'>
                                O co chodzi?
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#HomeAboutUs" className='nav-link'>
                                O nas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/#SeparatorOptions" className='nav-link'>
                                Fundacja i organizacje
                            </Link>
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

export default HeaderNavForForm;