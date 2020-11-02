import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar handler={menuHandler} />
      <Sidebar isOpen={isOpen} handler={menuHandler} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Tools for Coding</HeroH1>
          <HeroP>Improve your productivity</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
