import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 170px;

  @media (min-width: 320px) and (max-width: 480px){
      padding: 0 10px;
      margin: 0;
  }
`;
export const NavItems = styled.div`
    display: flex;

    @media (min-width: 320px) and (max-width: 480px){
    display: none;
  }
`;
export const Img = styled.img`

@media (min-width: 320px) and (max-width: 480px){
      width: 80px;
      height: 35px;
  }
`;
export const Button = styled.div`
    border: 1px solid lightgray;
    gap: 5px;
    padding: 7px 30px;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #333;
    font-weight: bold;

    &:hover{
        background-color: #3FACDA;
        cursor: pointer;
        border: none;
        color: #fff;
    }
`;
export const Right = styled.div`
    margin-right: 10px;

    @media (min-width: 320px) and (max-width: 480px){
    display: none;
  }
`;

export const Links = styled(NavLink)`
    text-decoration: none;
    color: #333;
    padding-right: 20px;
    position: relative;
    letter-spacing: 0.5;
    font-size: 16px;
    
    &:after{
        content: '';
        position: absolute;
        width: 0;
        height: 3px;
        background-color: #3FACDA;
        left: 0;
        bottom: -10px;
        transition: 0.3s;

    }

    &:hover:after{
        color: #333;
        width: 100%;
        
    }
`;
export const Item = styled.div`
    margin-right: 20px;

`;
export const DropDown = styled.div`
   width: 220px;
   height: 105px;
   background-color: #fff;
   border: .5px solid lightgray;
   position: absolute;
   margin-left: 15px;
   display: none;
   transition: opacity .3s ease-in-out .1s ,margin-top .3s ease-in-out .1s;
   
   
   a{
       text-decoration: none;
       color:#333;
       border-bottom: 1px solid lightgray;
       display: flex;
       flex-direction: column;
       padding: 5px 10px;
       

       :nth-child(3){
           border-bottom: none;
           
       }
       &:hover{
           background-color: #3FACDA;
           color: #fff;
           border: none;
       }
   }
 
`;
export const Items = styled.div`
    margin-right: 10px;
   &:hover ${DropDown} {
   
       display: block;
     
   }
`;
export const Close = styled.div`

    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
   
`;

