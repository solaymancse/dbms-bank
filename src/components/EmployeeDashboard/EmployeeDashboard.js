import React, { Component } from 'react';
import './EmployeeDashboard.css';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { EmployeeSidebarData } from '../EmployeeSidebarData/EmployeeSidebarData';
import AddCustomer from '../AddCustomer/AddCustomer';
import AccountDetails from '../AccountDetails/AccountDetails';
import AccountRef from '../AccountRef/AccountRef';
import CreditFunds from '../CreditFunds/CreditFunds';
import DebitFunds from '../DebitFunds/DebitFunds';
import ViewCustomer from '../ViewCustomer/ViewCustomer';
import EditCustomer from '../EditCustomer/EditCustomer';
import DeleteCustomer from '../DeleteCustomer/DeleteCustomer';
import { Axios } from 'axios';
// import { useHistory, useParams } from 'react-router-dom';


class EmployeeDashboard extends Component {

    componetDidMount (){
        Axios.get('user').then(
            res=> {
                
            }
        )
    }
    render(){
        return (
            <>
                <Router>
                    <Row>
                        <Col md={2} className="left-col">
                            <div className="dash-logo">
                                <h1>DBMS<span>BANK</span></h1>
                            </div>
                            <ul className="nav-menu-items">
                                <li>
                                    {EmployeeSidebarData.map((item, index) => {
    
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
                            <Route exact path="/employeedashboard" render={() => <h1>Welcome Mr.</h1>} />
                            <Route exact path="/add-new-customer" component={AddCustomer} />
                            <Route exact path="/view-customer" component={ViewCustomer} />
                            <Route exact path="/account-details" component={AccountDetails} />
                            <Route exact path="/account-reference" component={AccountRef} />
                            <Route exact path="/credit-funds" component={CreditFunds} />
                            <Route exact path="/debit-funds" component={DebitFunds} />
                            <Route exact path="/edit" component={EditCustomer} />
                            <Route exact path="/delete" component={DeleteCustomer} />
                        </Col>
    
                        <Col md={2} className='logout'>
                            {/* <Link onClick={logout}to="/log-out"><span>Log Out</span></Link> */}
                        </Col>
                    </Row>
    
                </Router>
    
    
    
    
    
            </>
        );

    }
    
};

export default EmployeeDashboard;