import React from 'react';

const HomeOptions = () => {

    return (
        <div className='home__options'>
            <section className='options'>
                <div className='row options__row'>
                    <div className='col-3 options__card'>
                        <h3 className='options__title '>
                            Fundacjom
                        </h3>
                    </div>
                    <div className='col-3 options__card'>
                        <h3 className='options__title'>
                            Organizacjom pozarządowym
                        </h3>
                    </div>
                    <div className='col-3 options__card'>
                        <h3 className='options__title'>
                            Lokalnym zbiórkom
                        </h3>
                    </div>
                </div>
                <div className='row options__row'>
                    <div className='col-6 options__card'>
                        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomeOptions;