import React from 'react'

import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import styled  from 'styled-components';

const Container = styled.div`
    display: flex;
    text-align: center;

    height: 50px;
    justify-content: center;
    margin: 30px;
    `
const Span = styled.span`
    color: #c70039;
    font-weight: bold;
    `

export const CopyRight = () => {
  return (
    <Container>
        <p><AiOutlineCopyrightCircle/> 2022 - All Right Deserved || DBMS Bank<br/><Span>Developed by - Solayman</Span></p>
    </Container>
  )
}
