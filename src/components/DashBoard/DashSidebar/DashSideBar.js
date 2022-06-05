import React from 'react'

import { SidebarData } from '../../../Data'
import { SidebarContainer,Img ,Top,Icon,H3,SideBar,Footer,Title,Div} from '../DashboardElements'
import { RiDashboardFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { AiFillSetting } from 'react-icons/ai';
import { MdOutlineExitToApp } from 'react-icons/md';
import logo from '../../../Assets/logo1.png'

import  axios  from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './../../../store/index';
 axios.defaults.withCredentials = true

export const DashSideBar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/api/logout", null , {
      withCredentials: true
    });
    if( res.status === 200){
      return res
    }

    return new Error("Enable to logout. Please try again")
  };
  const handleLogout = () => {
    sendLogoutReq().then(()=> dispatch(authActions.logout()));
  };
  return (
    <SidebarContainer >
    <Img src={logo} alt="logo" />
    <Top to="/user/dashboard">
      <Icon>
        <RiDashboardFill />
      </Icon>
      <H3>Dashboard</H3>
    </Top>
    {SidebarData.map((data) => (
      <SideBar>
        <icon>{data.icon}</icon>
        <NavLink to={data.link}>{data.title}</NavLink>
      </SideBar>
    ))}
    <Footer>
      <Title>Activities</Title>
      <Div>
        <icon>
          <AiFillSetting />
        </icon>
        <H3>Setting</H3>
      </Div>
      <Div>
        <icon>
          <MdOutlineExitToApp />
        </icon>
        <H3><NavLink to="/login"  onClick={handleLogout}>Log Out</NavLink></H3>
      </Div>
    </Footer>
  </SidebarContainer>
  )
}
