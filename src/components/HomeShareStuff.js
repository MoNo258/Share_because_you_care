import React from 'react';
import {Link} from "react-router-dom";

const HomeShareStuff = () => {

    return (
        <div className='home__share-stuff'>
            <section className='share-stuff'>
                <Link to='/logowanie' className='btn btn-lg list__btn'>Oddaj rzeczy</Link>
            </section>
        </div>
    )
};

export default HomeShareStuff;