import './App.css';
import React from 'react';
import MainComponents from './components/MainComponents';
import DashBoard from './components/DashBoard/DashBoard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';




function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component= { MainComponents } />
          <Route exact path="/login" component={ Login} />
          <Route exact path="/dashboard" component={ DashBoard } />
          <Route exact path="/employeedashboard" component={ EmployeeDashboard } />
          <Route exact path="/customerdashboard" component={ CustomerDashboard } />

        </Switch>


      </Router>





    </div>
  );
}

export default App;
