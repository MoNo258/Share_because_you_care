import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {auth} from "../firebase/firebase.config";

const HomeShareStuff = () => {
    const [user] = useState(auth().currentUser);

    return (
        <div className='home__share-stuff'>
            <section className='share-stuff'>
                {!user
                    ? <Link to='/logowanie' className='btn btn-lg list__btn'>Oddaj rzeczy</Link>
                    : <HashLink to='/oddaj-rzeczy/#FormHero' className='btn btn-lg list__btn'>Oddaj rzeczy</HashLink>
                }
            </section>
        </div>
    )
};

export default HomeShareStuff;