import React from "react";
import Title from "../layouts/Title";
import { projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index"
import ProjectsCard from "./ProjectsCard";



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {/* <ProjectsCard
          title="Textflo"
          des="Lorem ipsum dolor sit amet consecteture adipisicing elit. 
          atque soluta hi consequuntur wum repelledum ad."
          src={projectOne}
          gitGubUrl=''
          projectUrl='https://textflo.com/'
        /> */}
        <ProjectsCard
          title="CRUD in MERN"
          des="I have made a CRUD operation project by using React.js , Express.js, Node.js and MongoDB and create API."
          src={projectTwo}
          gitGubUrl='https://github.com/ganeshk6/backendserver'
          projectUrl='https://merncrud-zcui.onrender.com/'
        />
        <ProjectsCard
          title="Admin Dashboard"
          des="Make a Admin Dashboard by Using technology React.js, chart.js, D3.js etc. This is responsive for all the screen."
          src={projectThree}
          gitGubUrl='https://github.com/ganeshk6/admindashboard'
          projectUrl='https://react-admin-ganesh.netlify.app/'
        />
        <ProjectsCard
          title="Todo App"
          des="This is a Abdroid base App. I gave To-dos Select To-dos, Single Delete To-dos and All Delete To-dos functionality."
          src={projectFour}
          gitGubUrl='https://github.com/ganeshk6/todoapp'
          projectUrl=''
        />
        <ProjectsCard
          title="Finance Project"
          des="This is a Finance Website. In this website, I'm using HTML, CSS, JavaScript, BootStrap, PHP and MyQSL."
          src={projectFive}
          gitGubUrl='https://github.com/ganeshk6/abhinashfinance.github.io'
          projectUrl='https://ganeshk6.github.io/abhinashfinances.github.io/'
        />
        <ProjectsCard
          title="Recycling e-Waste"
          des="Recycling e-Waste and Li Batteries templates of
          Remine India Private Limited. This is full responsive website for all Screen."
          src={projectSix}
          gitGubUrl='https://github.com/ganeshk6/remineindia.github.io'
          projectUrl='https://ganeshk6.github.io/remine.github.io/'
        />
        <ProjectsCard
          title="Panpeninsula"
          des="This is Properties sell and buy project. This is based on WordPress. during Internship Period I was worked on this."
          src={projectSeven}
          gitGubUrl=''
          projectUrl='http://panpeninsulaproperties.com/'
        />
        <ProjectsCard
          title="Happy Club"
          des="This is a Healths Project. This is based on Laravel, during Internship period I was worked on this project."
           src={projectEight}
           gitGubUrl=''
           projectUrl='https://happyclubunited.com/'
        />
      </div>
    </section>
  );
};

export default Projects;
