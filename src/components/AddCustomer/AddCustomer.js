import React, { Component } from 'react';
import './AddCustomer.css';
import { Form, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

class AddCustomer extends Component {
    constructor(props) {
        super(props);

        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangeFathername = this.onChangeFathername.bind(this);
        this.onChangeMothername = this.onChangeMothername.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePresentAdd = this.onChangePresentAdd.bind(this);
        this.onChangeParmanantAdd = this.onChangeParmanantAdd.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
        this.onChangeNid = this.onChangeNid.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeStatename = this.onChangeStatename.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            full_name: '',
            father_name: '',
            mother_name: '',
            dob: '',
            profession: '',
            present_add: '',
            parmanant_add: '',
            phone: '',
            email: '',
            user_name: '',
            password: '',
            marital: '',
            nid_num: '',
            branch: '',
            gender: '',
            city: '',
            state_name: '',
            zip: ''

        }


    }

    onChangeFullname(e) {
        this.setState({
            full_name: e.target.value
        });
    }
    onChangeFathername(e) {
        this.setState({
            father_name: e.target.value
        });
    }
    onChangeMothername(e) {
        this.setState({
            mother_name: e.target.value
        });
    }
    onChangeDob(e) {
        this.setState({
            dob: e.target.value
        });
    }
    onChangeProfession(e) {
        this.setState({
            profession: e.target.value
        });
    }
    onChangeUsername(e) {
        this.setState({
            user_name: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangePresentAdd(e) {
        this.setState({
            present_add: e.target.value
        });
    }
    onChangeParmanantAdd(e) {
        this.setState({
            parmanant_add: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangeMaritalStatus(e) {
        this.setState({
            marital: e.target.value
        });
    }
    onChangeNid(e) {
        this.setState({
            nid_num: e.target.value
        });
    }
    onChangeBranch(e) {
        this.setState({
            branch: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeStatename(e) {
        this.setState({
            state_name: e.target.value
        });
    }
    onChangeZip(e) {
        this.setState({
            zip: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            full_name: this.state.full_name,
            father_name: this.state.father_name,
            mother_name: this.state.mother_name,
            dob: this.state.dob,
            profession: this.state.profession,
            present_add: this.state.present_add,
            parmanant_add: this.state.parmanant_add,
            phone: this.state.phone,
            email: this.state.email,
            user_name: this.state.user_name,
            password: this.state.password,
            marital: this.state.marital,
            nid_num: this.state.nid_num,
            branch: this.state.branch,
            gender: this.state.gender,
            city: this.state.city,
            state_name: this.state.state_name,
            zip: this.state.zip
        };

        axios.post('http://localhost/dbms-bank-backend/insert.php', obj)
            .then(res => console.log(res.data));


        this.setState({
            full_name: '',
            father_name: '',
            mother_name: '',
            dob: '',
            profession: '',
            present_add: '',
            parmanant_add: '',
            phone: '',
            email: '',
            user_name: '',
            password: '',
            marital: '',
            gender: '',
            nid_num: '',
            branch: '',
            city: '',
            state_name: '',
            zip: ''
        })
    };
    render() {
        return (
            <>
                <Container>
                    <div className="sec-head">
                        <h2>Open New Account</h2>
                    </div>

                    <Form id="form" onSubmit={this.onSubmit}>
                        <Row className="md-3">
                            <Form.Group as={Col}>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Full Name" value={this.state.full_name} onChange={this.onChangeFullname} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Father's Name</Form.Label>
                                <Form.Control type="text" placeholder="Father Name" value={this.state.father_name} onChange={this.onChangeFathername} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Mother's Name</Form.Label>
                                <Form.Control type="text" placeholder="Mother Name" value={this.state.mother_name} onChange={this.onChangeMothername} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Date Of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Brith date" value={this.state.dob} onChange={this.onChangeDob} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label> Present Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" value={this.state.present_add} onChange={this.onChangePresentAdd} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Parmanant address</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" value={this.state.parmanant_add} onChange={this.onChangeParmanantAdd} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone"  value={this.state.phone} onChange={this.onChangePhone} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Profession</Form.Label>
                                <Form.Control type="text" placeholder="Profession" value={this.state.profession} onChange={this.onChangeProfession} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" value={this.state.user_name} onChange={this.onChangeUsername} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangePassword} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control type="text" placeholder="gender" value={this.state.gender} onChange={this.onChangeGender} />
                            </Form.Group>


                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Marital Status</Form.Label>
                                <Form.Control type="text" placeholder="Marital Status" value={this.state.marital} onChange={this.onChangeMaritalStatus} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>NID Number</Form.Label>
                                <Form.Control type="number" placeholder="NID Number" value={this.state.nid_num} onChange={this.onChangeNid} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Branch</Form.Label>
                                <Form.Control type="text" placeholder="Branch" value={this.state.branch} onChange={this.onChangeBranch} />
                            </Form.Group>
                            
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City" value={this.state.city} onChange={this.onChangeCity} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State name" value={this.state.state_name} onChange={this.onChangeStatename} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="number" placeholder="zip" value={this.state.zip} onChange={this.onChangeZip} />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3">
                            <input className="btn btn-primary" type="submit" value="Register New Customer" />
                        </Form.Group>
                    </Form>
                </Container>
            </>
        );
    }
}

export default AddCustomer;