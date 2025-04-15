import React from "react";
import outletStoreImages from "./../data/outletStoreImages.json";

const OutletStores = () => {
  const banner = [{ id: 1, image: "" }];
  return (
    <div>
      <div className="text-center justify-center">
        <h1
          className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-orange-600 via-white to-green-600 
        bg-clip-text text-transparent"
        >
          #vocalforlocal
        </h1>
        <p className="text-md md:text-2xl my-2">Dhanbid Outlet Stores</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20 py-10 cursor-pointer">
        {outletStoreImages.outletImages.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all 
              duration-300 hover:-translate-y-3 border border-gray-100"
            >
              <div>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutletStores;
