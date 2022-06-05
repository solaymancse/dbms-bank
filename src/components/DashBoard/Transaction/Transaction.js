import React from "react";

import { Top , Right } from './TransactionElements'
import { Table } from "react-bootstrap";
import { BsCurrencyDollar } from "react-icons/bs";
import { Container } from "./../AccountDetails/AccountDetailsElements";

export const Transaction = () => {
  return (
    <Container>
      <Top>
        <div>
          <h1>
            Total Balance <BsCurrencyDollar />
            310
          </h1>
        </div>
      </Top>
      <div className="transaction-sec">
        <input type="number" placeholder="Withdraw" required />
        <input type="submit" value="Withdraw" />
      </div>
      <Right>
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
      </Right>
    </Container>
  );
};
