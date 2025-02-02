import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IntegrationInstructions = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const chatbotCode = `<script src="https://client-chatbot.js"></script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(chatbotCode);
    alert("Code copied!");
  };

  const sendEmailInstructions = () => {
    alert(`Instructions sent to ${email}!`);
  };

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-center">
      <div className="max-w-2xl mx-auto text-center p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">
          Integrate Chatbot on Your Website
        </h2>
        <p className="mt-3">
          {"Copy and paste this code inside your <head> tag:"}
        </p>

        <div className="bg-gray-200 p-3 rounded-md font-mono mt-3">
          {chatbotCode}
        </div>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md mt-3"
          onClick={copyToClipboard}
        >
          Copy Code
        </button>
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="mt-5 text-lg">Send Instructions to Developer</h3>
            <input
              type="email"
              placeholder="Enter developer's email"
              className="border p-2 rounded-md w-full mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center gap-10 ">
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md "
              onClick={sendEmailInstructions}
            >
              Send Email
            </button>

            <button
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md "
              onClick={() => navigate("/start")}
            >
              Test Integration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationInstructions;
