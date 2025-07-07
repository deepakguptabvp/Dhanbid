import React, { useState } from "react";
import toast from "react-hot-toast";
import axiosAPI from "../api/useAxios";
import { useAppContext } from "../context/AppContext";

const CreateBid = ({ createBid: tender, setActiveSection }) => {
  const [quantity, setQuantity] = useState(tender?.quantity);
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [description, setDescription] = useState("");
  const{bids, setBids} = useAppContext();
  const axios = axiosAPI();
  const handleSubmit = async (e) => {
  e.preventDefault();

  const confirmed = window.confirm(
    `Are you sure you want to submit a bid of ₹${amount*quantity} for Tender ID: ${tender?.tenderId || tender?._id}?`
  );
  console.log(confirmed)
  if (!confirmed) {
    console.log("returning")
    return};

  try {
console.log("Yha aagya")
    const response = await axios.post(
      "/bids",
      {
        tenderId: tender?._id ,
        quantity: Number(quantity),
        amount: parseFloat(amount),
        description,
      },
    );
console.log(response)
    // Add the new bid to the local state
    setBids((prev) => [response.data, ...prev]);
    setActiveSection("my-offers");
    toast.success(`Submitted bid for ${tender?.tenderId || tender?._id} at ₹${amount}`);

    // Clear form
    setAmount("");
    setDescription("");
    setTotalAmount("");
  } catch (error) {
    console.error("Error submitting bid:", error);
    toast.error(error?.response?.data?.message || "Something went wrong.");
  }
};
const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
  return (
    <div className="flex flex-col max-w-3xl mx-auto p-6 min-h-screen dark:text-black">
      <div className="w-full bg-white dark:text-black rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Tender Details */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-4  dark:text-black">
            Tender Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm ">
            <p>
              <strong>ID:</strong> {tender?.tenderId}
            </p>
            <p>
              <strong>Title:</strong> {tender?.requirement}
            </p>
            <p>
              <strong>Category:</strong> {tender?.category}
            </p>
             <p>
              <strong>Sub-category:</strong> {tender?.subcategory}
            </p>
            <p>
              <strong>Expiry:</strong> {formatDate(tender?.timeline)}
            </p>
            <p>
              <strong>Budget:</strong> ₹{tender?.minPrice} - ₹{tender?.maxPrice}
            </p>
            <p className="md:col-span-2">
              <strong>Description:</strong> {tender?.description || "N/A"}
            </p>
          </div>
        </div>

        {/* Submit Bid Form */}
        <div className="flex flex-col p-6">
          <h2 className="text-xl font-bold text-center mb-6">Place Your Bid</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row  justify-evenly space-y-4">
              {/* quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium mb-1"
                >
                  Quantity<span className="text-red-500">*</span>
                </label>
                <input
                  id="quantity"
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  readOnly
                  className="w-full border rounded-md px-3 py-2 text-sm  dark:border-gray-600 dark:text-black"
                />
              </div>

              {/* <span className="inline md:mt-8"> x </span> */}
              {/* amount per pcs */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium mb-1"
                >
                  Bid Amount (INR) <span className="text-red-500">*</span>
                </label>
                <input
                  id="amount"
                  type="text"
                  value={amount}
                  onChange={(e) => {setAmount(e.target.value);
                    setTotalAmount(Number(e.target.value)*quantity)
                  }}
                  placeholder="enter price per quantiy"
                  required
                  min={tender?.minPrice}
                  max={tender?.maxPrice}
                  className="w-full border rounded-md px-3 py-2 text-sm  dark:border-gray-600 dark:text-black"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be between ₹{tender?.minPrice} and ₹{tender?.maxPrice}
                </p>
              </div>

              <div>
                <label
                  htmlFor="totalAmount"
                  className="block text-sm font-medium mb-1"
                >
                  Total Amount (INR)
                </label>
                <input
                  id="totalAmount"
                  type="text"
                  value={totalAmount}
                  required
                  readOnly
                  className="w-full border rounded-md px-3 py-2 text-sm  dark:border-gray-600 dark:text-black"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Bid Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border rounded-md px-3 py-2 text-sm  dark:border-gray-600 dark:text-black"
              ></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#0200b9] cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBid;
