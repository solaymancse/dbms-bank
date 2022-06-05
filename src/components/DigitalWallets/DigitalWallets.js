import React from 'react'
import { Wrapper,Img,Right,H1,Desc,Links } from './../InvestingBasics/InvestingBasicsElements';
import img from '../.././Assets/pic5.jpg'

export const DigitalWallets = () => {
  return (
    <Wrapper>
    <div>
      <Img src={img} alt="/"/>
    </div>
    <Right>
      <div><H1>Privacy, Innovation and Security in the Digital Payments World</H1></div>
      <div><Desc>Easy – Load credit, debit, reloadable prepaid or small business cards from participating Alister Bank issuers. Any of your cards can be used across hundreds of thousands of supported merchants.</Desc></div>
      <Links href='/'>Learn More</Links>
    </Right>

  </Wrapper>
  )
}
