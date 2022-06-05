import React from "react";

import { Wrapper, Content, H2, Div, Top, Down,Icon } from "./FooterElements";
import { BsFacebook, BsArrowRightCircleFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
export const Footer = () => {
  const array1 = [
    "About DBMS Bank",
    "Communities",
    "DBMS Bank Group",
    "Careers",
    "Website Disclaimer",
  ];
  const array2 = [
    "Internet Banking",
    "Business Loans",
    "Rates and Charges",
    "Glossary",
    "E-Banking",
  ];
  const array3 = ["About us", "Jobs", "Press and media", "Contact us", "Legal"];

  return (
    <Wrapper>
      <Content>
        <Div>
          <H2>DBMS BANK</H2>
          {array1.map((data) => (
            <ul>
              <a href="/">
                {" "}
                <BsArrowRightCircleFill /> {data}
              </a>
            </ul>
          ))}
        </Div>
        <Div>
          <H2>Banking with Us</H2>
          {array2.map((data) => (
            <ul>
              <a href="/">
                {" "}
                <BsArrowRightCircleFill /> {data}
              </a>
            </ul>
          ))}
        </Div>
        <Div>
          <H2>Customer Service</H2>
          {array3.map((data) => (
            <ul>
              <a href="/">
                {" "}
                <BsArrowRightCircleFill /> {data}
              </a>
            </ul>
          ))}
        </Div>
        <Div>
          <H2>Subscribe</H2>
          <Top>
            <input />
            <button>Subscribe</button>
          </Top>
          <Down>
            <Icon>
              <BsFacebook />
            </Icon>
            <Icon>
              <AiFillTwitterCircle />
            </Icon>
            <Icon>
              <AiFillInstagram />
            </Icon>
            <Icon>
              <AiFillYoutube />
            </Icon>
          </Down>
        </Div>
      </Content>
    </Wrapper>
  );
};
