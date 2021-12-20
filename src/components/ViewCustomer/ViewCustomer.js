import axios from 'axios';
import React, { Component} from 'react';
import { Table } from 'react-bootstrap';
import './ViewCustomer.css'
import RecordList from '../RecordList/RecordList';
import {FiSearch} from 'react-icons/fi'


class ViewCustomer extends Component {

    constructor(props){
        super(props);
        
        this.state ={
            customers: []
        };
    }

    componentDidMount(){
        axios.get("http://localhost/dbms-bank-backend/view.php")
        .then(res =>
            {
                this.setState({customers: res.data});
            })
            .catch(function (error){
                console.log(error);
            })       
    }
    userList(){
        return this.state.customers.map(function(object, i){
            return <RecordList obj={object} key={i} />
        });
    }
    render(){
        const text = {
            color: '#333',
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '8px',
            textAlign: 'center'
        }
        const tablestyle = {
            marginTop: '30px'
        }
        return (
            <>
                <h1 style={text}>View All Customer</h1>
                   <h2 class="search-text">Search Customer</h2>
                   <FiSearch/> <input  type="number" placeholder="Account No / Nid No" name="account_no" id="" />
                <Table style={tablestyle} striped bordered hover >
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Full Name</th>
                            <th>Account/NID No</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </Table>
            </>
        );
    

    }
    
}

export default ViewCustomer;