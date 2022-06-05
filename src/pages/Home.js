import React from 'react'
import { Banner } from '../components/Banner/Banner';
import { Carosel } from '../components/Carosel/Carosel';
import { CopyRight } from '../components/CopyRight/CopyRight';
import Features from '../components/Features/Features';
import FeatureSectionOne from '../components/FeatureSectionOne/FeatureSectionOne';
import FeatureSectionThree from '../components/FeatureSectionThree/FeatureSectionThree';
import FeatureSectionTwo from '../components/FeatureSectionTwo/FeatureSectionTwo';
import { Footer } from '../components/Footer/Footer';
import { FooterTop } from '../components/FooterTop/FooterTop';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import { ScrollBtn } from '../components/ScrollBtn/ScrollBtn';
import ServiceList from '../components/ServiceList/ServiceList';
import { StickyNavbar } from '../components/StickyNavbar/StickyNavbar';
import Contact from './../components/Contact/Contact';







export const Home = () => {
  return (
    <>
       <Contact/>
       <StickyNavbar/>
       <Header/>
       <ServiceList/>
       <HeroSection/>
       <Features/>
       <ScrollBtn/>
       <FeatureSectionOne/>
       <FeatureSectionTwo/>
       <FeatureSectionThree/>
       <Banner/>
       <Carosel/>
       <FooterTop/>
       <Footer/>
       <CopyRight/>
       
     
    </>
  )
}
