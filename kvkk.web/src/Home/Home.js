import React from 'react';
import '../App.css';
import HomeNavBar from '../Home/HomeNavBar';

import HomeHeroSection from '../Home/HomeHeroSection';
import HomeFooter from '../Home/HomeFooter';

function Home() {
    return (
        <>
            <HomeNavBar/>
            <HomeHeroSection />
            
            <HomeFooter />
        </>
    );
}

export default Home;