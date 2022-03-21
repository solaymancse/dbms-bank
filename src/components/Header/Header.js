import React from "react";
import "./Header.css";
import { Link } from "@mui/material";
import logo from "../../Assets/dbms-bank.png";

const Header = () => {
  return (
    <>
      <div className="top-nav container-marg">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="nav-items">
          <Link to="/">Home</Link>
          <Link to="/about">About DBMS</Link>
          <Link to="/product_Service">Product & Service</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/career">Career</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
