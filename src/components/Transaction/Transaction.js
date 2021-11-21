import React from 'react';
import './Transaction.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'react-bootstrap';


const Transaction = () => {
    return (
        <>
            <div className="transaction">
                <div className="balance">
                    <h1>Total Balance  <FontAwesomeIcon icon={faDollarSign} /> 300</h1>
                </div>
                <div className="withdraw">
                    <h1>withdraw <FontAwesomeIcon icon={faDollarSign} /> 200</h1>
                </div>
                <div className="deposit">
                    <h1>Last Deposit<FontAwesomeIcon icon={faDollarSign} /> 100</h1>
                </div>
            </div>
            <div className="transaction-sec">
                   <input type="number"  placeholder="Withdraw" required/>
                   <input type="submit" value="Withdraw" />
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>attempt</th>
                        <th>Date</th>
                        <th>Branch</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default Transaction;