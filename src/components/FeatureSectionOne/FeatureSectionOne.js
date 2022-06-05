import { FeatureOneData } from "../../Data";
import { Wrapper,H1,Container,Div,Icon ,H2, Desc} from "./FeatureSectionOneElements";

const FeatureSectionOne = () => (
 
  <Wrapper>
    <div>
      <H1>Presenting products and services that are right for you</H1>
    </div>
   <Container>
   {FeatureOneData.map((data) => (
      <Div>
        <Icon>{data.icon}</Icon>
        <H2>{data.title}</H2>
        <Desc>{data.desc}</Desc>
        <a href="/">{data.link}</a>
      </Div>
    ))}
   </Container>
  </Wrapper>
);

export default FeatureSectionOne;
