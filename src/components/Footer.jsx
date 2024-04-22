import React from "react";

const Footer = () => {
  return (
    <div className="py-4 text-center bg-slate-500 text-white ">
      {" "}
      &copy; {new Date().getFullYear()}. Irakoze all right reserved
    </div>
  );
};

export default Footer;
