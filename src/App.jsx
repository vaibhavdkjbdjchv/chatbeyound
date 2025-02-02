// import AuthButtons from "../components/AuthButtons";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import WebpageList from "./pages/WebPageList";
import TestIntegration from "./pages/TestIntigration";
import IntegrationInstructions from "./pages/IntegrationInstructions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/webpages" element={<WebpageList />} />
        <Route path="/testingchatbot" element={<TestIntegration />} />
        <Route path="/new-page" element={<IntegrationInstructions />} />
      </Routes>
    </Router>
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   <HomePage />
    // </div>
  );
}

export default App;
