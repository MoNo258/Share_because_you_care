import React, {useState} from 'react';
import HomeOptionsList from "./HomeOptionsList";

const HomeOptions = () => {
    const [activeOption, setActiveOption] = useState('funds');

    const handleClick = (e) => {
        setActiveOption(e.target.value)
    };

    return (
        <>
            <div className='home__options'>
                <section className='options'>
                    <div className='row options__row'>
                        <div className='col-3 options__card'>
                            <button className='options__button ' value='funds' onClick={handleClick}>
                                Fundacjom
                            </button>
                        </div>
                        <div className='col-3 options__card'>
                            <button className='options__button' value='orgs' onClick={handleClick}>
                                Organizacjom pozarządowym
                            </button>
                        </div>
                        <div className='col-3 options__card'>
                            <button className='options__button' value='locs' onClick={handleClick} >
                                Lokalnym zbiórkom
                            </button>
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
            <HomeOptionsList option={activeOption}/>
        </>
    )
};

export default HomeOptions;