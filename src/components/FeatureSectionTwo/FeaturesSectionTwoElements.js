import  styled  from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 180px;
    text-align: center;

    @media (max-width: 991px){
        margin: 10px;
    }

`
export const H1 = styled.h1`
font-size: 20px;


`

export const Top = styled.div`
   height: 50px;
   margin-top: 50px;
   border-bottom: 1px solid lightgray;

`
export const Links = styled(NavLink)`
    text-decoration: none;
    color: #333;
    padding: 40px;

   

`
export const Content = styled.div`
    margin-top: 50px;
    

`