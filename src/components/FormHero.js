import React from 'react';
import formHeroImage from '../assets/Form-Hero-Image.jpg';
import formSeparator from '../assets/Decoration.svg'

const FormHero = ({id}) => {

    return (
        <div className='home__formHero'>
            <section className='formHero' id={id}>
                <div className='row formHero__row'>
                    <div className='col-6 col-sm-12 col-lg-6 formHero--left'>
                        <img src={formHeroImage} alt="hero"/>
                    </div>
                    <div className='col-6 col-sm-12 col-lg-6 formHero--right'>
                        <h3 className='formHero__title formHero__title--first'>
                            Oddaj rzeczy, których już nie chcesz
                        </h3>
                        <h3 className='formHero__title formHero__title--second'>
                            POTRZEBUJĄCYM
                        </h3>
                        <div className='formHero__title--separator'>
                            <img src={formSeparator} alt="separator"/>
                        </div>
                        <h3 className='formHero__title formHero__title--third'>
                            Wystarczą 4 proste kroki:
                        </h3>
                        <ul className='formHero__list'>
                            <li className='list__item'>
                                <div className='list__square'>
                                    <p className='square__top'>
                                        1
                                    </p>
                                    <p className='square__bottom'>
                                        Wybierz
                                        <br/>
                                        rzeczy
                                    </p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__square'>
                                    <p className='square__top'>
                                        2
                                    </p>
                                    <p className='square__bottom'>
                                        Spakuj je
                                        <br/>
                                        w worki
                                    </p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__square'>
                                    <p className='square__top'>
                                        3
                                    </p>
                                    <p className='square__bottom'>
                                        Wybierz
                                        <br/>
                                        fundację
                                    </p>
                                </div>
                            </li>
                            <li className='list__item'>
                                <div className='list__square'>
                                    <p className='square__top'>
                                        4
                                    </p>
                                    <p className='square__bottom'>
                                        Zamów
                                        <br/>
                                        kuriera
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default FormHero;