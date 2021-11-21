import React from 'react';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import FeatureSectionOne from './FeatureSectionOne/FeatureSectionOne';
import FeatureSectionThree from './FeatureSectionThree/FeatureSectionThree';
import FeatureSectionTwo from './FeatureSectionTwo/FeatureSectionTwo';
import FeatureSectionTxtOne from './FeatureSectionTxtOne/FeatureSectionTxtOne';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import ServiceList from './ServiceList/ServiceList';


const MainComponents = () => {
    
    return (
        <>
            <Contact />
            <Header/>
            <ServiceList />
            <HeroSection />
            <Features />
            <FeatureSectionOne/>
            <FeatureSectionTxtOne />
            <FeatureSectionTwo />
            <FeatureSectionThree />
            
            
        </>
    );
};

export default MainComponents;