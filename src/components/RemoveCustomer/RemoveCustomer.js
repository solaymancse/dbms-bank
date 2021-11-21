import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class RemoveCustomer extends Component {
    render() {
        return (
            <div>
                <h1>Remove Customer</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Account Number</Form.Label>
                        <Form.Control type="number" placeholder="Account NO" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Remove
                    </Button>
                </Form>
            </div>
        );
    }
}

export default RemoveCustomer;