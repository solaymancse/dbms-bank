import React from 'react';
import { BrowserRouter as Router,NavLink,Switch,Route } from 'react-router-dom';
import './DashBoard.css';
import Profile from '../Profile/Profile';
import Transaction from '../Transaction/Transaction';
import PayBill from '../PayBill/PayBill';
import AccountDetails from '../AccountDetails/AccountDetails';


const DashBoard = () => {
    
    
    return (
        <>
            <Router>
                
                <div className="dashboard">
                    <div className="nav-sec">
                         <h1>Welcome MR.</h1>
                         <div className="dp"></div>
                        <NavLink to="/profile"><h2>Profile</h2></NavLink>
                        <NavLink to="/account-information"><h2>Account Details</h2></NavLink>
                        <NavLink to="/transaction"><h2>Transaction</h2></NavLink>
                        <NavLink to="/pay-bill"><h2>Pay Bill</h2></NavLink>
                    </div> 
                    <div className="showcase">
                    <Switch>
                         <Route exact path="/profile">
                             <Profile/>
                         </Route>
                         <Route exact path="/account-details">
                             <AccountDetails />
                         </Route>
                         <Route exact path="/transaction">
                             <Transaction/>
                         </Route>
                         <Route exact path="/pay-bill">
                             <PayBill/>
                         </Route>
                         

                     </Switch>
                    </div>
                    <div className="logout">
                         <NavLink to="/logout"><button>Log Out</button></NavLink>
                    </div>
                   

                    
                </div>
                    
            </Router>
           

            
        </>
    );
};

export default DashBoard;



