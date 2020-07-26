import React from 'react';
import iconFirst from '../assets/Icon-1.svg'
import iconSec from '../assets/Icon-2.svg'
import iconThird from '../assets/Icon-3.svg'
import iconFourth from '../assets/Icon-4.svg'
import HomeColOfFour from "./HomeColOfFour";

const HomeFourColumns = () => {

    return (
        <div className='home__four-columns'>
            <section className='four-columns container'>
                <div className='row four-columns__row'>
                    <HomeColOfFour
                        image=<img src={iconFirst} alt="icon-first" className='four-columns__image'/>
                        title='Wybierz rzeczy'
                        text='ubrania, zabawki, sprzęt i inne'
                    />
                    <HomeColOfFour
                        image=<img src={iconSec} alt="icon-second" className='four-columns__image'/>
                        title='Spakuj je'
                        text='skorzystaj z worków na śmieci'
                    />
                    <HomeColOfFour
                        image=<img src={iconThird} alt="icon-third" className='four-columns__image'/>
                        title='Zdecyduj komu chcesz pomóc'
                        text='wybierz zaufane miejsce'
                    />
                    <HomeColOfFour
                        image=<img src={iconFourth} alt="icon-fourth" className='four-columns__image'/>
                        title='Zamów kuriera'
                        text='kurier przyjedzie w dogodnym terminie'
                    />
                </div>
            </section>
        </div>
    )
};

export default HomeFourColumns;