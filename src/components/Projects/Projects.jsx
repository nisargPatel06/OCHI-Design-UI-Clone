import React, { useState } from "react";
import "./Projects.css";
import { MdArrowOutward } from "react-icons/md";
import CS from "../../assets/Cardboard_Spaceship.png";
import MH from "../../assets/Matt_Horn.png";
import Fyde from "../../assets/Fyde.png";
import Vise from "../../assets/Vise.jpg";
import Trawa from "../../assets/Trawa.jpg";
import PB from "../../assets/Premium_Blend.png";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const projectData = [
    {
      name: "Cardboard Spaceship",
      img: CS,
      tag: ["Branded Template", "Sales Deck", "Social Media Templates"],
    },
    { name: "AH2 & Matt Horn", img: MH, tag: ["Pitch Deck"] },
    {
      name: "Fyde",
      img: Fyde,
      tag: ["Audit", "Copywriting", "Sales Deck", "Slides Design"],
    },
    { name: "Vise", img: Vise, tag: ["Agency", "Company Presentation"] },
    {
      name: "Trawa",
      img: Trawa,
      tag: ["Brand Identity", "Design Research", "Investor Deck"],
    },
    { name: "Premium Blend", img: PB, tag: ["Branded Template"] },
  ];

  return (
    <div className="pt-[6vw] pb-[3vw] w-full font-['Neue_Montreal'] rounded-3xl">
      <h1 className="px-[4vw] mb-[2vw] text-zinc-800 text-[3.8vw]">
        Featured projects
      </h1>

      <div className="border-t-[1px] border-zinc-400">
        <div className="px-[4vw] py-12 w-full flex flex-wrap gap-3 overflow-hidden">
          {projectData.map((project, index) => (
            <div className="project w-[49%] mb-[2.5vw]" key={index}>
              <div className="flex items-center gap-2 mb-[1vw]" id={index}>
                <div className="black-dot w-[10px] h-[10px] rounded-full bg-zinc-800"></div>
                <h2 className="uppercase text-sm text-zinc-800">
                  {project.name}
                </h2>
              </div>

              <div className="relative">
                <h1
                  className={`absolute z-10 flex font-['Roboto_Condensed_Medium'] font-semibold text-[6vw] text-[#CDEA68] top-1/2 -translate-y-1/2 ${
                    index % 2 == 0
                      ? "left-full -translate-x-1/2"
                      : "right-full translate-x-1/2"
                  }`}
                >
                  {project.name.split("").map((item, idx) => (
                    <span key={idx} className="uppercase leading-none">
                      {item}
                    </span>
                  ))}
                </h1>

                <div className="group w-full h-[77vh cursor-pointer">
                  <div className="w-full h-full rounded-xl overflow-hidden transition-scale duration-700 group-hover:scale-95">
                    <img
                      className="rounded-xl transition-scale duration-700 group-hover:scale-110"
                      src={project.img}
                      alt={project.name}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-[1vw]">
                {project.tag.map((tag, index) => (
                  <p
                    key={index}
                    className="tags relative z-[1] overflow-hidden px-3 py-1 border border-[#494949] rounded-full uppercase text-[#2b2b2b] text-sm cursor-pointer hover:text-[#f5f5f5]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="group relative p-[.5vw] pl-6 pr-16 w-fit h-[9.5vh] flex items-center bg-zinc-800 text-white text-sm rounded-full">
            VIEW ALL CASE STUDIES
            <div className="w-2 h-2 text-zinc-700 absolute flex justify-center items-center right-6 rounded-full bg-[#fff] group-hover:h-10 group-hover:w-10 group-hover:right-2 transition-all duration-300">
              <MdArrowOutward className="absolute text-lg opacity-0 group-hover:opacity-[1] transition-all duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
