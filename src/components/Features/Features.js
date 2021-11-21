import React from 'react';
import './Features.css';
import {Link} from 'react-router-dom';
import { GiReceiveMoney,GiPriceTag } from 'react-icons/gi';

const Features = () => {
    function Card(props){
        return (
            <div className="box-card">
                <div className="box-card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <div className="inner-card">
                         <h4>{props.icon}</h4>
                        <div className="deep-card">
                            <p className="deep-card-title">{props.p}</p>
                            <Link to="/" className="card-btn">{props.golink}</Link>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
    return (
        <>
            <div className="wrapper container-marg">
                <Card title="INVESTMENTS" icon={<GiReceiveMoney/>} p="Manage all your finances with a click" golink="INVEST ONLINE"/>
                <Card title="COMPARE & BUY" icon={<GiPriceTag/>} p="Real time price comparison ***T&C Apply" golink="SHOP NOW"/>
                <Card title="LOANS & CARD" icon={<GiReceiveMoney/>} p="DBMS bank offers wide variaty of loans & card" golink="APPLY ONLINE"/>
                <Card title="INSURANCE" icon={<GiReceiveMoney/>} p="Protect Everyone you love  ***T&C Apply" golink="PROTECT ONLINE"/>
                <Card title="WAYS TO BANK" icon={<GiReceiveMoney/>} p="Manage all your finances with a click" golink="FIND WAYS"/>
            </div>
            
            
        </>
    );
};

export default Features;