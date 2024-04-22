import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        IMAC
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <Link to="/blog">service</Link>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/src/assets/cv.pdf" download class="btn">
              {" "}
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#blog">Blog</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/src/assets/cv.pdf" download class="btn">
              {" "}
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default NavBar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

// const NavBar = () => {
//   const [nav,setNav]= useState(false);
//   const handleNav = () => {
//     setNav(!nav);
//   };
//   const [showNav, setShowNav] = useState(false);
//   return (

//     <>
//       <header className="flex  justify-between px-5 py-2 bg-slate-600 text-white relative w-full z-10">
//         <Link to="/" onClick={() => setShowNav(!showNav)}>
//           Imac
//         </Link>
//         <nav className="hidden md:flex  gap-7 px-5 py-2 bg-slate-600 text-white ">
//           <Link to="/About">About</Link>
//           <Link to="/Skills">skills</Link>
//           <Link to="/Project">Project</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//         <div className="block md:hidden" onClick={handleNav} >
//           {nav ? <AiOutlineClose size= {20}/> :<AiOutlineMenu size={20}/>}
//         </div>
//         {showNav && (
//           <nav className="absolute  w-1/2 mx-auto flex flex-col space-y-2  gap-7 px-5 py-2 bg-white text-gray-700 mt-12 rounded-md  md:hidden ">
//             <Link onClick={() => setShowNav(!showNav)} to="/About">
//               About
//             </Link>
//             <Link onClick={() => setShowNav(!showNav)} to="/Skills">
//               skills
//             </Link>
//             <Link onClick={() => setShowNav(!showNav)} to="/Project">
//               Project
//             </Link>
//             <Link onClick={() => setShowNav(!showNav)} to="/contact">
//               Contact
//             </Link>
//           </nav>
//         )}
//       </header>
//     </>
//   );
// };
// export default NavBar;
