import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #333;
  padding: 30px 0;
 
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 275px;

  a {
    text-decoration: none;
    color: gray;
    cursor: pointer;
    gap: 10px;
    display: flex;
    align-items: center;
  }
  a:hover {
    color: #c70039;
  }
`;
export const Div = styled.div`

 flex: 1;
 margin-right: 10px;
 
`;
export const H2 = styled.h2`
  margin-left: 30px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
`;

export const Top = styled.div`
  margin-left: 30px;
  display: flex;
  padding: 5px;

  input {
    border: none;
    outline: none;
  }
  button {
    border: none;
    background-color: #3facda;
    color: #fff;
    padding: 7px;
  }
`;
export const Down = styled.div`
  margin-left: 30px;
  color: #fff;
  gap: 20px;
  display: flex;
  margin-top: 50px;
  padding: 10px;
  font-size: 16px;
`;
export const Icon = styled.div`
  cursor: pointer;
  &:hover{
  color: #3facda;
  }
`;
