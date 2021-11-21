import React from 'react';
import './CustomerDashboard.css';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Transaction from '../Transaction/Transaction';
import PayBill from '../PayBill/PayBill';
import DebitFunds from '../DebitFunds/DebitFunds';
import { CustomerSidebarData } from '../CustomerSidebarData/CustomerSidebarData';
import MyAccountDetails from '../MyAccountDetails/MyAccountDetails';



const CustomerDashboard = () => {
    document.title = "Customer Dashboard";


    return (
        <>
            <Router>
                <Row>
                    <Col md={2} className="customer-dashboard">
                        <h5>DBMS BANK</h5>
                        <ul className="cust-nav-menu-items">
                            <li>
                                {CustomerSidebarData.map((item, index) => {

                                    return <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>

                                        </Link>

                                    </li>
                                })}

                            </li>
                        </ul>
                    </Col>


                    <Col md={8} className="mid-col">
                        <span>Dashboard</span>
                        <Route exact path="/customerdashboard" render={() => <h1>Welcome Mr.</h1>} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/account-details" component={ MyAccountDetails } />
                        <Route exact path="/transaction" component={Transaction} />
                        <Route exact path="/pay-bill" component={PayBill} />
                        <Route exact path="/debit-funds" component={DebitFunds} />
                    </Col>
                    <Col md={2} className='customer-logout'>
                        <Link to="/log-out"><span>Log Out</span></Link>
                    </Col>
                </Row>
            </Router>

        </>
    );

}

export default CustomerDashboard;


