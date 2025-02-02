import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import images from "../images";

const Start = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const fetchMetaDescription = async () => {
    try {
      const response = await axios.get(
        `https://api.allorigins.win/get?url=${encodeURIComponent(websiteURL)}`
      );
      const html = response.data.contents;
      const match = html.match(
        /<meta\s+name="description"\s+content="(.*?)"\s*\/?>/i
      );
      if (match) setDescription(match[1]);
    } catch (error) {
      console.error("Failed to fetch meta description", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/webpages");
  };

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-center p-5">
      <div className="max-w-[600px] w-full flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={images.logo}
            alt="Company Logo"
            className="w-20 bg-[#7d39ff] rounded-full"
          />
          <h2 className="text-4xl py-10 font-bold text-[#7d39ff] text-center">
            Enter Company Details
          </h2>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            className="border-b-3 text-[20px] py-2 outline-0 border-[#7d39ff] w-full"
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <input
            type="url"
            placeholder="Website URL"
            value={websiteURL}
            className="border-b-3 text-[20px] py-2 border-[#7d39ff] outline-0 w-full"
            onChange={(e) => setWebsiteURL(e.target.value)}
            required
          />
          <div
            className="w-full rounded-3xl text-white text-xl font-bold flex cursor-pointer bg-[#7d39ff] border-[#53e7c3] justify-center items-center px-5 py-2 hover:bg-[#53e7c3] hover:text-[#7d39ff] text-center"
            onClick={fetchMetaDescription}
          >
            Fetch Meta Description
          </div>
          <textarea
            className="h-40 border-3 rounded-2xl border-[#7d39ff] text-[20px] py-2 px-2 w-full"
            placeholder="Company Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="submit"
            className="w-full rounded-3xl text-white text-xl font-bold flex cursor-pointer bg-[#7d39ff] border-[#53e7c3] justify-center items-center px-5 py-2 hover:bg-[#53e7c3] hover:text-[#7d39ff]"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Start;
