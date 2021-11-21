import React, { Component } from 'react';
import './CustomerLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class CustomerLogin extends Component {

    render() {
        return (
            <>
                <Router>
                <div className="customer-login">
                    <div className="heading">
                        <h2>Customer's Login</h2>
                    </div>
                    <div className="form">
                        <form action="" method="post">
                            <div className="username">
                                <FontAwesomeIcon icon={faEnvelope} className="highlight" /><input type="text" name="username" id="username" placeholder="Username" />
                            </div>
                            <div className="password">
                                <FontAwesomeIcon icon={faLock} className="highlight" /><input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <Link exact to="/customerdashboard">Log In</Link>
                           


                        </form>
                    </div>

                </div>
                </Router>
            </>
        );
    }
}

export default CustomerLogin;