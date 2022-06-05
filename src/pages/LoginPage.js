import React from 'react'

import Login from '../components/Login/Login'
import styled  from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 600px;
    transform: translate(-50%,50%);
   

`
export const LoginPage = () => {
  return (
    <Wrapper>
       <Container>
       <Login/>
       </Container>
    </Wrapper>
  )
}
