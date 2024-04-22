import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      
      <Contact />
      <Footer />
      {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> 
        <Footer />  */}
    </>
  );
}

export default App;
