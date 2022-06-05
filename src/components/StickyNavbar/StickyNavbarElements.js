import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Div = styled.div``;
export const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #3facda;
  color: #fff;
  font-weight: bold;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 0 20px;
  cursor: pointer;
  font-weight: 600;


  &:after {
    content: "";
    height: 3px;
    width: 0;
    background-color: #3facda;
    position: absolute;
    transition: 0.3s;
    left: 0;
    bottom: -10px;
  }
  &:hover:after {
    width: 100%;
  }
`;
export const Img = styled.img`
  height: 40px;
  width: 150px;
`;
export const Nav = styled.div`
  display: flex;
`;
export const Item = styled.div`
  position: relative;
  margin-right: 20px;
`;
