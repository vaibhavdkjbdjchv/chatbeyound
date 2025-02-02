import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import images from "../src/images";
import AuthButtons from "./AuthButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faComment,
  faHouse,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { easeInOut } from "motion";

function Navbar() {
  const { user, logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="scrolanimation w-[80vw] my-5 rounded-4xl lg:py-10  py-0 px-5 ">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center w-1/4">
          <img src={images.logo} className="rounded-full w-12" alt="Logo" />
          <h2 className="font-bold">BeyondChat</h2>
        </div>

        {/* Desktop Navigation (Only visible at 1352px and above) */}
        <nav className="hidden xl:flex xl:min-[1352px]:flex navbar bg-blur w-full xl:min-[1352px]:w-1/2  py-5 rounded-2xl">
          <div className="navbarlist text-lg flex justify-between px-5 items-center font-light w-full">
            <a
              href="#"
              className="list flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
            >
              <FontAwesomeIcon icon={faHouse} />
              Home
            </a>
            <a
              href="#"
              className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
            >
              <FontAwesomeIcon icon={faUser} />
              About Us
            </a>
            <a
              href="#"
              className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
            >
              <FontAwesomeIcon icon={faComment} />
              Feedback
            </a>
            <a
              href="#"
              className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
            >
              <FontAwesomeIcon icon={faUsers} />
              Community
            </a>
          </div>
        </nav>

        {/* Auth Buttons (Only visible at 1352px and above) */}
        <div className="hidden xl:block xl:min-[1352px]:block  px-10">
          <div className="navbar py-5 px-10 rounded-2xl flex ">
            <AuthButtons />
          </div>
        </div>

        {/* Mobile Menu Toggle (Visible below 1352px) */}
        <button
          className="xl:hidden min-[1352px]:hidden text-2xl bg"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu (Only visible below 1352px) */}
      {menuOpen && (
        <motion.nav
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: easeInOut }}
          className="xl:hidden transition-opacity min-[1352px]:hidden mt-4 flex flex-col text-[20px] font-bold items-center space-y-4 bg-[#090909d8] p-4 rounded-lg"
        >
          <div className=" py-5 px-5 rounded-3xl bg-transparent  flex justify-center my-10">
            <AuthButtons />
          </div>
          <a
            href="#"
            className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
          >
            <FontAwesomeIcon icon={faHouse} />
            Home
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
          >
            <FontAwesomeIcon icon={faUser} />
            About Us
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
          >
            <FontAwesomeIcon icon={faComment} />
            Feedback
          </a>
          <a
            href="#"
            className="flex justify-center items-center gap-2 py-3 px-5 rounded-2xl"
          >
            <FontAwesomeIcon icon={faUsers} />
            Community
          </a>
        </motion.nav>
      )}
    </header>
  );
}

export default Navbar;
