import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const FeatureSectionTxtOne = () => {
    function Features(props){
        return(
            <div className="features">
                <div className="features-body">
                    <h1>{props.icon}</h1>
                    <div className="features-description">
                        <h2>{props.title}</h2>
                        <p>{props.p}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="feature-txt">
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
            <Features icon={<BiTimeFive/>} title="Free, fast Setup" p="It is a long established fact that a reader will be distracted by the"/>
        </div>
    );
};

export default FeatureSectionTxtOne;