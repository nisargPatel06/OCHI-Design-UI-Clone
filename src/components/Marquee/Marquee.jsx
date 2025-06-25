import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-[7vw] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="marquee-text flex whitespace-nowrap border-t-[1px] border-b-[1px] border-[#4D837C] overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="mb-[-2vw] -mt-[.4vw] font-BN font-semibold leading-none text-white text-[23vw] pr-10"
        >
          WE ARE OCHI&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="mb-[-2vw] -mt-[.4vw] font-BN font-semibold leading-none text-white text-[23vw] pr-10"
        >
          WE ARE OCHI&nbsp;
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 9 }}
          className="mb-[-2vw] -mt-[.4vw] font-BN font-semibold leading-none text-white text-[23vw] pr-10"
        >
          WE ARE OCHI&nbsp;
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
