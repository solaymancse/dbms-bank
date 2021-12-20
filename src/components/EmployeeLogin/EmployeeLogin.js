import React, { Component } from 'react';
import './EmployeeLogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import axios from 'axios'



class EmployeeLogin extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit= e =>{
        e.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password,
        }

        axios.post('/login',data)
        .then(res =>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    render(){
        return (

            <div className="customer-login">
                <div className="heading">
                    <h2>Employee's Login</h2>
                </div>
                <div className="form">
                    <Form onSubmit={this.onSubmit}>
                        <div className="username">
                            <FontAwesomeIcon icon={faEnvelope} className="highlight" /><input type="text" name="username"  placeholder="Username"  
                            onChange={e => {this.setState({username:e.target.value})}} />
                        </div>
                        <div className="password">
                            <FontAwesomeIcon icon={faLock} className="highlight" /><input type="password" name="password"  placeholder="Password" 
                             onChange={e => {this.setState({password:e.target.value})}} />
                        </div>

                        <input className="login-btn" type="submit" value="Log In" />



                    </Form>
                </div>

            </div>


        );

    }
        
    
}

export default EmployeeLogin;