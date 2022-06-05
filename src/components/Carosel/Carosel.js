import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Wrapper, Img, H2, H3 } from "./CaroselElements";
import Slider from "react-slick";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";

export const Carosel = () => {
  const SliderData = [
    {
      img: `${ img1 }`,
      title: "Relief Fund In Place At Alister Bank: How You Can Help",
    },
    {
      img: `${ img2 }`,
      title: "When NOT Using Credit Cards Can Hurt You",
    },
    {
      img: `${ img3 }`,
      title: "Keep Your Children Safe From Financial Fraud",
    },
    {
      img: `${ img4 }`,
      title: "You're Making More Money Here's How to Solve",
    },
    {
      img:`${ img5 }`,
      title: "Help and Guidance: Personal Financial Advice Service",
    },
    {
      img: `${ img1 }`,
      title: "Keep Your Children Safe From Financial Fraud",
    },
  ];

 
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <H2> News and information</H2>
      <Slider {...settings}>
        {SliderData.map((data) => (
          <div>
            <Img src={data.img} alt="/" />
            <H3>{data.title}</H3>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};
