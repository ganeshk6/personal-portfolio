import React from "react";
import { FaGlobe, FaCode,  } from "react-icons/fa";
import { SiAntdesign  } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What i do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="I have arround 1+ Years of experiences in web development. Till now, I have created 10+ Project."
          icon={<FaCode />}
        />
        <Card 
        title="ReactJs Developer"
        des="I have knowledge in MERN Stack. I have developed 10+ project using ReactJs, NextJs, MERN Stack."
        icon={<SiAntdesign />}
        />
        <Card
        title="Hosting Websites"
        des="I have knowlede of cPanel, Hostinger.Till now, I have deployed 4+ Project on the Server."
        icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Feature;
