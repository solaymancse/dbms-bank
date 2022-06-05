import styled from "styled-components";
import img from "../../../Assets/bg4.jpg";
export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  padding: 100px 200px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  z-index: 1;
  position: absolute;
`;
export const Left = styled.div`
  background: #fff;
  width: 400px;
  height: 630px;
  padding: 0 20px;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const ProImg = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  z-index: 9;
  position: relative;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Top = styled.div`
  width: 500px;
  height: 300px;
  padding: 0 20px;
  border-radius: 20px;
  background: #fff;
  padding: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Bottom = styled.div`
  width: 500px;
  height: 300px;
  padding: 0 20px;
  border-radius: 20px;
  background: #fff;
  padding: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Detail = styled.div`
  
  a {
    text-decoration: none;
    color: #fff;
    padding: 5px 20px;
    background-color: #3facda;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
export const TopDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  color: gray;
`;
export const BottomDetail = styled.div``;

export const Phone = styled.div``;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.3px solid lightgray;
  padding-bottom: 15px;
  margin-bottom: 30px;

`;
export const Links = styled.p`
        text-decoration: none;
        padding: 5px 20px;
        background-color: lightgray;
        color: black;
        border-radius: 15px;
        font-size: 14px;
        font-family: "Signika Negative", sans-serif;
      
`
export const H2 = styled.h2`
  font-size: 16px;
  font-family: "Signika Negative", sans-serif;
  font-weight: 600;
`;
export const BottomDiv = styled.div``;
export const Account = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Number = styled.div``;
export const P = styled.p``;
export const Bal = styled.div`
     display: flex;
    justify-content: space-between;
`;
export const H3 = styled.h3`
    font-size: 16px;
`;
export const H4 = styled.h4`
  font-family: "Cormorant", serif;
  font-size: 17px;
  color: gray;
  border-bottom: 0.3px solid lightgray;
  padding-top: 5px;
  padding-bottom: 10px;
`;
export const Amount = styled.div`
   
`;
