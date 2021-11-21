import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class AccountDetails extends Component{
    constructor(props){
        super(props);
        this.state = { customers: []};
    }

    componentDidMount(){
        axios.get('http://localhost/php-react-backend/list.php')
            .then( response => {
                this.setState({customers: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }
    render(){
        return (
            <div>
                <h1>Account Details</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Account Number" />
                    </Form.Group>
    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
    
            </div>
        );
    };
    }
   

export default AccountDetails;

