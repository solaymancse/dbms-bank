import React from 'react'
import { Wrapper,Img,Right,H1,Desc,Links } from './../InvestingBasics/InvestingBasicsElements';
import img from '../.././Assets/pic4.jpg'

export const CardBenefits = () => {
  return (
    <Wrapper>
      <div>
        <Img src={img} alt="/"/>
      </div>
      <Right>
        <div><H1>Debit and Credit Card Protection Tips to Prevent Financial Fraud</H1></div>
        <div><Desc>Escape from the daily routine and relax at a spa, go on a thrill-seeking adventure, or take in a round of golf with pro instruction. Access restaurant reviews and make dining reservations online.</Desc></div>
        <Links href='/'>Learn More</Links>
      </Right>

    </Wrapper>
  )
}
