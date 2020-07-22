import React from 'react';
import {Link} from "react-router-dom";
import facebookIcon from '../assets/Facebook.svg';
import instagramIcon from '../assets/Instagram.svg';

const HomeFooter = () => {

    return (
        <div className='home__footer container-fluid'>
            <section className='footer'>
                <div className='row footer__row'>
                    <div className='col-4 footer__col'>
                    </div>
                    <div className='col-4 footer__col'>
                        <div className='footer__copyright'>
                            Copyright by Coders Lab
                        </div>
                    </div>
                    <div className='col-4 footer__col footer__col--icons'>
                        <span className='footer__span footer__span--fb'>
                            <Link className='nav-link' to='/'>
                                <img src={facebookIcon} alt="facebook-icon" className='footer__icon footer__icon--fb'/>
                            </Link>
                        </span>
                        <span className='footer__span footer__span--insta'>
                            <Link className='nav-link' to='/'>
                                <img src={instagramIcon} alt="instagram-icon"
                                     className='footer__icon footer__icon--insta'/>
                            </Link>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeFooter;