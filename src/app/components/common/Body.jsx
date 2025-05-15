import React from "react";
import Slider from "../home/Slider";
import ProductCategories from "../home/ProductCategories";
import ServiceCategories from "../home/ServiceCategories";
import OutletStores from "../home/OutletStores";
import WhyChooseUs from "../home/WhyChooseUs";

const Body = () => {
  return (
    // <div className="w-full px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
    //  <div className="space-y-4 md:space-y-10 lg:space-y-10"> */}
    <div>
      <Slider />
      <OutletStores />
      <ProductCategories />
      <ServiceCategories />
      <WhyChooseUs />
      {/* </div> */}
    </div>
  );
};

export default Body;
