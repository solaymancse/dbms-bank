import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
`;
export const SidebarContainer = styled.div`
  padding: 50px;
  flex: 1;
  height: 100vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Content = styled.div`
  flex: 10;
`;
export const Navbar = styled.div`
  padding: 0 200px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  height: 75px;
  display: flex;
  justify-content: space-between;

  input {
    border: none;
    outline: none;
    border-bottom: 0.5px solid lightgray;
    margin-left: 10px;
  }
`;
export const Right = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
`;
export const SideBar = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  text-align: center;
  align-items: center;

  a {
    text-decoration: none;
    color: gray;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }
`;
export const Top = styled(NavLink)`
color: #333;
text-decoration: none;
  display: flex;
  gap: 20px;
  margin: 80px 0px;
  border-bottom: 0.5px solid lightgray;
`;
export const Icon = styled.div`
  font-size: 17px;
`;
export const H3 = styled.h3`
  font-size: 18px;
  margin-top: 3px;
  color: gray;
`;
export const Footer = styled.div`
  margin-top: 150px;
`;
export const Div = styled.div`
  gap: 20px;
  display: flex;
`;
export const Title = styled.h4`
  border-bottom: 0.5px solid lightgray;
  color: #333;
  font-size: 18px;
`;
export const Img = styled.img`
  display: flex;
  justify-content: center;
  margin-left: -20px;
`;
export const WidgetContainer = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 10px;
  padding: 20px 50px;
`;
export const ListContainer = styled.div`
  margin: 0 50px;
  padding: 15px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 5px;
`;
export const ListTitle = styled.div`
  font-weight: 500;
  margin-bottom: 50px;
  color: gray;
`;
export const RightDiv = styled.div`
 display: flex;
 gap: 20px;
 justify-content: center;
 align-items: center;
 

`;
export const H2 = styled.h2`
 font-size: 14px;
 line-height: 5px;
`;
export const Desc = styled.p`
 font-size: 12px;
`;
export const TitleDiv = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 margin-top: 15px;
 


 `;
export const Main = styled.div`
 
 


 `;
