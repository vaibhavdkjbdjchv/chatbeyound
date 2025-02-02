import { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const TestIntegration = () => {
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  const testIntegration = () => {
    setTimeout(() => {
      setIsSuccess(Math.random() > 0.3); // 70% success rate
    }, 2000);
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-white">
      <div className="max-w-2xl mx-auto text-center p-6 ">
        <h2 className="text-2xl font-bold">Testing Chatbot Integration...</h2>

        {isSuccess === null ? (
          <div>
            <motion.h1 className="noticeMessage text-red-600">
              After Clicking button wait for second
            </motion.h1>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md mt-5"
              onClick={testIntegration}
            >
              Run Test
            </button>
          </div>
        ) : isSuccess ? (
          <>
            <Confetti />
            <h3 className="text-green-600 text-2xl font-bold mt-5">
              🎉 Integration Successful!
            </h3>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-md mt-3"
              onClick={() => navigate("/admin-panel")}
            >
              Explore Admin Panel
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mt-3"
              onClick={() => navigate("/chat")}
            >
              Start Talking to Your Chatbot
            </button>

            <div className="mt-5 space-x-2">
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md">
                🔗 LinkedIn
              </button>
              <button className="bg-sky-500 text-white px-3 py-2 rounded-md">
                🐦 Twitter
              </button>
              <button className="bg-blue-800 text-white px-3 py-2 rounded-md">
                📘 Facebook
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-red-600 text-2xl font-bold mt-5">
              ❌ Integration Not Detected
            </h3>
            <p className="text-gray-600">
              Ensure the chatbot script is correctly added to your website.
            </p>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded-md mt-3"
              onClick={testIntegration}
            >
              Retry Test
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestIntegration;
