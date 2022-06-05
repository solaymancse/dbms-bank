import React from 'react'
import { Wrapper,Img,Right,H1,Desc,Links } from '../InvestingBasics/InvestingBasicsElements';
import img from '../.././Assets/pic2.jpg'


export const FindCreditCard = () => {
  return (
    <Wrapper>
      <div>
        <Img src={img} alt="/"/>
      </div>
      <Right>
        <div><H1>Find the card that’s right for you. Explore the benefits.</H1></div>
        <div><Desc>Get the financial freedom you deserve. Credit cards offer exceptional benefits, rewards, services and spending power that can help make your financial and personal dreams come true.</Desc></div>
        <Links href='/'>Learn More</Links>
      </Right>

    </Wrapper>
  )
}
