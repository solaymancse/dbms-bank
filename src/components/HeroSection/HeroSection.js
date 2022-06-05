import React from "react";

import { Container, Content,Div} from "./HeroSectionElements";
import Slider from "react-slick";
import slide1 from "../../../src/Assets/banner1.jpg";
import slide2 from "../../../src/Assets/banner2.jpg";
import slide3 from "../../../src/Assets/banner3.jpg";

const HeroSection = () => {
  const slideImg = [
    {
      img: `${slide1}`,
      title: "Insuring Your Future"
    },
    {
      img: `${slide2}`,
      title: "Mobile Banking"
    },
    {
      img: `${slide3}`,
      title: "Life Should Be easy"
    },
  ];
  const settings = {
    autoplay: true,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };



  return (
    <Container>
      <div>
        <Slider {...settings}>
          {slideImg.map((data) => (
            <Content background={data.img}>
                <Div>
                <h2>{data.title}</h2>
                    <p>Lorem ipsum is a placeholder text commonly used to <br/>demonstrate the visual form of a document or a <br/>typeface without</p>
                   <div> <a href="/login">Online Banking</a></div>
                </Div>
            
            </Content>
          ))}
        </Slider>
      </div>
      
    </Container>
  );
};

export default HeroSection;
