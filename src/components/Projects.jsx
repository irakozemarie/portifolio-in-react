import React from "react";
import devlog from "../assets/devlog.png";

import dice from "../assets/dice.png";
import flag from "../assets/flag.png";
// import NavBar from "./NavBar";
import addnew from "../assets/addnew.png";

const Projects = () => {
  const projects = [
    {
      img: devlog,
      title: "devlog",
      desc: "  Built with html and css ",
      live: "https://br-architect-sandy.vercel.app/",
      code: "https://github.com/irakozemarie/Br-Architect",
    },
    {
      img: flag,
      title: "flag",
      desc: "Country APP. Built with Tailwind css, JavaScript,React",
      live: "https://countries-app-beige-gamma.vercel.app/",
      code: "https://github.com/irakozemarie/Countries-APP/tree/irakoze",
    },
    {
      img: addnew,
      title: "add new",
      desc: "Personal portifolio, solved with  html and tailwindCSS",
      live: "https://irakoze-portifolio2024.vercel.app/",
      code: "https://github.com/irakozemarie/irakozePortifolio2024",
    },
    {
      img: dice,
      title: "dice",
      desc: "solved with javascript",
      live: "https://roll-dice-murex.vercel.app/",
      code: "https://github.com/irakozemarie/Roll_dice",
    },
  ];

  return (
    <>
      {/* <NavBar /> */}
      <section className="bg-primary text-white px-5 py-32" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              Projects
            </h2>

            <p className="pb-5">
              These are some of my best projects. I have built these with React,
              html,css,tailwindCss. Check them out.
            </p>
          </div>

          <div className="about-img"></div>
        </div>

        <div className="projects container mx-auto grid md:grid-cols-3 gap-10 ">
          {projects.map((project, i) => {
            return (
              <div className="relative " key={i}>
                <img src={project.img} alt={project.title} />
                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                  <p className="py-5 text-center font-bold px-2 text-white">
                    {project.desc}
                  </p>

                  <div className="mx-auto">
                    <a
                      href={project.live}
                      className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
