import { useNavigate } from "react-router-dom";

const ChatbotIntegration = () => {
  const navigate = useNavigate();

  const openTestChatbot = () => {
    window.open("https://client-website.com", "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/webpages");
  };

  return (
    <div className="max-w-2xl mx-auto text-center p-6">
      <div className="bg-gray-100 p-3 flex justify-between rounded-md">
        <span>🤖 Chatbot not working as intended?</span>
        <button className="bg-yellow-400 px-3 py-1 rounded-md">
          Share Feedback
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-6">Chatbot Integration & Testing</h2>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4"
        onClick={openTestChatbot}
      >
        Test Chatbot
      </button>

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mt-4"
        onClick={() => navigate("/integration")}
      >
        Integrate on Your Website
      </button>
    </div>
  );
};

export default ChatbotIntegration;
