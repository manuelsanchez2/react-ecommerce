import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {
  productDataComputers,
  productDataKeyboards,
  productDataMice,
} from "./components/Products/data";
import Feature from "./components/FeatureProduct";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products
        heading="Choose a friend you can rely on"
        data={productDataComputers}
      />
      <Feature />
      <Products heading="How fast can you type?" data={productDataKeyboards} />
      <Products heading="Choose the perfect Mouse" data={productDataMice} />
    </Router>
  );
}

export default App;
