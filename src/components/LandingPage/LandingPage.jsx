import React, { useState } from "react";
import "./LandingPage.css";
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full h-screen font-['Neue_Montreal'] pt-1">
      <div className="text-section mt-36 px-[4vw]">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
          <div key={index} className="masker flex">
            {index === 1 && (
              <div className="mr-[.6vw] w-[8vw] h-[5.2vw] relative top-[.34vw] bg-red-500 rounded-md"></div>
            )}

            <h1 className="uppercase text-[7vw] text-zinc-800 tracking-tight font-['Roboto_Condensed_Medium'] leading-[6vw] font-semibold">
              {item}
            </h1>
          </div>
        ))}
      </div>

      <div className="tag px-4 py-1 h-[12.6vw] absolute right-0 top-[12vw] bg-red-500 cursor-pointer">
        <h1 className="text-xl text-white font-['Neue_Montreal'] font-semibold flex items-center">
          W<span className="text-3xl ml-[1px] mb-2">.</span>
        </h1>
      </div>
      <p className="absolute -right-5 top-[19vw] tracking-[1.5px] font-['Neue_Montreal'] font-semibold text-[.95vw] text-white -rotate-90 cursor-pointer">
        Site of the Day
      </p>

      <div className="border-t-[1px] border-zinc-400 text-zinc-700 mt-32 py-5 px-[4vw] flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <div className="start-btn flex justify-center items-center gap-1">
          <p
            className={`btn-text text-sm uppercase px-4 py-[6px] border-[1px] border-zinc-800 rounded-full cursor-pointer ${
              isHovered ? "bg-zinc-800 text-[#f1f1f1]" : "text-zinc-700"
            } transition-all duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Start The Project
          </p>

          <div
            className={`arrow relative overflow-hidden text-lg px-[7px] py-[7px] border-[1px] border-zinc-800 rounded-full flex justify-center items-center cursor-pointer ${
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
