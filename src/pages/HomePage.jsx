import React from "react";
import "./../App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../../components/Navbar";
import images from "../images";
import { easeInOut, motion } from "motion/react";
import { fadeIn } from "../Variants";
import { fadeout } from "../Variants";
import HowtoStart from "../../components/HowtoStart";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function HomePage() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/new-page");
  };
  const chatbotScreen = () => {
    <div>
      <div className="w-100 h-100 bg-amber-100"></div>
    </div>;
  };

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const [messages, setMessages] = useState([
    "Hi there! Welcome to BeyondChats",
    "What brings you here today?",
    "Ask me anything about BeyondChats",
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="page1 bg-[#1c1c1c]">
      <div className="absolute bottom-10 right-10 w-80 z-99999999">
        <div className="flex flex-col justify-start items-end">
          <div className={isActive ? "visible" : "hidden"}>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-90 h-120 bg-[#eaeef3] flex flex-col justify-between rounded-3xl"
              >
                <div className="bg-blue-600 rounded-t-3xl text-white px-4 py-3 flex items-center">
                  <img
                    src={images.logo}
                    alt="AI Avatar"
                    className="w-1/.5 h-8 rounded-full mr-2"
                  />
                  <div>
                    <strong>Beyound AI</strong>
                    <h2 className="text-[10px] font-bold text-green-400">
                      .Online
                    </h2>
                  </div>
                </div>

                <div className="p-4 space-y-2 overflow-y-auto">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className="bg-white font-semibold text-[13px] text-black p-2 rounded-lg"
                    >
                      {msg}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  {" "}
                  <div className="border-t bg-white flex p-2">
                    <input
                      type="text"
                      className="flex-1  rounded-md px-2 py-1 text-black"
                      placeholder="Type a message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                      className="bg-blue-600 text-white px-3 ml-2 rounded-md"
                      onClick={sendMessage}
                    >
                      Send
                    </button>
                  </div>
                  <div className="text-black text-[12px] w-full gap-1 flex justify-center">
                    Powered By
                    <span className="text-blue-600">Beyound Chat</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <img
            src={images.logo}
            onClick={toggleClass}
            className="w-1/4"
            alt=""
          />
        </div>
      </div>

      <motion.img
        initial={{ top: -500, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        src={images.bghero}
        className="absolute z-0 right-80 w-1/4"
      />
      {/* first page */}
      <div className="page1container relative w-[100vw] h-[100vh] ">
        <div className="flex w-full h-full   flex-col  justify-end items-center py-5">
          <div className={`flex fixed top-0  justify-center items-center z-10`}>
            <Navbar />
            <div></div>
          </div>
          <div className="w-full mt-50 h-full justify-center flex flex-wrap">
            <div className="page1text w-1/3  h-full flex-wrap flex justify-center gap-12 items-center">
              <div className="page1text bg h-full flex flex-col gap-10 justify-center">
                <div className="lg:text-8xl md:text-7xl text-5xl text-center  bg  w-100 font-bold bg-gradient-to-r from-white via-purple-400 to-white text-transparent bg-clip-text">
                  AI Chat for Your website
                </div>
                <div className="xl:w-full w-[80%]  text-center xl:text-start text-lg font-semibold ">
                  BeyondChats AI transforms Your website’s content into accurate
                  and effective customer responses, automating support and sales
                  through a chat that leverages its own technology and the full
                  power of ChatGPT.
                </div>
                <div className="w-1/2">
                  <motion.div
                    onClick={handleRedirect}
                    className="page1text button w-70 rounded-3xl text-white text-xl font-bold flex color-contrast-fix bg-[#7d39ff]   border-[#53e7c3] justify-center items-center px-5 py-5 hover:bg-[#53e7c3] hover:text-[#7d39ff]"
                  >
                    Create Your ChatBot
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="page1images w-1/2 h-full flex flex-wrap justify-center items-end px-3">
              <div className="flex  justify-end items-start w-full gap-5">
                <motion.img
                  initial={{ marginBottom: 100, opacity: 0 }}
                  animate={{ marginBottom: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  src={images.Chat}
                  alt="chatBot"
                  className="w-1/3  rounded-3xl"
                />
                <motion.img
                  initial={{ marginTop: -100, opacity: 0 }}
                  animate={{ marginTop: -50, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  src={images.beyounChat}
                  alt="Website"
                  className="w-1/2 rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second page */}
      <div className="page2">
        <div className="w-full min-h-full rounded-t-[80px] flex mt-40 md:rounded-t-[120px] bg-gradient-to-b from-[#6431d7] to-[#4a1bb5]">
          <div className="w-full px-5 flex justify-center">
            <div className="page2discription  w-1/3 h-full  flex flex-col items-start gap-10 justify-center">
              <h5 className=" font-bold text-2xl  text-[#ffffff47]">
                How to use
              </h5>
              <motion.img
                initial={{ opacity: 0, marginTop: -50 }}
                whileInView={{ opacity: 1, marginTop: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={images.logo}
                alt=""
                className="w-20"
              />
              <motion.div
                initial={{ opacity: 0, marginTop: -50 }}
                whileInView={{ opacity: 1, marginTop: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-5xl w-full font-bold "
              >
                How Beyonchat AI Works
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[100%] gap-10  bg flex flex-col text-lg font-semibold "
              >
                <div>
                  Simply copy and paste Your product or service description,
                  documentation, or FAQs into BeyondChats — no programming
                  experience required.
                </div>
                <div>
                  BeyondChats quickly learns from this content and delivers
                  fast, accurate responses to Your customers. It can also
                  enhance replies with product cards and other useful widgets,
                  making Your customer support and sales more efficient.
                </div>
              </motion.div>
              <div className="w-full flex  justify-center items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0 }}
                  className="button w-70 rounded-3xl text-[#53e7c3] text-xl font-bold flex color-contrast-fix bg-transparent border-2 border-[#53e7c3] justify-center items-center px-5 py-5 hover:bg-[#53e7c3] hover:text-[#7d39ff]  hover:w-75"
                >
                  <h1>Bulid Your ChatBot</h1>
                  <div className=" text-2xl font-semibold rotate-1020">-></div>
                </motion.div>
              </div>
            </div>

            <div className="spageimages w-1/2 relative  h-full  justify-center items-end px-3">
              <div className=" flex justify-start items-center w-full gap-5">
                <motion.img
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  src={images.robot}
                  alt="chatBot"
                  className="page2img floating-robot w-1/2 top-30 left-40 z-1 absolute rounded-3xl"
                />
                <motion.img
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  src={images.video}
                  alt="Website"
                  className="page2img xl:left-5 floating-video w-1/3 z-0 top-50 -left-10 absolute rounded-3xl "
                />{" "}
                <motion.img
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  src={images.card}
                  alt="Website"
                  className="page2img xl:right-0 floating-card w-1/3 z-0 top-90 right-20 absolute  rounded-3xl "
                />
                <motion.img
                  variants={fadeIn("up", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  src={images.widgth}
                  alt="Website"
                  className="page2img xl:w-[150px]  floating-video w-1/5 z-0 -top-15 right-70 absolute  rounded-3xl "
                />
                <motion.img
                  variants={fadeout("down", 2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0 }}
                  src={images.more}
                  alt="Website"
                  className="page2img  floating-card w-1/6 z-1 top-180 left-35 absolute  rounded-3xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto  flex flex-col justify-center items-center bg-white">
        <div className="w-full h-50 mt-50 flex flex-col gap-8 justify-center items-center">
          <h2 className="text-2xl font-semibold text-[#a881ff]">
            Getting Start
          </h2>
          <p className="text-6xl font-bold bg-gradient-to-r from-black via-purple-500 to-gray-300 text-transparent bg-clip-text">
            How <span className="text-purple-500">to</span> Start
          </p>
          <p className="text-gray-500 text-2xl font-semibold">
            Getting started with beyound is quick and easy. In just a few simple
            steps.
          </p>
        </div>

        <div className="w-full h-auto gap-10 flex-wrap flex justify-center items-center">
          <HowtoStart
            img={images.start1}
            step="1"
            title="Register Your acoount"
            desc={
              "Create account to start building Your personalized, human-like chatbot with all beyound AI features."
            }
          />
          <HowtoStart
            img={images.start2}
            step="2"
            title="Integration Screen"
            desc={
              "This screen provides the code snippet to embed a chatbot on your website, along with options to send integration instructions to a developer via email or test the integration"
            }
          />
          <HowtoStart
            img={images.start3}
            step="3"
            title="Enter Company Details"
            desc={
              "A form interface where users can input a company name, website URL, and fetch meta descriptions. It also includes a section for a company description and a submit button."
            }
          />
          <HowtoStart
            img={images.start4}
            step="4"
            title="Detected Webpages"
            desc={
              " A dashboard displaying detected webpage URLs along with their scraping status (scraped or pending). It includes options to view data and a button to start chatbot training."
            }
          />
          <HowtoStart
            img={images.start5}
            step="4"
            title="Testing Screen:"
            desc={
              "This screen indicates the start of the chatbot integration testing process with a simple Run Test button."
            }
          />
          <HowtoStart
            img={images.start6}
            step="4"
            title="Enjoy the result"
            desc={
              "After testing the chatbot integration, this screen confirms success with celebratory visuals and provides options to explore the admin panel, start using the chatbot, or share on social media."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
