import React from 'react';
import './OnlineBanking.css';
import { Container  } from 'react-bootstrap';



const OnlineBanking = () => {
    return (
        <>
           <Container>
                <div className="banner">
                   <div className="img-sec">             
                        <img className="banner-img" src="Assets/banner-1.png" alt="" srcset="" />
                        <div className="search-box">
                            <input type="text" name="" id="" placeholder="SEARCH DBMS" />
                        </div>
                   </div>
                    <div className="login-sec">
                        <h1>Welcome to DBMS</h1>
                    </div>
                </div>
            </Container>

            

        </>
    );
};

export default OnlineBanking;