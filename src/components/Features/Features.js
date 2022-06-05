import React from "react";

import { Link } from "react-router-dom";
import { GiReceiveMoney, GiPriceTag } from "react-icons/gi";
import { Wrapper,CardContainer,CardBody,Title,Icon,Content } from "./FeaturesElements";

const Features = () => {
  function Card(props) {
    return (
      <CardContainer>
        <CardBody>
          <Title>{props.title}</Title>
            <Icon>{props.icon}</Icon>
            <Content>
              <p>{props.p}</p>
              <Link to="/"className="card-btn">
                {props.golink}
              </Link>
            </Content>
        </CardBody>
      </CardContainer>
    );
  }
  return (
    <>
      <Wrapper>
        <Card
          title="INVESTMENTS"
          icon={<GiReceiveMoney />}
          p="Manage all your finances with a click wide variaty Manage all your "
          golink="INVEST ONLINE"
        />
        <Card
          title="COMPARE & BUY"
          icon={<GiPriceTag />}
          p="Real time price comparison wide variaty ***T&C Apply"
          golink="SHOP NOW"
        />
        <Card
          title="LOANS & CARD"
          icon={<GiReceiveMoney />}
          p="DBMS bank offers wide variaty of loans & card ***T&C Apply"
          golink="APPLY ONLINE"
        />
        <Card
          title="INSURANCE"
          icon={<GiReceiveMoney />}
          p="Protect Everyone you love  wide variaty ***T&C Apply"
          golink="PROTECT ONLINE"
        />
        {/* <Card title="WAYS TO BANK" icon={<GiReceiveMoney/>} p="Manage all your finances with a click" golink="FIND WAYS"/> */}
      </Wrapper>
    </>
  );
};

export default Features;
