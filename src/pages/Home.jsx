// import Contact from "./components/Contact";
// // import Footer from "./components/Footer";
// import About from "./components/About";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//     </>
//   );
// };

// export default Home;
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
