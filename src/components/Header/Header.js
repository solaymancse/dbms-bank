import React from "react";


import { BiUser } from "react-icons/bi";
import logo from "../../Assets/logo1.png";
import { GrFormClose } from 'react-icons/gr'

import {
  Container,
  Img,
  Right,
  Links,
  Button,
  Item,
  Items,
  DropDown,
  NavItems,
  Close,
} from "./HeaderElements";
import { Modal } from "react-bootstrap";
import Login from "./../Login/Login";


const Header = () => {
 
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Close onClick={props.onHide}><GrFormClose/></Close>
        <Login />
      </Modal>
    );
  }
  return (
    <>
      <Container>
        <div >
          <Img src={logo} alt="" srcset="" />
        </div>
        <NavItems>
          <Item>
            <Links to="/">Home</Links>
          </Item>
          <Items>
            <Links to="/about">About</Links>
            <DropDown >
              <a href="/about">About DBMS</a>
              <a href="/about">Products</a>
              <a href="/about">Services</a>
            </DropDown>
          </Items>
          <Item>
            <Links to="/product_Service">Product & Service</Links>
          </Item>
          <Item>
            <Links to="/product_Service">Post Types</Links>
          </Item>
          <Item>
            <Links to="/product_Service">News</Links>
          </Item>

          <Item>
            <Links to="/career">Career</Links>
          </Item>
        </NavItems>
        <Right>
          <Button onClick={() => setModalShow(true)}>
            <BiUser /> Login
          </Button>
        </Right>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Header;
