import React from "react";

import * as FcIcon from "react-icons/fc";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { Wrapper, Links, Small,Center } from "./ContactElements";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <Wrapper>
      <div>
        <MdIcon.MdLocationPin />
        <Small>138 Gulshan Avenue, Circle 2, Gulshan, Dhaka, Bangladesh</Small>
      </div>
      <Center>
        <FaIcon.FaPhoneVolume />
        <Small>0293829-892</Small>
        <FcIcon.FcAssistant />
        <Small>1583</Small>
      </Center>
      <div>
        <Links to="/">
          {" "}
          <FaFacebook />
        </Links>
        <Links to="/">
          <BsTwitter />
        </Links>
        <Links to="/">
          {" "}
          <AiOutlineInstagram />
        </Links>
        <Links to="/">
          {" "}
          <FaPinterest />
        </Links>
      </div>
    </Wrapper>
  );
};

export default Contact;
