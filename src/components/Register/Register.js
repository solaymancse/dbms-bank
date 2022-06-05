import React, { useState } from "react";

import Modal from "react-modal";
import { RegisterModal } from "./RegisterModal";


Modal.setAppElement("#root");

export const Register = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  // form
  
  return (
    <div>
      <button onClick={openModal}>New Customer</button>
      <RegisterModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
};
