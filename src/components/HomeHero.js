import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import heroImage from '../assets/Home-Hero-Image.jpg';
import heroSeparator from '../assets/Decoration.svg'
import {auth} from "../firebase/firebase.config";

const HomeHero = ({id}) => {
    const [user] = useState(auth().currentUser);

    return (
        <div className='home__hero'>
            <section className='hero' id={id}>
                <div className='row home__hero--row'>
                    <div className='col-sm-12 col-md-4 col-lg-3 col-xl-6 hero--left'>
                        <img src={heroImage} alt="hero"/>
                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-9 col-xl-6 hero--right'>
                        <h3 className='hero__title hero__title--first'>
                            Zacznij pomagać!
                        </h3>
                        <h3 className='hero__title hero__title--second'>
                            Oddaj niechiane rzeczy w zaufane ręce
                        </h3>
                        <div className='hero__title--separator'>
                            <img src={heroSeparator} alt="separator"/>
                        </div>
                        <ul className='hero__list'>
                            <li className='list__item'>
                                {!user
                                    ? <Link to='/logowanie' className='btn btn-lg list__btn'>Oddaj rzeczy</Link>
                                    : <HashLink to='/oddaj-rzeczy#FormHero' className='btn btn-lg list__btn'>
                                        Oddaj rzeczy
                                    </HashLink>
                                }
                            </li>
                            <li className='list__item'>
                                <Link to='/logowanie' className='btn btn-lg list__btn'>Zorganizuj zbiórkę</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeHero;