import React from "react";
import { motion } from "framer-motion";
import ScreenMatcher from "../utilities/ScreenMatcher";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isMedium = ScreenMatcher("(max-width: 768px)");

  return (
    <div className="relative w-full border-b h-14 border-light/50 px-10  md:px-20 flex justify-center items-center">
      <div className="w-full h-14 flex items-center">
        <h1 className="text-xl">ALI_ARMAN</h1>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{
          width: `${isMedium ? "calc(100% - 80px)" : "calc(100% - 160px)"}`,
        }}
        transition={{ ease: [0.37, 0, 0.63, 1], duration: 1, delay: 1 }}
        className="absolute -bottom-[2px] left-1/5 w-[calc(100%-160px)] border-b border-light/70 h-14"
      ></motion.div>
      <div className="flex gap-10 items-center z-10">
        <Link to="/" className="text-sm">
          Home
        </Link>
        <Link to="/projects" className="text-sm">
          Projects
        </Link>
      </div>
      <div className="w-full max-md:hidden"></div>
    </div>
  );
}
