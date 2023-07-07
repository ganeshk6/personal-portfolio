import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}}
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 font-titleFont"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievement & </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="International Technothon'22"
            subTitle=" Galgotias College of Engineering and Technology."
            result="Success"
            des="International Technothon’22 from Galgotias
            College of Engineering andTechnology. I have created a Smart Dustbin by
            using Ardunio, sensor, Battery etc. in 4 members of team.
            "
          />
          <ResumeCard
            title="National Hackathon Lakshagriha’22"
            subTitle="Own Campus Dev Bhoomi Uttarakhand University"
            result="Success"
            des="National Hackathon Lakshagriha’22 in own
            Campus DBUU. We were in 4 members of group. This is coding base Hackathone.
            Our team was on 4th position in 30+ Team."
          />
          <ResumeCard
            title="International level Symposium"
            subTitle="Own Campus Dev Bhoomi Uttarakhand University"
            result="Success"
            des="Certify with two times international level Symposium. 
            All lecturers were from out of India. In this Symposium
            we learn Cyber Security. "
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CodeKare - June'23 Round 1"
            subTitle="Coding Ninja"
            result="Success"
            des="Certify with CodeKare – June’2023 Round 1. In Round 1 having 
            Aptitude question, Reasoning Question and Sample Coding Question."
          />
          <ResumeCard
            title="CodeKare - June'23 Round 2"
            subTitle="Coding Ninja"
            result="Success"
            des="Certify with CodeKare – June’2023 Round 1. In Round 2 having 
            MCQ Coding Question and Long Coding Question based on Data Structures.
            This types on question solve in JAVA, Python, C# only."
          />
          <ResumeCard
            title="Full Stack Developer Certificates"
            subTitle="HACHIWEB, Values - Driven Technologists"
            result="Success"
            des="Certify with 3 months Full Stack Internship from HACHIWEB, 
            Values - Driven Technologists. In this Internship I was learn Full Stack
            Technology and also working on 5+ Live project."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;