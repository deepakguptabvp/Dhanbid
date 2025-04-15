import React from "react";
import Slider from "./Slider";
import ProductCategories from "./ProductCategories";
import ServiceCategories from "./ServiceCategories";
import OutletStores from "./OutletStores";
import WhyChooseUs from "./WhyChooseUs";

const Body = () => {
  return (
    <div>
      <Slider />
      <OutletStores />
      <ProductCategories />
      <ServiceCategories />
      <WhyChooseUs />
  
    </div>
  );
};

export default Body;
