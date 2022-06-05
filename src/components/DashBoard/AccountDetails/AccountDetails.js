import React, { useState } from "react";

import {
  Container,
  Top,
  Left,
  Right,
  Bottom,
  H1,
} from "./AccountDetailsElements";
import { FcSearch } from "react-icons/fc";
import { RegisterModal } from "./../../Register/RegisterModal";
import { ListTable } from "../ListTable/ListTable";

export const AccountDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Top>
        <Left>
          <FcSearch />
          <input type="text" placeholder="Search Account"/>
        </Left>
        <Right>
          <H1 onClick={openModal}>Open New Accout</H1>
        </Right>
      </Top>
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Bottom>
        <ListTable/>
      </Bottom>
    </Container>
  );
};
