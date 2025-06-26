"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: enter phone, 2: enter OTP
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sentOtp, setSentOtp] = useState(""); // for demo only

    const router = useRouter();
  // Simulate sending OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Dummy: generate a 6-digit OTP
    const generatedOtp = "123456"; // Replace with real API call
    setSentOtp(generatedOtp);
    setStep(2);
    setLoading(false);
    alert(`OTP sent to ${phone} `);
  };

  // Simulate verifying OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    // Dummy check
    if (otp === sentOtp) {
      alert("Login successful!");
      // Redirect or set admin session here
      router.push("/admin-dashboard")
    } else {
      setError("Invalid OTP");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <img
          src="/Dhanbid.jpg"
          alt="Dhanbid logo"
          className="rounded-xl mb-5 h-36 text-center justify-center m-auto"
        />
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login (OTP)
        </h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        {step === 1 && (
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Enter 10-digit phone number"
            />
          </div>
        )}
        {step === 2 && (
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Enter OTP</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength={6}
              placeholder="Enter OTP"
            />
            <button
              type="button"
              className="mt-2 text-indigo-500 hover:underline text-sm"
              onClick={() => setStep(1)}
            >
              Change Phone Number
            </button>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg font-semibold hover:bg-indigo-600 transition"
          disabled={loading}
        >
          {loading
            ? step === 1
              ? "Sending OTP..."
              : "Verifying..."
            : step === 1
            ? "Send OTP"
            : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
