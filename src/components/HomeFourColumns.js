import React from 'react';
import iconFirst from '../assets/Icon-1.svg'
import iconSec from '../assets/Icon-2.svg'
import iconThird from '../assets/Icon-3.svg'
import iconFourth from '../assets/Icon-4.svg'

const HomeFourColumns = () => {

    return (
        <div className='home__four-columns'>
            <section className='four-columns container'>
                <div className='row four-columns__row'>
                    <div className='col-md-12 col-lg-2 four-columns__card'>
                        <div className='four-columns__icon'>
                            <img src={iconFirst} alt="icon-first" className='four-columns__image'/>
                        </div>
                        <h6 className='four-columns__title'>
                            Wybierz rzeczy
                        </h6>
                        <p className='four-columns__text'>
                            ubrania, zabawki, sprzęt i inne
                        </p>
                    </div>
                    <div className='col-md-12 col-lg-2 four-columns__card'>
                        <div className='four-columns__icon'>
                            <img src={iconSec} alt="icon-second" className='four-columns__image'/>
                        </div>
                        <h6 className='four-columns__title'>
                            Spakuj je
                        </h6>
                        <p className='four-columns__text'>
                            skorzystaj z worków na śmieci
                        </p>
                    </div>
                    <div className='col-md-12 col-lg-2 four-columns__card'>
                        <div className='four-columns__icon'>
                            <img src={iconThird} alt="icon-third" className='four-columns__image'/>
                        </div>
                        <h6 className='four-columns__title'>
                            Zdecyduj komu chcesz pomóc
                        </h6>
                        <p className='four-columns__text'>
                            wybierz zaufane miejsce
                        </p>
                    </div>
                    <div className='col-md-12 col-lg-2 four-columns__card'>
                        <div className='four-columns__icon'>
                            <img src={iconFourth} alt="icon-fourth" className='four-columns__image'/>
                        </div>
                        <h6 className='four-columns__title'>
                            Zamów kuriera
                        </h6>
                        <p className='four-columns__text'>
                            kurier przyjedzie w dogodnym terminie
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeFourColumns;