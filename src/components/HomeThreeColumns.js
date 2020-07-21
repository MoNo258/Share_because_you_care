import React from 'react';


const HomeThreeColumns = ({id}) => {

    return (
        <div className='home__three-columns'>


            <section className='three-columns container-sm' id={id}>
                <div className='row three-columns__row'>
                    <div className='col-sm-12 col-md-4 three-columns__card'>
                        <h2 className='card__title'>
                            10
                        </h2>
                        <p className='card__subtitle'>
                            oddanych worków
                        </p>
                        <p className='card__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-4 three-columns__card'>
                        <h2 className='card__title'>
                            5
                        </h2>
                        <p className='card__subtitle'>
                            WSPARTYCH ORGANIZACJI
                        </p>
                        <p className='card__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-4 three-columns__card'>
                        <h2 className='card__title'>
                            7
                        </h2>
                        <p className='card__subtitle'>
                            ZORGANIZOWANY ZBIÓREK
                        </p>
                        <p className='card__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default HomeThreeColumns;