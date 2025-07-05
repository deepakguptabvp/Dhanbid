import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useAppContext } from "../context/AppContext";
import axiosAPI from "../api/useAxios";

const MyBids = ({ bids }) => {
  const [selectedBid, setSelectedBid] = useState(null);
  const {myBids, setMyBids} = useAppContext();
  const axios = axiosAPI();

  const handleClose = () => setSelectedBid(null);
  const getMyBids = async ()=>{
    try{
      const {data} = await axios.get('/bids/my');
      setMyBids(data);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getMyBids();
  },[])
  console.log(myBids)
  return (
    <div className="max-w-7xl mx-auto px-4 pb-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 p-8">
        My Bids
      </h2>

      {myBids?.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No bids placed yet. Start bidding to see them here!
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 max-h-screen pb-0 px-2 pr-2">
          {myBids?.map((bid, index) => (
            <div
              key={index}
              className="dark:text-black  border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div className="space-y-2 dark:text-black">
                <h3 className="text-xl font-semibold ">{bid?.tender?.requirement}</h3>
                <p className="text-sm ">
                  <span className="font-semibold">Tender ID:</span>{" "}
                  {bid?.tender?.tenderId}
                </p>
                <p className="text-sm ">
                  <span className="font-semibold">Category:</span> {bid.tender?.category}
                </p>
                <p className="text-sm ">
                  <span className="font-semibold">Quantity:</span>{" "}
                  {bid.quantity}
                </p>
                <p className="text-sm ">
                  <span className="font-semibold">Amount:</span> ₹{bid.amount*bid?.quantity}
                </p>
              </div>

              <div className="mt-4 text-center">
                <button
                  className="px-4 py-2 bg-[#0200b9] text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => setSelectedBid(bid)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedBid && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] px-4">
          <div className="bg-white dark:text-black rounded-xl shadow-lg max-w-md w-full p-6 relative">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-black">
              Bid Details
            </h3>
            <div className="space-y-2 text-sm bg-white dark:text-black">
              <p>
                <strong>Name:</strong> {selectedBid.tender?.requirement}
              </p>
              <p>
                <strong>Tender ID:</strong> {selectedBid.tender?.tenderId}
              </p>
              <p>
                <strong>Category:</strong> {selectedBid.tender?.category}
              </p>
              <p>
                <strong>Bidder Name:</strong> {selectedBid.bidderName||"Me"}
              </p>
              <p>
                <strong>Amount:</strong> ₹{selectedBid.amount}
              </p>
              <p>
                <strong>Email:</strong> {selectedBid.email || "abc@mail.com"}
              </p>
              <p>
                <strong>Phone:</strong> {selectedBid.phone || "+91-98768XXXXX"}
              </p>
              <p>
                <strong>Submitted At:</strong> {new Date(selectedBid?.createdAt).toLocaleString()}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 hover:text-gray-800 cursor-pointer rounded-lg"
            >
              <IoCloseCircle size={30}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBids;
