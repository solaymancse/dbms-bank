import React from 'react'

import { BussinessBankingData } from '../../Data'
import { Wrapper,Img,Right,H1,Desc,Links } from './../InvestingBasics/InvestingBasicsElements';

export const BussinessBanking = () => {
  return (
      <>
      {
          BussinessBankingData.map((data)=> (
            <Wrapper>
            <div>
              <Img src={data.img} alt="/"/>
            </div>
            <Right>
              <div><H1>{data.title}</H1></div>
              <div><Desc>{data.desc}</Desc></div>
              <Links href='/'>Learn More</Links>
            </Right>
      
          </Wrapper>
          ))

      }
      
   
      </>
  )
}
