import React from 'react';
import {Link} from "react-router-dom";

const HeaderNavbarForStranger = () => {

    return (
        <ul className='nav justify-content-end nav--first'>
            <li className='nav-item'>
                <Link className='nav-link' activeClassName='selected' to='/logowanie'>Zaloguj</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/rejestracja'>Załóż konto</Link>
            </li>
        </ul>
    )
};

export default HeaderNavbarForStranger;