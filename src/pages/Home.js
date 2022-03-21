import React from 'react'
import Features from '../components/Features/Features';
import FeatureSectionOne from '../components/FeatureSectionOne/FeatureSectionOne';
import FeatureSectionThree from '../components/FeatureSectionThree/FeatureSectionThree';
import FeatureSectionTwo from '../components/FeatureSectionTwo/FeatureSectionTwo';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ServiceList from '../components/ServiceList/ServiceList';
import Contact from './../components/Contact/Contact';




export const Home = () => {
  return (
    <>
       <Contact/>
       <Header/>
       <ServiceList/>
       <HeroSection/>
       <Features/>
       <FeatureSectionOne/>
       <FeatureSectionTwo/>
       <FeatureSectionThree/>
       
     
    </>
  )
}
