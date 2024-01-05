import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} 
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* Part one  */}
        <div>
          <div className="py-6 lgl:py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2018 - 2024
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div
            className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
          >
            <ResumeCard
              title="Bachelor of Computer Application"
              subTitle="Dev Bhoomi Uttarakhand University (2021 - 2024)"
              result="90%"
              des="The training provide by universities in order to prepare people to work in
        various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="Senior Secondary Education 12th"
              subTitle="K.S.T Collage (2019 - 2021)"
              result="67.2%"
              des="Higher education is tertiary education leading to aeard of an academic degree.
        Hogher education, also called post-secondary education."
            />
            <ResumeCard
              title="Secondary School Education 10th"
              subTitle="Nalanda Collegiate High School (2018 - 2019)"
              result="88.2%"
              des="Secondary education or post-primary education cover two ohases on the International
        Standard Classification of Education scale."
            />
          </div>
        </div>

        {/* part Two  */}
        {/* <div>
          <div className="py-6 lgl:py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2022 - Present
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
          </div>
          <div
            className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
          >
            <ResumeCard
              title="HACHIWEB, Values - Driven Technologists"
              subTitle="Full - Stack Developer (Jun 2022 - Nov 2022)"
              result="Dehradun"
              des="In Full-Stack I learned HTML, CSS, JavaScript, Bootstrap, WordPress, Ajax, JSON,
              PHP, MySQL, REST APIs, Laravel etc. And also worked on 5+ Live Project."
            />
            <ResumeCard
              title="FREELANCING"
              subTitle="Web Development, Logo Design, Web Design (Sep. 2023 - Present)"
              result="WFH"
              des="I'm working on freelancer for gain practical knowledge in various technologies, Like Web Development, UI/UX Design, Logo Design, Web Design etc."
            />
            <ResumeCard
              title="AAV SOLUTION"
              subTitle="Full-Stack Developer (Apr 2023  - Present)"
              result="WFH"
              des="Tech- .Net, Entity Framework, Unit Testing, C#, SQL Server, Web API,
              Angular etc. AAV SOLUTION is a USA base company so working in online as a Part-Time."
            />
          </div>
        </div> */}
      </motion.div>
  )
}

export default Education