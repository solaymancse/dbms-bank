import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 15px;
  justify-content: space-between;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0,0,0,0.47);
  box-shadow: 2px 4px 10px 1px rgba(201,201,201,0.47);
  border-radius: 5px;
  height: 150px;
  
`;
export const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  
`;
export const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const Title = styled.div`

  
`;
export const Counter = styled.div`
font-size: 24px;

`;
export const Link = styled.a`
font-size: 12px;
text-decoration: none;
color: gray;
border-bottom: 1px solid lightgray;


`;
export const Percentage = styled.div`
font-size: 16px;
display: flex;
align-items: center;
color: red;

`;
export const Icon = styled.div`
font-size: 20px;
display: flex;
justify-content: center;
align-self: flex-end;
padding: 5px;
border-radius: 5px;
color: #fff;
border: 1px solid none;
background-color: #c70039;

`;
