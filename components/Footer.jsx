import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTiktok,
  faLinkedin,
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import images from "../src/images";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 rounded-t-[100px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo Section */}
        <div className="flex flex-col space-y-3">
          <img src={images.logo} alt="Norby AI Logo" className="h-12 w-12" />
        </div>

        {/* Join Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Join</h3>
          <a href="#" className="text-gray-400 hover:text-white">
            Sign Up
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Login
          </a>
        </div>

        {/* Product Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Product</h3>
          <a href="#" className="text-gray-400 hover:text-white">
            Pricing
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Knowledge Base
          </a>
        </div>

        {/* Affiliate Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Affiliate</h3>
          <a href="#" className="text-gray-400 hover:text-white">
            Share & Earn
          </a>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold">Legal</h3>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy & Cookies
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 Norby AI. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-red-500 text-xl">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="text-gray-400 hover:text-black text-xl">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-700 text-xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 text-xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 text-xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500 text-xl">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
