import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import FormHero from "./FormHero";
import FormInfo from "./FormInfo";
import FormStepBasic from "./FormStepBasic";
import HomeContactUs from "./HomeContactUs";
import HomeFooter from "./HomeFooter";
import {auth} from "../firebase/firebase.config";

const Form = () => {
    const [user, setUser] = useState(auth().currentUser);

    return (
        <div className='home'>
            { !user
                ? <HomeHeader param='main' />
                : <HomeHeader param='logged' />
            }
            <FormHero id='FormHero' />

            <FormStepBasic />
            <HomeContactUs id='HomeContactUs' />
            <HomeFooter />
        </div>
    )
};

export default Form;