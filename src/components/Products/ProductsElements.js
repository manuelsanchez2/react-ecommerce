import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 4rem calc((100vw - 1300px) / 2);
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  border-radius: 20px;
  max-width: 100%;
  transition: 0.5s ease-out;
  box-shadow: 6px 6px gray;

  &:hover {
    transform: scale(1.03);
    filter: grayscale(95%);
    box-shadow: 7px 7px #484848;
  }
`;

export const ProductsHeading = styled.h2`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 0;
`;

export const ProductTitle = styled.h3`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: white;
  margin-top: 1rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.5 ease-out;
  text-transform: uppercase;
  border-radius: 25px;

  &:hover {
    transform: scale(1.03);
    transition: 0.5s ease-out;
    cursor: pointer;
  }
`;
