import styled from "styled-components";

export const Items = styled.div`
  height: 50px;
  margin: 20px 180px 5px 180px;

  @media  (max-width: 991px){
      display: none;
  }
`;
export const List = styled.li`
  list-style: none;
  font-size: 14px;
  display: flex;
  padding: 10px;
  background: #3facda;
  color: #fff;
  border-right: 1px solid #fff;
  font-family: "Roboto", sans-serif;
  float: right;
  cursor: pointer;
  transition: 0.5s;
  justify-content: center;

  &:hover {
    color: #333;
    background-color: #ffb919;
  }
`;
