import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {auth} from "../firebase/firebase.config";

const HeaderNavbarForLogged = () => {
    const [user, setUser] = useState('');

    useEffect( () => {
        setUser(auth().currentUser.email)
    },[]);

    return (
        <ul className='nav justify-content-end nav--first'>
            <li className='nav-item'>
                <div className='nav-link' >Cześć {user}</div>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/oddaj-rzeczy' activeClassName='selected'>Oddaj rzeczy</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/wylogowano'
                      onClick={ () => auth().signOut() } >
                    Wyloguj
                </Link>
            </li>
        </ul>
    )
};

export default HeaderNavbarForLogged;