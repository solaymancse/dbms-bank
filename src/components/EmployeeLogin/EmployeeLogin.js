import React from 'react';
import './EmployeeLogin.css';

const EmployeeLogin = () => {
    return (
        <>
            <h1>Employee's Login</h1>
            <form action="" method="post">
                <label For="username">Username</label>
                <input type="text" placeholder="Your Username or Phone *" />
                <label For="username">Password</label>
                <input type="password"  placeholder="Your Password*" />
                <input type="submit" value="submit" />
            </form>
            
        </>
    );
};

export default EmployeeLogin;