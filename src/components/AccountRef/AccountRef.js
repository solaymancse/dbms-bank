import Button from '@restart/ui/esm/Button';
import React, { Component } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

class AccountRef extends Component {
    render() {
        return (
            <div>
                <h1>Reference</h1>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                               Account No
                            </Form.Label>
                            <InputGroup className="mb-2">
                                <InputGroup.Text >Account NO</InputGroup.Text>
                                <FormControl  id="inlineFormInputGroup" placeholder="Account NO" />
                            </InputGroup>
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Reference
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default AccountRef;