import  styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 30px 180px 100px;
    display: flex;
    gap: 10px;

    @media (max-width: 991px){
    margin: 0 10px;
    flex-direction: column;
  }
`
export const CardContainer = styled.div`
    width: 100%;
    height: 230px;
    overflow: hidden;
    border: none;
    padding: 20px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

 
`
export const CardBody = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
 
`
export const Title = styled.h4`
      color: gray;
    font-weight: 700;
    text-align: center;
    font-size: 16px;
`
export const Icon = styled.div`
    font-size: 30px;
    color: #3FACDA;
    margin-bottom: 10px;
`
export const Content = styled.div`


     p{
        color: gray;
        display: flex;
        text-align: justify;
        margin-bottom: 30px;
       
    
     }
     a {
         font-size: 14px;
    text-decoration: none;
    color: #fff;
    background: #3FACDA;
    padding: 7px 10px;
    font-weight: 700;
   
}
a:hover {
    color: #fff;
    background: #333;
}
`