import React from 'react'
import { Navbar,Right } from '../DashboardElements'
import { AiOutlineSearch } from 'react-icons/ai';

import { NotificationsNoneOutlinedIcon } from '@mui/icons-material/NotificationsNoneOutlined';
import { MailOutlinedIcon } from '@mui/icons-material/MailOutlined';
import img from '../../../Assets/profile.png'
import Badge from "@mui/material/Badge";

export const DashNavbar = () => {
  return (
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
      <div>
        <img
          src={img}
          alt="/"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
    </Right>
  </Navbar>
  )
}
