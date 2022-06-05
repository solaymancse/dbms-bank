import React, { useState } from "react";

import swal from 'sweetalert';
import img from "../../Assets/logo_white1.png";
import { Wrapper, Left, Right, Img, Button, H1, Icon } from "./LoginElements";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email:"",
    password:"",
  });
  
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev, 
      [e.target.name]: e.target.value,
    }));
   
  };
  const sendRequest = async () => {
    const res = await axios
    .post("http://localhost:5000/customer/customerlogin",{
      email: inputs.email,
      password: inputs.password,
    }).catch((err) => console.log(err));

    const data = await res.data;
      swal({
        title: "Good job!",
        text: data.message,
        icon: "success",
        button: "Aww yiss!",
      });
     
    return data;
  };
  const  handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/customer/dashboard")).catch(err => {
      swal({
        title: "Oops!",
        text: "Invaid username or password",
        icon: "error",
        button: "Ok!",
      });
    });
  }

  return (
    <Wrapper>
      <Left>
        <Img src={img} alt="/" />
      </Left>
      <Right>
        <form onSubmit={handleSubmit}>
        <H1>Log Into DBMS</H1>
        <Icon>
          <FaUserTie />
        </Icon>
          <input
          name="email"
            value={inputs.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
          />
          <input
          name="password"
            value={inputs.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
         
        <Button type="submit" style={{textDecoration:'none',color:'#fff'}}>Login</Button>
        </form>
      </Right>
    </Wrapper>
  );
};

export default Login;
