import React from 'react';

const HomeColOfFour = ({image, title, text}) => {

    return (
            <div className='col-md-12 col-lg-2 four-columns__card'>
                <div className='four-columns__icon'>
                    {image}
                </div>
                <h6 className='four-columns__title'>
                    {title}
                </h6>
                <p className='four-columns__text'>
                    {text}
                </p>
            </div>
    )
};

export default HomeColOfFour;