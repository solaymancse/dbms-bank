import React from 'react'
import { IoMdArrowDropup } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'

import { Container,Left,Right,Title,Counter,Link,Percentage,Icon } from './WidgetElements'

export const Widget = ({type}) => {

    let data;

    //temporary
    const amount = 100;
    const diff = 20;
    switch(type){
        case "customer":
            data = {
                title: "Customer's",
                isMoney: false,
                link: 'See All Customer',
            };
            break;
        case "transaction":
            data = {
                title: "Transaction",
                isMoney: false,
                link: 'See All Transaction',
            };
            break;
        case "deposite":
            data = {
                title: "Deposite",
                isMoney: false,
                link: 'See All Deposite',
            };
            break;
        case "withdraw":
            data = {
                title: "Withdraw",
                isMoney: false,
                link: 'See All Withdraw',
            };
            break;
        default:
            break;

    }
  return (
    <Container>
        <Left>
            <Title>{data.title}</Title>
            <Counter>{data.isMoney && "$" } {amount}</Counter>
            <Link>{data.link}</Link>
        </Left>
        <Right>
            <Percentage>
                <IoMdArrowDropup/>
                {diff}%
            </Percentage>
           <Icon> <BiUser/></Icon>
        </Right>

    </Container>
  )
}
