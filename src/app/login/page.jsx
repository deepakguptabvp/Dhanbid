"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppContext } from "../context/AppContext";
import axiosAPI from "../api/useAxios";

function Login() {
  const {user, setUser} = useAppContext();
  const router = useRouter();
  const axios = axiosAPI();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [reqId, setReqId] = useState(null);

  useEffect(() => {
    console.log(user)
    if (isResendDisabled) {
      const interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [isResendDisabled]);

  const sendOtp = async () => {
    if (!phone || phone.length !== 10) {
      return toast.error("Please enter a valid 10-digit phone number.");
    }

    setLoading(true);
    try {
      const res = await axios.post("/auth/send-otp", { phone });
      if (res.data.success) {
        setOtpSent(true);
        setIsResendDisabled(true);
        setReqId(res.data.reqId);
        toast.success("OTP sent successfully");
      } else {
        toast.error(res.data.message || "Failed to send OTP");
      }
    } catch (err) {
      toast.error("Something went wrong while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      return toast.error("Please enter the OTP");
    }

    setLoading(true);
    try {
      const res = await axios.post("/auth/verify-otp", { phone, otp });
      if (res.data.success) {
        toast.success("OTP verified successfully");
        router.push("/dashboard-selector");
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      toast.error("Verification failed");
    } finally {
      setLoading(false);
    }
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
                <span className="absolute left-0 px-2 h-full rounded-l-full py-2 bg-blue-600 text-white">
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
                    onClick={verifyOtp}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={loading}
                  className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer"
                >
                  {loading ? "Sending..." : "Request OTP"}
                </button>
              )}

              {otpSent && (
                <div className="text-center mt-2">
                  {isResendDisabled ? (
                    <p className="text-gray-500">Resend OTP in {resendTimer}s</p>
                  ) : (
                    <button
                      onClick={sendOtp}
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
