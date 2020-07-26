import React from 'react';
import backgroundYellow from '../assets/3-Columns-Background.png';
import HomeColOfThree from "./HomeColOfThree";

const HomeThreeColumns = () => {

    const styleBackground = {
        backgroundImage: `url(${backgroundYellow})`
    };

    return (
        <div className='home__three-columns' style={styleBackground} >
            <section className='three-columns container-sm' >
                <div className='row three-columns__row'>
                    <HomeColOfThree
                        title='10'
                        subtitle='oddanych worków'
                        text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
                    />
                    <HomeColOfThree
                        title='5'
                        subtitle='WSPARTYCH ORGANIZACJI'
                        text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
                    />
                    <HomeColOfThree
                        title='7'
                        subtitle='ZORGANIZOWANY ZBIÓREK'
                        text='Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.'
                    />
                </div>
            </section>
        </div>
    )
};


export default HomeThreeColumns;