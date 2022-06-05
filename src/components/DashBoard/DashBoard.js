import React, { useEffect, useState } from "react";

import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Routes, Route } from "react-router-dom";
import "./DashBoard.css";
import { Profile } from "./Profile/Profile";
import img from "../../Assets/profile.png";
import {
  Wrapper,
  Content,
  Navbar,
  Right,
  RightDiv,
  H2,
  Desc,
  TitleDiv
} from "./DashboardElements";

import { DashSideBar } from "./DashSidebar/DashSideBar";
import { AiOutlineSearch } from "react-icons/ai";
import { Register } from "../Register/Register";
import axios from "axios";
import { useSelector } from "react-redux";
import { DashHome } from "./DashHome/DashHome";

import { AccountDetails } from "./AccountDetails/AccountDetails";
import { Transaction } from "./Transaction/Transaction";

axios.defaults.withCredentials = true;
let firstRender = true;

const DashBoard = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:5000/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <DashSideBar />
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
                {user && <H2>{user.name}</H2>}
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
            <Route path="profile" element={<Profile />} />
            <Route path="account_details" element={<AccountDetails/>}/>
            <Route path="transaction" element={<Transaction />} />
            <Route path="register" element={<Register />} />
           

          </Routes>

      </Content>
    </Wrapper>
  );
};

export default DashBoard;
