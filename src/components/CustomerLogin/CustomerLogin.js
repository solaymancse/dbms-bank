import React from 'react';
import './CustomerLogin.css';


const CustomerLogin = () => {

    
   
    return (
        <>
            <h1>Customer's Login</h1>
            <form action="" method="post">
                <label For="username">Username </label>
                <input type="text"   placeholder="Username *" /> 
                <label For="username">Password</label>
                <input type="password" placeholder="Your Password*" />
                <input type="submit" value="submit" target="/dashboard" />
            </form>
            
        </>
    );
};

export default CustomerLogin;