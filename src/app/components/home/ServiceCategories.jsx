import React from "react";
import services from "../../data/serviceCategory";

const ServiceCategories = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div
        className="w-full shadow-md"
        style={{
          background:
            "linear-gradient(to bottom, #125db8, #1f4691 80%, #f8f8f8 20%, #f8f8f8)",
        }}
      >
        <div className="pt-10 pb-10 text-white">
          <h2 className="text-4xl font-light text-center">
            Popular Service Categories
          </h2>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 md:mb-26">
          <div className="bg-white rounded-lg shadow-2xl py-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col items-center space-y-4 group cursor-pointer"
                >
                  <div className="transition-transform duration-300 transform group-hover:-translate-y-2">
                    {service.icon}
                  </div>
                  <h3 className="text-center text-gray-800 font-medium hover:font-bold">
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;
