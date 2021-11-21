import React from 'react';
import './EmployeeLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

const EmployeeLogin = () => {
    return (
        <>
             <div className="customer-login">
                <div className="heading">
                    <h2>Employee's Login</h2>
                </div>
                <div className="form">
                <Form>
                    <div className="username">
                    <FontAwesomeIcon icon={faEnvelope} className="highlight"/><input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="password">
                    <FontAwesomeIcon icon={faLock}  className="highlight"/><input type="password" name="password" placeholder="Password" />
                    </div>
                   
                    <input className="login-btn" type="submit" value="Log In" href="/employee-login"/>
                   
                   

                </Form>
                </div>
                
            </div>
            
            
        </>
    );
};

export default EmployeeLogin;