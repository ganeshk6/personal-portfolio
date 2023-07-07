import React from 'react'
import { contactImg } from "../../assets/index";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div
            className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] 
              to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center"
          >
            <img
              className="w-full h-64 object-cover rounded-lg mb-2"
              src={contactImg}
              alt="contactImg"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-white">Ganesh Kumar</h3>
              <p className="text-lg font-normal text-gray-400">
                MERN Stack Developer
              </p>
              <p className="text-base text-gray-400 tracking-wide">
                I'm a full stack web developer. Till Now, I have create 10+ project in
                Full Stack with responsive.
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Phone:
                <a href="tel:+919693780132">
                  <span className="text-lightText">+91 9693780132</span>
                </a>
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email:{" "}
                <a href="mailto:ganesh620671@gmail.com">
                  <span className="text-lightText">ganesh620671@gmail.com</span>
                </a>
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ganeshk6?tab=repositories"
                    target="__blank"
                  >
                    <span className="bannerIcon">
                      <FaGithub />
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ganesh-kumar-47988621b/"
                    target="__blank"
                  >
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </a>
                  <a
                    href="https://www.codingninjas.com/studio/profile/ganesh62"
                    target="__blank"
                  >
                    <span className="bannerIcon">
                      <SiCodingninjas />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ContactLeft