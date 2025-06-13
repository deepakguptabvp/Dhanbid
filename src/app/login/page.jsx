"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  useEffect(() => {
    if (!sdkLoaded) {
      const script = document.createElement("script");
      script.id = "otpless-sdk";
      script.src = "https://otpless.com/v4/headless.js";
      script.setAttribute("data-appid", "E3Q3X8BESP4COB9TORA6");
      script.onload = () => {
        setSdkLoaded(true);
        initializeOtpless();
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [sdkLoaded]);

  const initializeOtpless = () => {
    if (!window.OTPless) return;

    const callback = (event) => {
      const handlers = {
        OTP_AUTO_READ: () => {
          const { otp } = event.response;
          setOtp(otp);
        },
        ONETAP: () => {
          console.log("Token:", event.response.token);
        },
        FAILED: () => console.error("Authentication Failed"),
        FALLBACK_TRIGGERED: () => console.warn("Fallback Triggered"),
      };

      if (handlers[event.responseType]) handlers[event.responseType]();
    };

    window.OTPlessSignin = new window.OTPless(callback);
  };

  const initiateAuth = () => {
    if (!window.OTPlessSignin) return;
    if (!phone.trim()) return toast("Please enter a phone number.");

    window.OTPlessSignin.initiate({
      channel: "PHONE",
      phone,
      countryCode: "+91",
    });

    toast("OTP sent to your phone");
    setOtpSent(true);
    setIsResendDisabled(true);
    setResendTimer(60);
    startResendTimer();
  };

  const handleOtpVerification = async () => {
    // const router = useRouter();
    try {
      // const { data } = await axios.post("user/otp-verified", { phone });
      // setUser(data.user);
      // localStorage.setItem("BidA2ZUser", data.token);
      setError("");
      // navigate to buyer / supplier page.
      router.push("/dashboard-selector");
    } catch {
      setError("Something went wrong! Try Again");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    setLoading(true);
    const res = await window.OTPlessSignin.verify({
      channel: "PHONE",
      phone,
      otp,
      countryCode: "+91",
    });

    if (res.success) {
      handleOtpVerification();
    } else {
      setError(
        res.statusCode === 400 ? "Invalid OTP!" : "Something went wrong!"
      );
      setLoading(false);
    }
  };

  const startResendTimer = () => {
    let timeLeft = 60;
    const interval = setInterval(() => {
      timeLeft -= 1;
      setResendTimer(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(interval);
        setIsResendDisabled(false);
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center text-black max-h-screen dark:bg-white">
      <div className="flex flex-col md:flex-row w-full max-w-7xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-full md:w-3/5 p-2 md:py-16 md:p-8 flex items-center justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/517/896/non_2x/online-auction-concept-tiny-people-bidder-buyer-and-auctioneer-bidding-in-public-auction-painting-and-vase-on-laptop-screen-hammer-close-deal-modern-flat-cartoon-style-illustration-vector.jpg"
            alt="Illustration of online auction"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-2/5 px-12 py-18 md:p-16 flex flex-col justify-center rounded-xl">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Welcome To Dhanbid
            </h1>
            <p className="text-black/70 text-base md:text-lg">
              Please login to your account
            </p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  value={phone}
                  onChange={(e) => {
                    if (e.target.value.length <= 10) setPhone(e.target.value);
                  }}
                  className="w-full border border-gray-300 px-4 py-2 rounded-full pl-12 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span className="absolute left-0 px-2 h-full rounded-l-full py-2 bg-indigo-600 text-white">
                  +91
                </span>
              </div>

              {otpSent ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter OTP *"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <button
                    type="button"
                    onClick={verifyOTP}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                  >
                    {loading ? "Verifying... " : "Verify OTP"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={initiateAuth}
                  className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer"
                >
                  Request OTP
                </button>
              )}

              {otpSent && (
                <div className="text-center mt-2">
                  {isResendDisabled ? (
                    <p className="text-gray-500">{`Resend OTP in ${resendTimer}s`}</p>
                  ) : (
                    <button
                      onClick={initiateAuth}
                      className="text-blue-500 underline bg-gray-100 px-2 py-1 rounded"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
