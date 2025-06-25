import React, { useState } from "react";
import "./LandingPage.css";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-screen pt-1">
      <div className="text-section mt-[18vh] px-[3.5vw] sm:mt-[18vh] md:mt-[18vh] xl:mt-[21vh]">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <motion.div key={index} className="masker flex items-center">
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                className="mr-[1vw] w-[8vw] h-[5.5vw] relative top-[-.45vw] bg-red-500 rounded-md"
              ></motion.div>
            )}

            <h1 className="uppercase text-[7.7vw] text-zinc-800 tracking-wide font-BN leading-[6.5vw] font-semibold">
              {item}
            </h1>
          </motion.div>
        ))}
      </div>

      <div className="relative">
        <div className="tag px-3 py-2 h-[15vh] absolute right-0 top-[-19vw] bg-red-500 cursor-pointer overflow-hidden md:h-[17vh]">
          <h1 className="text-md text-white font-Nunito font-semibold flex items-center md:text-xl">
            W<span className="ml-[1px]">.</span>
          </h1>
          <p className="absolute w-[12vh] -right-[3vh] top-[6.5vh] font-Nunito font-semibold text-[#fffffff3] text-[12px] -rotate-90 cursor-pointer md:top-[8vh]">
            Site of the Day
          </p>
        </div>
      </div>

      <div
        className="border-t-[1px] border-zinc-400 font-Nunito text-zinc-900 text-md mt-[42vh] py-5 px-[4vw] justify-between 
      md:flex md:mt-[35vh]
      lg:text-lg lg:mt-[25vh]
      xl:text-xl xl:mt-[14vh]"
      >
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="mb-2" key={index}>
            {item}
          </p>
        ))}

        <div className="start-btn flex justify-cente items-center gap-2">
          <p
            className={`btn-text text-md uppercase px-4 py-[6px] border-[1px] border-zinc-800 rounded-full cursor-pointer lg:text-lg xl:text-xl ${
              isHovered ? "bg-zinc-800 text-[#f1f1f1]" : "text-zinc-900"
            } transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start The Project
          </p>

          <div
            className={`arrow relative overflow-hidden text-lg px-[10px] py-[10px] border-[1px] border-zinc-800 rounded-full flex justify-center items-center cursor-pointer ${
              isHovered ? "text-[#f1f1f1]" : "text-zinc-700"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MdArrowOutward className="z-10 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
