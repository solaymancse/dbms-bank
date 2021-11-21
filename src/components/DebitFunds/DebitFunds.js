import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

class DebitFunds extends Component {
    render() {
        return (
            <div>
                <h1>Debit</h1>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Account No
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>Account NO</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" placeholder="Account NO" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text>Amount(USD)</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup" placeholder="Amount" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Debit Fund
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default DebitFunds;