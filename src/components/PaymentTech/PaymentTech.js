import React from 'react'
import { Wrapper,Img ,Right,H1,Desc,Links} from './../InvestingBasics/InvestingBasicsElements';
import img from '../.././Assets/pic3.jpg'
export const PaymentTech = () => {
  return (
    <Wrapper>
      <div>
        <Img src={img} alt="/"/>
      </div>
      <Right>
        <div><H1>Transforming the way you pay. Explore new ways to pay</H1></div>
        <div><Desc>We offer an array of products that make it possible to pay anywhere, on any device. We’re bringing solutions to life to change the way you pay – through our innovative digital wallet service</Desc></div>
        <Links href='/'>Learn More</Links>
      </Right>

    </Wrapper>
  )
}
