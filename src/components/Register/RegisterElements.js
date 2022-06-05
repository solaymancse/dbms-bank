import  styled  from 'styled-components';

export const H2 = styled.h2`
    font-size: 14px;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h1{
        font-size: 16px;
        padding: 5px;
    }
    h1:hover{
        background-color: red;
        cursor: pointer;
        color: #fff;
        
    }
    
`
export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 700px;

`
export const Input = styled.input`
   padding: 10px;
   margin-bottom: 10px;
   width: calc(100% / 2 - 20px);
  outline: none;
`
export const Button = styled.button`
   background-color: #3FACDA;
   width: 100%;
   margin-top: 20px;

   &:hover{
       background-color: #333;
   }
`