import React, { useState } from "react";

import Modal from "react-modal";
import { H2, Top, Button, InputBox, Input } from "./RegisterElements";
import { useNavigate } from "react-router-dom";
import axios from "axios";

Modal.setAppElement("#root");
export const RegisterModal = ({ modalIsOpen, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "30px",
    },
  };

  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    accountNumber: "",
    address: "",
    phone: "",
    initDeposit: "",
  });
  console.log(inputs);
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/customer/customerSignup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        accountNumber: inputs.accountNumber,
        address: inputs.address,
        phone: inputs.phone,
        initDeposit: inputs.initDeposit,
      })
      .catch((err) => console.log(err));
    const data = await res.data;

    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => history("/admin/dashboard/account_details"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Top>
          <H2>Register New Customer</H2>
          <h1 onClick={closeModal}> X </h1>
        </Top>

        <form onSubmit={handleSubmit}>
          <InputBox>
            {" "}
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Full Name"
              required
            />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              placeholder="Email"
              required
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              placeholder="Password"
              required
            />
            <Input
              type="number"
              name="accountNumber"
              onChange={handleChange}
              value={inputs.accountNumber}
              placeholder="Account Number / NID Number"
              required
            />
            <Input
              type="text"
              name="address"
              onChange={handleChange}
              value={inputs.address}
              placeholder="Address"
              required
            />
            <Input
              type="number"
              name="phone"
              onChange={handleChange}
              value={inputs.phone}
              placeholder="Phone Number"
              required
            />
            <Input
              type="number"
              name="initDeposit"
              onChange={handleChange}
              value={inputs.initDeposit}
              placeholder="Initail Deposit"
              required
            />
          </InputBox>

          <Button type="submit">Register</Button>
        </form>
      </Modal>
    </div>
  );
};
