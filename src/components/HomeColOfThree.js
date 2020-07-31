import React from 'react';

const HomeColOfThree = ({title, subtitle, text}) => {

    return (
        <div className='col-sm-12-4 col-md-4 three-columns__card'>
            <h2 className='card__title'>
                {title}
            </h2>
            <p className='card__subtitle'>
                {subtitle}
            </p>
            <p className='card__text'>
                {text}
            </p>
        </div>
    )
};

export default HomeColOfThree;