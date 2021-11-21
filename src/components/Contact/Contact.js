import React from 'react';
import './Contact.css';
import * as FcIcon from "react-icons/fc";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
 
    return (
        <Container fluid="md">
            <Row>
                <Col className="top-contact">
                    <MdIcon.MdLocationPin/><small>136 Gulshan Avenue, Circle 2, Gulshan, Dhaka, Bangladesh</small>
                    <FaIcon.FaPhoneVolume/><small>0293829-892</small>
                    <FcIcon.FcAssistant/><small>1583</small>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;