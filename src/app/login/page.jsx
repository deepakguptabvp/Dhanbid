import React from "react";

function Login() {
  return (
    <div className="flex bg-gray-100 items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-3/5 p-6 md:p-8 bg-white flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/517/896/non_2x/online-auction-concept-tiny-people-bidder-buyer-and-auctioneer-bidding-in-public-auction-painting-and-vase-on-laptop-screen-hammer-close-deal-modern-flat-cartoon-style-illustration-vector.jpg"
            alt="Illustration of online auction"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-2/5  px-6 py-12 md:p-12 flex flex-col justify-center rounded-xl">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                Welcome To Dhanbid
              </h1>
              <p className="text-black/70 text-base md:text-lg">
                Please login to your account
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-black/10 border border-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-black/10 border border-white/20 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 hover:bg-black text-white rounded-lg font-semibold bg-black/70 transition duration-200 cursor-pointer"
              >
                LOG IN
              </button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-black/90">Don't have an account?</p>
              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium  group  hover:bg-black text-white rounded-lg  bg-black/70 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-transparent cursor-pointer">
                  SIGN UP
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
