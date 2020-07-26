import React from 'react';
import {Link} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import HeaderNavForMain from "./HeaderNavForMain";
import HeaderNavForOthers from "./HeaderNavForOthers";

const HomeHeader = ({param}) => {
    return (
        <section className='home__header container-fluid'>
            <ul className='nav justify-content-end nav--first'>
                <li className='nav-item'>
                    <Link className='nav-link' to='/logowanie'>Zaloguj</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/rejestracja'>Załóż konto</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/wylogowano'>Wyloguj</Link>
                </li>
            </ul>
            {param === 'main' ? <HeaderNavForMain/> : <HeaderNavForOthers/>}
        </section>
    )
};

export default HomeHeader;