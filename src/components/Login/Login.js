import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import CustomerLogin from '../CustomerLogin/CustomerLogin';
import EmployeeLogin from '../EmployeeLogin/EmployeeLogin';
import './Login.css';





const Login = () => {
    const style = {
        background: 'red',
        padding: '10px',
        borderRadius: '10px',
        transition: '0.5s',
        margin: '15px',
    }
    return (
        <>
            <div className="login-form">
                <div className="left-sec">
                    <h1>Welcome to Online Banking</h1>
                </div>
                <div className="right-sec">
                    <h1>Log In to DBMS</h1>
                    <Router>
                        <div className="login-section">
                            <NavLink activeStyle={style} to="/customer"><span>Customer</span></NavLink>
                            <NavLink activeStyle={style} to="/employee"><span>Employee</span></NavLink>
                            <Switch>
                                <Route exact path="/customer">
                                    <CustomerLogin />
                                </Route>
                                <Route exact path="/employee">
                                    <EmployeeLogin />
                                </Route>
                            </Switch>

                        </div>

                    </Router>

                </div>
            </div>
        </>
    );
};

export default Login;