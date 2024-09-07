import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-24 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="marquee-text flex gap-[4vw] whitespace-nowrap border-t-[1px] border-b-[1px] border-[#4D837C] overflow-hidden">
        <h1 className="-mb-[1vw] -mt-[1vw] font-['Roboto_Condensed_Medium'] font-semibold leading-none tracking-tight text-white text-[21vw]">
          WE ARE OCHI
        </h1>
        <h1 className="-mb-[1vw] -mt-[1vw] font-['Roboto_Condensed_Medium'] font-semibold leading-none tracking-tight text-white text-[21vw]">
          WE ARE OCHI.
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
