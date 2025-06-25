import React, { useState } from "react";
import homepageImg from "../../assets/Homepage-Img.jpg";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full font-Nunito rounded-3xl bg-[#CDEA68]">
      <h3 className="text-msg pt-[6vw] pl-[4vw] pr-[11vw] text-[3.5vw] tracking-tight leading-[4vw] text-zinc-900">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds</u>, <u>sell products</u>,{" "}
        <u>explain complex ideas</u>, & <u>hire great people</u>.
      </h3>

      <div className="expect-sec mt-[4.5vw] pl-[4vw] pt-5 pb-[10vw] text-md text-zinc-800 border-t-[1px] border-b-[1px] border-[#99AD53] md:flex sm:text-lg md:text-lg lg:text-xl ">
        <div className="e-left w-1/2">
          <p>What you can expect:</p>
        </div>

        <div className="e-right flex gap-[10vw] items-end">
          <div className="flex flex-col gap-8 sm:w-[35vw] md:w-[27vw] lg:w-[18vw]">
            <p>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>

          <div>
            <p className="mb-4">S:</p>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>

      <div className="approach-sec pl-[4vw] pr-[3vw] pt-5 pb-[4vw] md:flex">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-[3.8vw] tracking-tight text-zinc-900">
            Our approach:
          </h1>
          <button
            className="group relative p-[.5vw] pl-4 pr-14 w-fit h-[5.3vh] flex items-center bg-zinc-800 text-white text-sm rounded-full md:h-[6.5vh] md:pl-6 md:pr-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            READ MORE{" "}
            <div className="w-2 h-2 text-zinc-700 absolute flex justify-center items-center right-6 rounded-full bg-[#fff] group-hover:h-8 group-hover:w-8 group-hover:right-2 transition-all duration-300 md:group-hover:h-10 md:group-hover:w-10">
              <MdArrowOutward className="absolute text-lg opacity-0 group-hover:opacity-[1] transition-all duration-300" />
            </div>
          </button>
        </div>

        <div
          className={`image-container w-[45vw] h-[32vw] mt-3 rounded-xl overflow-hidden bg-[#c4b7b7] transition-all duration-[.8s] ${
            isHovered && "scale-[0.96]"
          } `}
        >
          <img
            className={`w-full h-full object-cover transition-all duration-[.8s] ${
              isHovered && "scale-[1.07]"
            }`}
            src={homepageImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
