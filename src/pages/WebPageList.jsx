// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const dummyWebpages = [
//   {
//     id: 1,
//     url: "https://example.com/about",
//     status: "Scraped",
//     dataChunks: ["Company history", "Team members"],
//   },
//   {
//     id: 2,
//     url: "https://example.com/services",
//     status: "Pending",
//     dataChunks: [],
//   },
//   {
//     id: 3,
//     url: "https://example.com/contact",
//     status: "Scraped",
//     dataChunks: ["Email: contact@example.com", "Phone: 123-456"],
//   },
// ];

// const WebpageList = () => {
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/testingchatbot");
//   };
//   const [selectedPage, setSelectedPage] = useState(null);

//   return (
//     <div className="w-full h-[100vh] bg-white flex justify-center items-center">
//       <div className="w-1/3 gap-10  flex flex-col justify-center items-center">
//         <h2 className="text-2xl font-bold text-[#7d39ff]">Detected Webpages</h2>
//         <table className="flex flex-col gap-5">
//           <thead className="">
//             <div className="bg-[#7d39ff] flex justify-between rounded-3xl">
//               <th>Webpage URL</th>
//               <th>Status</th>
//               <th>View Data</th>
//             </div>
//           </thead>
//           <tbody>
//             {dummyWebpages.map((page) => (
//               <div
//                 key={page.id}
//                 className="w-full  flex justify-start my-2 rounded-3xl"
//               >
//                 <td className="w-85 ">{page.url}</td>
//                 <td className="w-1/3 ">{page.status}</td>
//                 <td>
//                   {page.status === "Scraped" ? (
//                     <button
//                       className="bg-[#7d39ff] text-white py-2  w-30 rounded-2xl cursor-pointer hover:bg-transparent border-[#7d39ff] border-1 hover:border-1 hover:border-[#7d39ff] hover:text-black button"
//                       onClick={() => setSelectedPage(page)}
//                     >
//                       View Data
//                     </button>
//                   ) : (
//                     <h2 className="text-red-700  px-5">Pending...</h2>
//                   )}
//                 </td>
//               </div>
//             ))}
//           </tbody>
//         </table>

//         {selectedPage && (
//           <div className="modal">
//             <h3>Data from {selectedPage.url}</h3>
//             <ul>
//               {selectedPage.dataChunks.map((chunk, index) => (
//                 <li key={index}>{chunk}</li>
//               ))}
//             </ul>
//             <button onClick={() => setSelectedPage(null)}>Close</button>
//           </div>
//         )}

//         <button
//           onClick={handleSubmit}
//           className="button bg-[#7d39ff] text-white px-7 py-3 text-[20px] font-bold  rounded-3xl hover:bg-[#53e7c3] hover:text-[#7d39ff]"
//         >
//           Start Chatbot Training
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WebpageList;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyWebpages = [
  {
    id: 1,
    url: "https://example.com/about",
    status: "Scraped",
    dataChunks: ["Company history", "Team members"],
  },
  {
    id: 2,
    url: "https://example.com/services",
    status: "Pending",
    dataChunks: [],
  },
  {
    id: 3,
    url: "https://example.com/contact",
    status: "Scraped",
    dataChunks: ["Email: contact@example.com", "Phone: 123-456"],
  },
];

const WebpageList = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/testingchatbot");
  };
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-center p-5">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center gap-10">
        <h2 className="text-2xl font-bold text-[#7d39ff] text-center">
          Detected Webpages
        </h2>

        {/* Table */}
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#7d39ff] text-white rounded-3xl">
              <th className="p-3 text-left">Webpage URL</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">View Data</th>
            </tr>
          </thead>
          <tbody>
            {dummyWebpages.map((page) => (
              <tr
                key={page.id}
                className="border-b-2 border-[#ddd] hover:bg-gray-100"
              >
                <td className="py-3 px-5">{page.url}</td>
                <td className="py-3 px-5">{page.status}</td>
                <td className="py-3 px-5">
                  {page.status === "Scraped" ? (
                    <button
                      className="bg-[#7d39ff] text-white py-2 px-5 sm:w-auto rounded-2xl cursor-pointer hover:bg-transparent border-[#7d39ff] border-1 hover:border-1 hover:border-[#7d39ff] hover:text-black"
                      onClick={() => setSelectedPage(page)}
                    >
                      View Data
                    </button>
                  ) : (
                    <span className="text-red-700 px-5">Pending...</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {selectedPage && (
          <div className="modal fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center">
            <div className="bg-white p-5 rounded-2xl w-full sm:w-1/2 md:w-1/3">
              <h3 className="text-xl font-bold mb-4">
                Data from {selectedPage.url}
              </h3>
              <ul>
                {selectedPage.dataChunks.map((chunk, index) => (
                  <li key={index} className="mb-2">
                    {chunk}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPage(null)}
                className="bg-[#7d39ff] text-white py-2 px-5 rounded-2xl mt-4 w-full sm:w-auto hover:bg-transparent border-[#7d39ff] border-1 hover:border-1 hover:border-[#7d39ff] hover:text-black"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Start Chatbot Training Button */}
        <button
          onClick={handleSubmit}
          className="bg-[#7d39ff] text-white px-7 py-3 text-[20px] font-bold rounded-3xl w-full sm:w-auto hover:bg-[#53e7c3] hover:text-[#7d39ff] mt-5"
        >
          Start Chatbot Training
        </button>
      </div>
    </div>
  );
};

export default WebpageList;
