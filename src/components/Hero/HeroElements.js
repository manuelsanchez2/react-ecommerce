import styled from "styled-components";
import ImgBg from "../../images/guy2.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 3rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const HeroH1 = styled.h1`
  font-size: clamp(2.2rem, 9vw, 4.7rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #484848;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1.8rem, 2.3vw, 2.8rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffffff;
  color: #484848;
  transition: 0.2s ease-out;
  text-transform: uppercase;
  border-radius: 25px;

  &:hover {
    background: red;
    transition: 0.5s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;
