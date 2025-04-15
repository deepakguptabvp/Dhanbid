import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      {" "}
      <div
        className="text-white"
        style={{
          background:
            "linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51))",
        }}
      >
        <div className="text-center justify-center p-4 md:p-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
            Why you should choose GeM
          </h1>
          <div className="mx-4 md:mx-18 border-1 transition-opacity border-gray-300 mt-2 md:mt-4 rounded-lg">
            {/* Statistics Data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
              <div className="p-6 md:p-12">
                <span className="text-3xl md:text-4xl lg:text-5xl">10,920</span>
                <p className="font-bold mt-2 text-sm md:text-base">
                  Product Categories
                </p>
              </div>
              <div className="relative p-6 md:p-12 border-t md:border-t-0 md:border-l border-white/30">
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  1,348,907
                </span>
                <p className="font-bold mt-2 text-sm md:text-base">
                  Order Value (Cr.)
                </p>
              </div>
              <div className="relative p-6 md:p-12 border-t md:border-t-0 md:border-l border-white/30">
                <span className="text-3xl md:text-4xl lg:text-5xl">334</span>
                <p className="font-bold mt-2 text-sm md:text-base">
                  Service Categories
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-[1px] md:h-[2px] w-[90%] md:w-[80%] bg-white opacity-50"></div>
            </div>

            {/* Feature section of List with text and icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 p-6 md:p-12">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <p className="text-xs md:text-sm lg:text-base">
                  Rich Listing of Products / Services
                </p>
              </div>

              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <p className="text-xs md:text-sm lg:text-base">
                  Integrated Payment System
                </p>
              </div>

              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <p className="text-xs md:text-sm lg:text-base">
                  Multiple Procurement Modes - Direct Purchase / Bid / RA
                </p>
              </div>

              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs md:text-sm lg:text-base">
                  Great Transparency and Speed of Procurement
                </p>
              </div>

              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-2 md:mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-xs md:text-sm lg:text-base">
                  Online Ordering and Contract Generation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
