import React from 'react';
import aboutUsImg from '../assets/People.jpg';
import signature from '../assets/Signature.svg';
import separatorImg from '../assets/Decoration.svg';


const HomeAboutUs = ({id}) => {

    return (
        <div className='home__about-us'>
            <section id={id} className='about-us'>
                <div className='row about-us__row'>
                    <div className='col-lg-6 col-12 about-us__col'>
                        <div className='about-us__left container'>
                            <h3 className='left__title'>
                                O nas
                            </h3>
                            <div className='left__separator'>
                                <img src={separatorImg} alt="separator" className='left__image'/>
                            </div>
                            <p className='left__text'>
                                Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                                Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                            </p>
                            <div className='left__signature'>
                                <img src={signature} alt="signature"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 about-us__col'>
                        <div className='about-us__right'>
                            <img className='right_image' src={aboutUsImg} alt="people"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};


export default HomeAboutUs;