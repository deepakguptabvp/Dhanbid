import React from "react";
// import dummyTender from "./../data/dummyTenderData.json";

const MyTenders = ({ emptyArray }) => {
  return (
    <div className=" bg-gray-100">
      {/* <h1 className="text-3xl font-bold text-center mt-2 mb-8 text-blue-800">
        My Tenders
      </h1> */}

      {/* Searching and Filtering buttons */}
      <div className="gap-4">
        <input
          type="text"
          className="bg-gray-200 rounded-xl text-center mt-2 mb-8 p-2 border-gray-300"
        />
        <button className=""> Filter </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-y-auto max-h-screen">
        {emptyArray.map((tender, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            {/* Logo / Icon placeholder */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-orange-500 bg-orange-100 p-3 rounded-xl font-semibold text-md">
                {tender.tenderCategory}
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {tender.tenderName}
            </h2>

            <p className="text-sm mb-1 text-gray-700">
              <strong>Company:</strong> {tender.companyName}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Description:</strong> {tender.tenderDescription}
            </p>

            <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
              <p>
                <strong>Bid Date:</strong>
                <br />
                {tender.bidSubmissionDate}
              </p>
              <p>
                <strong>Opening:</strong>
                <br />
                {tender.tenderOpeningDate}
              </p>
            </div>

            <div className="flex flex-col mt-4">
              <div className="flex-col text-left text-lg font-bold text-green-600">
                Price: ₹{tender.minimumPrice} - {tender.maximumPrice}
              </div>
              <button className="flex-col bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-md mt-3">
                View Details
              </button>
            </div>

            {/* <div className="text-xs text-orange-600 mt-3 bg-orange-100 p-2 rounded">
              🔥 Get up to 10% off on online bids using UPI payment!
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTenders;

// import { MdEventNote } from "react-icons/md";
// import { IoMdCloseCircle } from "react-icons/io";
// import { TiTick } from "react-icons/ti";

// useEffect
// const [tenders, setTenders] = useState([]);

//    useEffect(() => {
//   fetch("/data/dummyTenderData.json")
//     .then((res) => res.json())
//     .then((data) => setTenders(data))
//     .catch((error) => console.error("Error fetching tender data:", error));
// }, []);

{
  /* <div className="grid md:grid-cols-3">
        <div className="flex flex-row p-6">
          <MdEventNote size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">12</h1>
            <span>Open Tenders</span>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <TiTick size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">8</h1>
            <span>Submitted Tenders</span>
          </div>
        </div>
        <div className="flex flex-row p-6">
          <IoMdCloseCircle size={60} className="mx-3" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">3</h1>
            <span>Closed Tenders</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold p-4">Open Tenders</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tender ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Submission Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Supplies</td>
                <td className="px-6 py-4">open</td>
                <td className="px-6 py-4">May 27, 2025</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <td className="px-6 py-4">Construction Services</td>
                <td className="px-6 py-4">Open</td>
                <td className="px-6 py-4">April 12, 2025</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <td className="px-6 py-4">IT Equipment</td>
                <td className="px-6 py-4">Closed</td>
                <td className="px-6 py-4">Jun 7, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */
}
