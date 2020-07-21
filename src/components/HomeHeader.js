import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll } from "react-scroll";

const HomeHeader = () => {

    return (
        <section className='home__header container-fluid'>
            <ul className='nav justify-content-end nav--first'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/logowanie'>Zaloguj</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/rejestracja'>Załóż konto</Link>
                </li>
            </ul>
            <ul className='nav justify-content-end nav--second'>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeHero" spy={true} smooth={true} offset={0} duration={500} className='nav-link' >Start</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="SeparatorFour" spy={true} smooth={true} offset={2} duration={500}className='nav-link' >O co chodzi?</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeAboutUs" spy={true} smooth={true} offset={1} duration={500}className='nav-link' >O nas</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="SeparatorOptions" spy={true} smooth={true} offset={1} duration={500}className='nav-link' >Fundacja i organizacje</LinkScroll>
                </li>
                <li className='nav-item'>
                    <LinkScroll activeClass='active' to="HomeContactUs" spy={true} smooth={true} offset={0} duration={500}className='nav-link' >Kontakt</LinkScroll>
                </li>
            </ul>
        </section>
    )
};

export default HomeHeader;