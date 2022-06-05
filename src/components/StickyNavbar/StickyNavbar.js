import React, { useState, useEffect } from "react";
import { Container, Modal } from "react-bootstrap";

import "./Sticky.css";

import { Links, Button, Img, Nav, Item } from "./StickyNavbarElements";

import { BiUser } from "react-icons/bi";
import { Close } from "../Header/HeaderElements";
import { GrFormClose } from "react-icons/gr";
import Login from "../Login/Login";
import logo from "../.././Assets/logo1.png";

export const StickyNavbar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [show, setShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Close onClick={props.onHide}>
          <GrFormClose />
        </Close>
        <Login />
      </Modal>
    );
  }

  const controllNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_white d-none d-lg-block"}`}>
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-wrap align-items-center justify-content-between ">
              <div>
                <Img src={logo} alt="" />
              </div>
              <Nav>
                <Item>
                  <Links to="/">Home</Links>
                </Item>
                <Item>
                  <Links to="/services">Services</Links>
                </Item>
                <Item>
                  <Links to="/about">About</Links>
                </Item>
                <Item>
                  <Links to="/blog">Blog</Links>
                </Item>
                <Item>
                  <Links to="/contact">Contact</Links>
                </Item>
              </Nav>
              <div className="d-flex flex-wrap align-items-center">
                <Button onClick={() => setModalShow(true)}>
                  <BiUser /> Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
