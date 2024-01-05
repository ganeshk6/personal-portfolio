import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Resume from "./ganesh.pdf";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "MERN Stack Developer", "NextJs Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ganesh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm seeking a position as that will enhance my skills and offer
          security while aiding my professional growth and helping me contribute
          to the organisational growth.
        </p>
        <div className="xl:flex-row gap-6 lgl:gap-0 justify-between">
          <div>
        <a className="mb-10" href={Resume} download="Ganesh CV">
          <button
            className="w-full lgl:w-1/3 h-12 bg-[#141518] rounded-lg text-base
                 text-gray-400 tracking-wider uppercase hover:text-white 
                 duration-300 hover:border-[1px] hover:border-designColor 
                 border-transparent"
          >
            Download CV
          </button>
        </a>
        </div>
        <div>
        <a href="tel:+919693780132" download="Ganesh CV">
          <button
            className="w-full mt-5 lgl:w-1/3 h-12 bg-[#141518] rounded-lg text-base
                 text-gray-400 tracking-wider uppercase hover:text-white 
                 duration-300 hover:border-[1px] hover:border-designColor 
                 border-transparent"
          >
            Call Now
          </button>
        </a>
        </div>
        </div>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
};

export default LeftBanner;
