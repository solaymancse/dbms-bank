import React from 'react';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import OnlineBanking from './OnlineBanking/OnlineBanking';
import ServiceList from './ServiceList/ServiceList';

const MainComponents = () => {
    return (
        <>
            <Contact />
            <Header/>
            <ServiceList />
            <OnlineBanking />
            
        </>
    );
};

export default MainComponents;