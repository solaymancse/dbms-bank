import styled from "styled-components";

export const Container = styled.div`
  height: 600px;
  margin-bottom: 100px;
  @media (max-width: 991px){
    height: 500px;
  }

`;
export const Content = styled.div`
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  height: 600px;
  background-size: cover;
  background-position: center;

  @media (max-width: 991px){
    height: 500px;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 150px 0;
  h2 {
    color: #fff;
    font-weight: 700;
    margin-bottom: 50px;
    font-size: 90px;
    font-family: "Playfair Display", serif;
    z-index: 100000;
    

    @media (max-width: 991px) {
      font-size: 30px;
    }
  }
  p {
    color: #fff;
    font-weight: bold;
    margin-bottom: 50px;
    font-family: "Playfair Display", serif;

    @media (max-width: 991px) {
      font-size: 24px;
    }
  }
  a {
    text-decoration: none;
    padding: 10px 20px;
    border: none;
    color: #fff;
    font-weight: bold;
    background-color: #3facda;
    width: 200px;
    
  }

  @media (max-width: 991px) {
    margin: auto;
    padding: 30px 10px;
    text-align: center;
  }
`;
