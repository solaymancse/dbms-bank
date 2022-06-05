import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Small = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  color: #333;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-left: 20px;
`;
