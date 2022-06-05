import { InvestingBasics } from "../InvestingBasics/InvestingBasics";

import { Wrapper, H1, Top, Content, Links } from "./FeaturesSectionTwoElements";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { FindCreditCard } from "./../FindCreditCard/FindCreditCard";
import { PaymentTech } from "./../PaymentTech/PaymentTech";
import { CardBenefits } from "./../CardBenefits/CardBenefits";
import { DigitalWallets } from "./../DigitalWallets/DigitalWallets";

const FeatureSectionTwo = () => (
  <Wrapper>
    <H1>Business Banking</H1>
    <Top>
      <Links to="investing">Investing Basics</Links>
      <Links to="creditcard">Find a Credit Card</Links>
      <Links to="paymenttech">Payment Technologies</Links>
      <Links to="cardbenefits">Card Benefits</Links>
      <Links to="wallets">Digital Wallets</Links>
    </Top>
    <Content>
      <Routes>
        <Route path="investing" element={<InvestingBasics />} />
        <Route path="creditcard" element={<FindCreditCard />} />
        <Route path="paymenttech" element={<PaymentTech />} />
        <Route path="cardbenefits" element={<CardBenefits />} />
        <Route path="wallets" element={<DigitalWallets />} />
      </Routes>
    </Content>
  </Wrapper>
);

export default FeatureSectionTwo;
