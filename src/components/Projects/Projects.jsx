import React from "react";
import CS from "../../assets/Cardboard_Spaceship.png";
import MH from "../../assets/Matt_Horn.png";
import Fyde from "../../assets/Fyde.png";
import Vise from "../../assets/Vise.jpg";
import Trawa from "../../assets/Trawa.jpg";
import PB from "../../assets/Premium_Blend.png";

const Projects = () => {
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
        <div className="px-[4vw] py-12 w-full flex flex-wrap gap-3">
          {projectData.map((project, index) => (
            <div className="project w-[49%] mb-[2vw]" key={index}>
              <div className="flex items-center gap-2 mb-[1vw]" id={index}>
                <div className="black-dot w-[10px] h-[10px] rounded-full bg-zinc-800"></div>
                <h2 className="uppercase text-sm text-zinc-800">
                  {project.name}
                </h2>
              </div>

              <div className="group w-full h-[77vh]">
                <div className="w-full h-full rounded-xl overflow-hidden transition-scale duration-700 group-hover:scale-95">
                  <img
                    className="rounded-xl transition-scale duration-700 group-hover:scale-110"
                    src={project.img}
                    alt={project.name}
                  />
                </div>
              </div>

              {project.tag.map((tag, index) => (
                <div>{tag}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
