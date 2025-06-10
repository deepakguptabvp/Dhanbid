import React from "react";
import Slider from "../home/Slider";
import ProductCategories from "../home/ProductCategories";
import ServiceCategories from "../home/ServiceCategories";
import OutletStores from "../home/OutletStores";
import WhyChooseUs from "../home/WhyChooseUs";

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
