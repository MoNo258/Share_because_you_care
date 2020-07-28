import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Link as LinkScroll} from "react-scroll";
import HeaderNavForMain from "./HeaderNavForMain";
import HeaderNavForOthers from "./HeaderNavForOthers";
import {auth} from "firebase";
import HeaderNavbarForStranger from "./HeaderNavbarForStranger";
import HeaderNavbarForLogged from "./HeaderNavbarForLogged";

const HomeHeader = ({param}) => {
    return (
        <section className='home__header container-fluid'>
            {/*    <ul className='nav justify-content-end nav--first'>*/}
            {/*    <li className='nav-item'>*/}
            {/*        <Link className='nav-link' activeClassName='selected' to='/logowanie'>Zaloguj</Link>*/}
            {/*    </li>*/}
            {/*    <li className='nav-item'>*/}
            {/*        <Link className='nav-link' to='/rejestracja'>Załóż konto</Link>*/}
            {/*    </li>*/}
            {/*    <li className='nav-item'>*/}
            {/*        <Link className='nav-link' to='/wylogowano'*/}
            {/*              onClick={() => auth().signOut()}>*/}
            {/*            Wyloguj*/}
            {/*        </Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            {param === 'main'
                ?
                <HeaderNavbarForStranger />
                :
                param === 'others'
                    ?
                    <HeaderNavbarForStranger />
                    :
                    param === 'logged'
                        ?
                        <HeaderNavbarForLogged />
                        : null
            }


            {param === 'main'
                ?
                <HeaderNavForMain />
                :
                param === 'others'
                    ?
                    <HeaderNavForOthers />
                    :
                    param === 'logged'
                        ?
                        <HeaderNavForMain />
                        : null
            }
        </section>
    )
};

export default HomeHeader;