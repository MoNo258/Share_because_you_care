import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeHero from "./HomeHero";
import HomeThreeColumns from "./HomeThreeColumns";
import HomeSeparator from "./HomeSeparator";
import HomeFourColumns from "./HomeFourColumns";
import HomeShareStuff from "./HomeShareStuff";
import HomeAboutUs from "./HomeAboutUs";
import HomeOptions from "./HomeOptions";
import HomeOptionsList from "./HomeOptionsList";
import HomeContactUs from "./HomeContactUs";
import HomeFooter from "./HomeFooter";


const Home = () => {

    return (
        <div className='home'>
            <HomeHeader/>
            <HomeHero id='HomeHero'/>
            <HomeThreeColumns id='HomeThreeColumns'/>
            <HomeSeparator/>
            <HomeFourColumns/>
            <HomeShareStuff/>
            <HomeAboutUs id='HomeAboutUs'/>
            <HomeSeparator/>
            <HomeOptions id='HomeOptions'/>
            <HomeOptionsList/>
            <HomeContactUs id='HomeContactUs'/>
            <HomeFooter/>
        </div>
    )
};


export default Home;