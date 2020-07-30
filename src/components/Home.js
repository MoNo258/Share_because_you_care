import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSeparator from "./HomeSeparator";
import HomeFourColumns from "./HomeFourColumns";
import HomeShareStuff from "./HomeShareStuff";
import HomeAboutUs from "./HomeAboutUs";
import HomeOptions from "./HomeOptions";
import HomeContactUs from "./HomeContactUs";
import HomeFooter from "./HomeFooter";
import {auth} from "../firebase/firebase.config";

const Home = () => {
    const [user] = useState(auth().currentUser);

    return (
        <div className='home'>
            {!user
                ? <HomeHeader param='main'/>
                : <HomeHeader param='logged'/>
            }
            <HomeHero id='HomeHero'/>
            <HomeThreeColumns id='HomeThreeColumns'/>
            <HomeSeparator id='SeparatorFour' text='Wystarczą 4 proste kroki'/>
            <HomeFourColumns/>
            <HomeShareStuff/>
            <HomeAboutUs id='HomeAboutUs'/>
            <HomeSeparator id='SeparatorOptions' text='Komu pomagamy?'/>
            <HomeOptions id='HomeOptions'/>
            <HomeContactUs id='HomeContactUs'/>
            <HomeFooter/>
        </div>
    )
};

export default Home;