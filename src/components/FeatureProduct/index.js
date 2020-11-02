import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h2>Product of the week: Air Pods</h2>
      <p>
        These wireless Bluetooth earbuds will help you focus on your tasks by
        improving your productivity.
      </p>
      <p>
        In this week, you will get a <strong>10% discount</strong> if you
        purchase Apple AirPods!
      </p>
      <FeatureButton>Order Now!</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
