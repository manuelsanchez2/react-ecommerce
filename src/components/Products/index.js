import React from "react";
import "./style.css";

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data, dark }) => {
  return (
    <ProductsContainer className={dark ? "normal" : "dark"}>
      <ProductsHeading className={dark ? "normal" : "dark"}>
        {heading}
      </ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg
                className={dark ? "normal" : "dark"}
                src={product.img}
                alt={product.alt}
              />
              <ProductInfo className={dark ? "normal" : "dark"}>
                <ProductTitle className={dark ? "normal" : "dark"}>
                  {product.name}
                </ProductTitle>
                <ProductDesc className={dark ? "normal" : "dark"}>
                  {product.desc}
                </ProductDesc>
                <ProductPrice className={dark ? "normal" : "dark"}>
                  {product.price}
                </ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
