// import React from "react";

// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { authActions } from "../../../store/index";
// import { SidebarContainer,Img,Top,Icon,H3,SideBar,Footer,Title,Div } from "../../DashBoard/DashboardElements";
// import { RiDashboardFill } from 'react-icons/ri';
// import logo from '../../../Assets/logo1.png'
// import { CustomerSidebarData } from './../../../Data';
// import { NavLink } from 'react-router-dom';
// import { AiFillSetting } from 'react-icons/ai';
// import { MdOutlineExitToApp } from 'react-icons/md';
// axios.defaults.withCredentials = true;

// export const CustomerSideBar = () => {
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   console.log(isLoggedIn);
//   const dispatch = useDispatch();
//   const sendLogoutReq = async () => {
//     const res = await axios.post("http://localhost:5000/customer/logout", null, {
//       withCredentials: true,
//     });
//     if (res.status === 200) {
//       return res;
//     }

//     return new Error("Enable to logout. Please try again");
//   };
//   const handleLogout = () => {
//     sendLogoutReq().then(() => dispatch(authActions.logout()));
//   };
//   return (
    
    
//       <SidebarContainer>
//         <Img src={logo} alt="logo" />
//         <Top to="/user/dashboard">
//           <Icon>
//             <RiDashboardFill />
//           </Icon>
//           <H3>Dashboard</H3>
//         </Top>
//         {CustomerSidebarData.map((data) => (
//           <SideBar>
//             <icon>{data.icon}</icon>
//             <NavLink to={data.link}>{data.title}</NavLink>
//           </SideBar>
//         ))}
//         <Footer>
//           <Title>Activities</Title>
//           <Div>
//             <icon>
//               <AiFillSetting />
//             </icon>
//             <H3>Setting</H3>
//           </Div>
//           <Div>
//             <icon>
//               <MdOutlineExitToApp />
//             </icon>
//             <H3>
//               <NavLink to="/login" onClick={handleLogout}>
//                 Log Out
//               </NavLink>
//             </H3>
//           </Div>
//         </Footer>
//       </SidebarContainer>

//   );
// };
