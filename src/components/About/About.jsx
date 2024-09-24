import React, { useState } from "react";
import homepageImg from "../../assets/Homepage-Img.jpg";
import { MdArrowOutward } from "react-icons/md";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full font-['Neue_Montreal'] rounded-3xl bg-[#CDEA68]">
      <h3 className="text-msg pt-[6vw] px-[4vw] text-[3.8vw] leading-[4vw] text-zinc-900">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds</u>, <u>sell products</u>,{" "}
        <u>explain complex ideas</u>, & <u>hire great people</u>.
      </h3>

      <div className="expect-sec mt-[4.5vw] px-[4vw] pt-5 pb-[5vw] text-zinc-800 flex border-t-[1px] border-b-[1px] border-[#99AD53]">
        <div className="e-left w-1/2">
          <p>What you can expect:</p>
        </div>

        <div className="e-right flex gap-[10vw] items-end">
          <div className="w-[21vw] flex flex-col gap-8">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
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

      <div className="approach-sec flex px-[4vw] pt-5 pb-[4vw]">
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="text-[3.8vw] text-zinc-900">Our approach:</h1>
          <button
            className="group relative p-[.5vw] pl-6 w-[12.5vw] h-[4vw] flex items-center bg-zinc-800 text-white text-[1vw] rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            READ MORE{" "}
            <div className="w-2 h-2 text-zinc-700 absolute flex justify-center items-center right-6 rounded-full bg-[#fff] group-hover:h-10 group-hover:w-10 group-hover:right-2 transition-all duration-300">
              <MdArrowOutward className="absolute text-lg opacity-0 group-hover:opacity-[1] transition-all duration-300" />
            </div>
          </button>
        </div>

        <div className="image-container overflow-hidden w-1/2 bg-cover bg-center rounded-xl">
          <img
            className={`transition-all duration-[.8s] ${
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
