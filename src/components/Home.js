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
        <div className='home container'>
            <HomeHeader/>
            <HomeHero/>
            <HomeThreeColumns/>
            <HomeSeparator/>
            <HomeFourColumns/>
            <HomeShareStuff/>
            <HomeAboutUs/>
            <HomeSeparator/>
            <HomeOptions/>
            <HomeOptionsList/>
            <HomeContactUs/>
            <HomeFooter/>
        </div>
    )
};


export default Home;