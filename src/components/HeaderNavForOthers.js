import React from 'react';
import {Link} from "react-router-dom";

const HeaderNavForOthers = () => {
    return (
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
    )
};

export default HeaderNavForOthers;