import React from 'react';
import HeaderNavForMain from "./HeaderNavForMain";
import HeaderNavForOthers from "./HeaderNavForOthers";
import HeaderNavbarForStranger from "./HeaderNavbarForStranger";
import HeaderNavbarForLogged from "./HeaderNavbarForLogged";

const HomeHeader = ({param}) => {
    return (
        <section className='home__header container-fluid'>
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