import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
`;
export const Container = styled.div`
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  
  
`;
export const Left = styled.div`
  flex: 1;
  background-color: #3facda;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 120px;
  height: 150px;
`;
export const Right = styled.div`
  padding: 50px;
  flex: 1;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    outline: none;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #3facda;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`;
export const H1 = styled.h1`
  margin-top: 30px;
  color: #333;
  font-size: 20px;
  text-align: center;
  font-family: "Lora", serif;
`;
export const Icon = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
`;
