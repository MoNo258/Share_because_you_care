import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll } from "react-scroll";


const HomeHeader = () => {

    return (
        <section className='home__header'>
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/logowanie'>Zaloguj</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/rejestracja'>Załóż konto</Link>
                </li>
            </ul>
            <ul className='nav justify-content-end'>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeHero" spy={true} smooth={true} offset={0} duration={500}>Start</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeThreeColumns" spy={true} smooth={true} offset={0} duration={500}>O co chodzi?</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeAboutUs" spy={true} smooth={true} offset={0} duration={500}>O nas</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeOptions" spy={true} smooth={true} offset={0} duration={500}>Fundacja i organizacje</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeContactUs" spy={true} smooth={true} offset={0} duration={500}>Kontakt</LinkScroll>
                </li>
            </ul>
        </section>
    )
};


export default HomeHeader;