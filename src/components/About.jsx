import React from "react";
import AboutImg from "../assets/about-img.png";
// import NavBar from "./NavBar";

const About = () => {
  return (
    <>
      {/* <NavBar /> */}
      <section className="bg-secondery text-white px-5 py-32" id="about">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="about-info">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              About Me
            </h2>

            <p className="pb-5">
              Hi, My Name Is Irakoze Marie. I am a Frontend Developer. I build
              beautifull websites with React and Tailwind CSS.
            </p>
            <p className="pb-5">
              I am proficient in Frontend skills like React.js,
              CSS,javascript,Tailwind and many more.
            </p>

            <p>In backend I know Node.js, MongoDB, and Mongoose</p>

            <p>
              In my spare time I create small project. Where I build various
              projects.
            </p>
          </div>

          <div className="about-img">
            <img
              src={AboutImg}
              alt="coding illustration"
              className="lgw-[80%] md:ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
