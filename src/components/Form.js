import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import FormHero from "./FormHero";
import FormStepBasic from "./FormStepBasic";
import HomeContactUs from "./HomeContactUs";
import HomeFooter from "./HomeFooter";
import {auth} from "../firebase/firebase.config";

const Form = () => {
    const [user] = useState(auth().currentUser);

    return (
        <div className='home'>
            { !user
                ? <HomeHeader param='main' />
                : <HomeHeader param='form' />
            }
            <FormHero id='FormHero' />
            <FormStepBasic />
            <HomeContactUs id='HomeContactUs' />
            <HomeFooter />
        </div>
    )
};

export default Form;