import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <>
      <NavBar />
      <section className="bg-primary px-5 text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I am <span className="text-accent">a</span>
              <br />
              Frontend Developer
            </h1>

            <p className="py-5">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>

            <div className="flex py-5 ">
              <a
                href="https://github.com/irakozemarie"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                {" "}
                <AiOutlineGithub size={40} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/irakoze-marie-antoinette/"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                {" "}
                <AiOutlineLinkedin size={40} />{" "}
              </a>
              <a
                href="https://www.facebook.com/irakoze.chance.56?mibextid=ZbWKwL/"
                className="pr-4 inline-block text-accent hover:text-white"
              >
                {" "}
                <AiOutlineFacebook size={40} />{" "}
              </a>
            </div>

            <a
              href="/#projects"
              className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            >
              See Projects
            </a>
          </div>

          <div className="hero-img">
            <img
              src={HeroImg}
              alt="coding illustration"
              className="lgw-[80%] ml-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
