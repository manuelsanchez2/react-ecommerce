import styled from "styled-components";
import FeaturePic from "../../images/feature.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 3rem 6rem;

  h2 {
    font-size: clamp(3rem, 5vw, 5rem);
    margin: 2rem 0;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }

  strong {
    color: #ffce00;
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  margin-top: 1rem;
  padding: 0.6rem 3rem;
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
