import React from 'react'

import { Wrapper, Img,Right,H1,Desc,Links } from  './InvestingBasicsElements'
import img from '../../Assets/pic1.jpg'

export const InvestingBasics = () => {
  return (
    <Wrapper>
      <div>
        <Img src={img} alt="/"/>
      </div>
      <Right>
        <div><H1>Nothing is impossible. We can help you achieve your goals!</H1></div>
        <div><Desc>The UK’s largest banking groups are required to comply with ring-fencing requirements from 1 January 2019. Find out more about our approach and what it means for you</Desc></div>
        <Links href='/'>Learn More</Links>
      </Right>

    </Wrapper>
  )
}
