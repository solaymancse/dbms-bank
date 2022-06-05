import  styled  from 'styled-components';

export const Wrapper = styled.div`
    margin: 30px 180px;
    display: flex;
    gap: 70px;
`
export const Img = styled.img``
export const Desc = styled.p`
    display: flex;
    justify-content: center;
    text-align: justify;
    line-height: 30px;
`
export const H1 = styled.h1`
    margin: 30px 0;
    font-size: 30px;
    color: #333;
`
export const Links = styled.a`
margin-top: 30px;
    text-decoration: none;
    color:#fff;
    background-color: #3facda ;
    padding: 10px;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    font-weight: bold;

    &:hover{
        color: #fff;
    }
`
export const Right = styled.div`
 
    display: flex;
    flex-direction: column;
    text-align: start;
`