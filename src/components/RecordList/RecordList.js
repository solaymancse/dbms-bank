import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecordList.css'

class RecordList extends Component {
   
    render() {
        const btn1 = {
            color: '#fff',
            textWeight: 'bold',
            textDecoration: 'none',
            background: '#0B5ED7',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            margingRight: '10px'
        }
        const btn2 ={
            color: '#fff',
            textWeight: 'bold',
            textDecoration: 'none',
            background: 'red',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            margingRight: '10px',
            hover: '#fff'
        }
        return (
            <tr>
                <td>{this.props.obj.customer_id}</td>
                <td>{this.props.obj.full_name}</td>
                <td>{this.props.obj.nid_num}</td>
                <td>{this.props.obj.phone}</td>
                <td><Link style={btn1} to='/edit'>Edit</Link> <Link style={btn2} to='/delete'>Delete</Link></td>
               
                
            </tr>
        );
    }
}

export default RecordList;