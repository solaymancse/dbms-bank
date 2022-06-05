import React from "react";

import {
  Wrapper,
  Content,
  Right,
  RightDiv,
  TitleDiv,
  H2,
  Desc,
} from "./../DashBoard/DashboardElements";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar } from ".././DashBoard/DashboardElements";
import { CustomerSideBar } from "./CustomerSideBar/CustomerSideBar";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import img from "../../Assets/profile.png";
import { Routes, Route } from "react-router-dom";
import { DashHome } from "./../DashBoard/DashHome/DashHome";
import { Transaction } from "./../DashBoard/Transaction/Transaction";
import { CustomerProfile } from './CustomerProfile/CustomerProfile';

export const CustomerDashboard = () => {
  return (
    <Wrapper>
      <CustomerSideBar />
      <Content>
        <Navbar>
          <div>
            <AiOutlineSearch />
            <input type="text" placeholder="Search" />
          </div>
          <Right>
            <Badge badgeContent={4} color="secondary">
              <NotificationsNoneOutlinedIcon color="action" />
            </Badge>
            <Badge badgeContent={4} color="primary">
              <MailOutlinedIcon color="action" />
            </Badge>
            <RightDiv>
              <TitleDiv>
                <H2>Name</H2>
                <Desc>Manager</Desc>
              </TitleDiv>
              <img
                src={img}
                alt="/"
                style={{ height: "50px", width: "50px" }}
              />
            </RightDiv>
          </Right>
        </Navbar>

        <Routes>
          <Route index element={<DashHome />} />
          <Route path="profile" element={<CustomerProfile />} />
    
          <Route path="transaction" element={<Transaction />} />
        </Routes>
      </Content>
    </Wrapper>
  );
};
