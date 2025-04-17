import React from "react";

function Login() {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-3/5 p-6 md:p-8 bg-white flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/517/896/non_2x/online-auction-concept-tiny-people-bidder-buyer-and-auctioneer-bidding-in-public-auction-painting-and-vase-on-laptop-screen-hammer-close-deal-modern-flat-cartoon-style-illustration-vector.jpg"
            alt="Illustration of online auction"
            className="w-full h-auto md:h-full object-contain"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-500 to-pink-500 px-6 py-12 md:p-12 flex flex-col justify-center">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Welcome To Dhanbid
              </h1>
              <p className="text-white/70 text-base md:text-lg">
                Please login to your account
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition duration-200 cursor-pointer"
              >
                LOG IN
              </button>
            </form>

            <div className="text-center space-y-4">
              <p className="text-white/90">Don't have an account?</p>
              <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-500 hover:to-orange-400 focus:ring-4 focus:outline-none focus:ring-pink-200">
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
