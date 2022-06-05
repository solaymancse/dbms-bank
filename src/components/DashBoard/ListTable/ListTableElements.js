import styled  from 'styled-components';

export const Wrapper = styled.div`

a{
    text-decoration: none;
    color: ${props => props.color};
}
   
`;
export const Img = styled.img`

    height: 50px;
    width: 50px;
    border-radius: 50%;
`;