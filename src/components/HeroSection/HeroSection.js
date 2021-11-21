import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import * as FcIcon from 'react-icons/fc';
import * as BsIcon from 'react-icons/bs';
import * as FaIcon from 'react-icons/fa';







const HeroSection = () => {

    const date = new Date();
    const hour = date.getHours();


    return (
        <div className="banner">

            <div className="getstarted container-marg">
                {hour >= 12 ? hour >= 16 ? <h3>Good Evening</h3> : <h3>Good Afternoon</h3> : <h3>Good Morning</h3>}
                <h1>WELCOME  TO  DBMS</h1>
                <div className="services">
                   <h2><FcIcon.FcAssistant/><span>24/7 customer Support</span></h2>
                    <h2><BsIcon.BsBank2/><span>100+ Branch</span></h2>
                    <h2><FaIcon.FaCcMastercard/><span>Free ATM Card</span></h2>
                </div>
                <div className="bottom-sec">
                    <Link to="/get-started"><span>Get Started</span></Link>
                    <Link to="/login" ><span>Online Banking</span></Link>
                </div>
            </div>


        </div>


    );
};

export default HeroSection;