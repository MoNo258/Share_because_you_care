import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeSeparator from "./HomeSeparator";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <div className='logout container-fluid'>
            <HomeHeader param='others' />
            <div className='logout__section'>
                <HomeSeparator id='logout__separator' text='Wylogowanie nastąpiło pomyślnie'/>
                <div className='row form__row logout-form__row logout-form__row--button'>
                    <div className='col-12 form__col logout-form__col'>
                        <Link className='nav-link form__button logout-form__button'
                              to='/'>Strona główna</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Logout;