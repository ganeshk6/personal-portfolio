import React from 'react'
import {
    FaLinkedinIn,
    FaInstagram,
    // FaFacebookF,
    FaGithub,
    FaGitlab,
  } from "react-icons/fa";
  import { SiGmail, SiCodingninjas } from "react-icons/si";
  
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
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
              href="https://www.codingninjas.com/studio/profile/ganesh62"
              target="__blank"
            >
              <span className="bannerIcon">
                <SiCodingninjas />
              </span>
            </a>
            <a href="https://gitlab.com/ganesh620671" target="__blank">
              <span className="bannerIcon">
                <FaGitlab />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
          </h2>
          <div className="flex gap-4">
          <a
              href="https://www.linkedin.com/in/ganesh-kumar-47988621b/"
              target="__blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="mailto:ganesh620671@gmail.com">
              <span className="bannerIcon">
                <SiGmail />
              </span>
            </a>
            <a
              href="https://www.instagram.com/ganesh.official_62/"
              target="__blank"
            >
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
          </div>
        </div>
      </div>
  )
  
}


        
export default Media