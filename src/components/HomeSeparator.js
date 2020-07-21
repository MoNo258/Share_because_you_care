import React from 'react';
import separatorImage from '../assets/Decoration.svg'

const HomeSeparator = ({id, text}) => {

    return (
        <div className='home__separator' id={id}>
            <section className='separator'>
                <h3 className='separator__title'>
                    {text}
                </h3>
                <p className='separator__decoration'>
                    <img className='separator__image' src={separatorImage} alt="separator"/>
                </p>
            </section>
        </div>
    )
};

export default HomeSeparator;