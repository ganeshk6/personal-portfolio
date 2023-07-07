import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" />
        <div>GANESH</div>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
              hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span onClick={()=>setShowMenu(!showMenu)} className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
        justify-center rounded-full text-designColor cursor-pointer"><FiMenu /></span>
        {
          showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900
            p-4 scrollbar-hide">
              <div className="flex flex-col gap-8 py-2 relative">
              <div>
              <img className="" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Hii, I'm Ganesh Kumar. I'm a full stack web developer. Till Now, 
                  I have create 10+ project in Full Stack with responsive.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {
                  navLinksdata.map((item)=>(
                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer
                    hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor duration-300"
                    >
                      <Link
                      onClick={()=>setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >{item.title}</Link>
                    </li>
                  ))
                }
              </ul>
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
              <span
              onClick={()=> setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor
              duration-300 text-2xl cursor-pointer">
                <MdClose />
              </span>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
