import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
    initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div
            className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
          >
            <ResumeCard
              title="HACHIWEB, Values - Driven Technologists"
              subTitle="Full - Stack Developer (Jun 2022 - Nov 2022)"
              result="Dehradun"
              des="In Full-Stack I learned HTML, CSS, JavaScript, Bootstrap, WordPress, Ajax, JSON,
              PHP, MySQL, REST APIs, Laravel etc. And also worked on 5+ Live Project.
              "
            />
            <ResumeCard
              title="NEXTWEBGURU TECHNO SERVICES PVT LTD"
              subTitle="NextJs Internship (Jul. 2023 – Aug. 2023)"
              result="WFH"
              des="I have Learn Next.js and developed the project. I have worked on e-commerce website https://nwg-ecommerce.vercel.app/."
            />
            <ResumeCard
              title="AAV SOLUTION"
              subTitle="Full-Stack Developer (Apr 2023  - Present)"
              result="WFH"
              des="Tech- .Net, Entity Framework, Unit Testing, SQL Server, Web API,
              Angular etc. AAV SOLUTION is a USA base company so working in online as a Part-Time.
              Now, I'm working on Project."
            />
          </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;