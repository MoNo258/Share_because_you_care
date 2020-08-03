import React, {useEffect, useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {auth} from "../firebase/firebase.config";

const HeaderNavbarForForm = () => {
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
                {/*<Link className='nav-link' to='/' >Strona główna</Link>*/}
                <Link className='nav-link' to='/#HomeHero' >Strona główna</Link>
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

export default HeaderNavbarForForm;