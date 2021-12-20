import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//important

import axios from 'axios';
axios.defaults.baseURL = 'http//localhost/dbms_bank/api';


ReactDOM.render(

    <App />
, 
document.getElementById('root')



);


