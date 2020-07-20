import React from 'react';
import {Link} from "react-router-dom";
import heroImage from '../assets/Home-Hero-Image.jpg';

const HomeHero = ({id}) => {

    return (
        <div className='home__hero'>


            <section className='hero' id={id}>
                <div className='row'>
                    <div className='col-6 hero--left'>
                        <img src={heroImage} alt="hero"/>
                    </div>
                    <div className='col-6 hero--right'>
                        <h3 className='hero__title hero__title--first'>
                            Zacznij pomagać!
                        </h3>
                            <h3 className='hero__title hero__title--second'>
                            Oddaj niechiane rzeczy w zaufane ręce
                        </h3>
                        <ul className='hero__list'>
                            <li className='list__item'>
                                <Link to='/logowanie' className='btn btn-lg list__btn'>Oddaj rzeczy</Link>
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