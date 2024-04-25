"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full lg:h-auto flex flex-col items-center justify-center italic hover:not-italic subpixel-antialiased ">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <ComputerDesktopIcon className="text-[#b49bff]  max-sm:text-yellow-500 mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] italic hover:not-italic subpixel-antialiased ">
          I Speak Business & Code: MERN Stack Developer + BBA Graduate
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px] italic hover:not-italic subpixel-antialiased "
      >
        Making Website with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center italic hover:not-italic subpixel-antialiased "
      >
        Code with a Business Mindset: Transforming Ideas into Web Realities
      </motion.div>
    </div>
  );
};

export default SkillText;
