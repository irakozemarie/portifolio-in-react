import React from "react";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <>
      <NavBar />
      {/* <section className="bg-secondery px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
            Contact Me
          </h2>
          <p>
            I am currently open for a fulltime Frontend Developer role. If you
            want to discuss about that feel free to email me or call me.
          </p>

          <p className="py-2">
            <span className="font-bold">Email:</span> irakoze.antonny@gmail.com
          </p>
          <p className="py-2">
            <span className="font-bold">Phone:</span> +250787701373
          </p>
        </div>
      </section> */}
      <div id="contact" className="bg-secondery px-3 py-22">
        <div class="container mx-auto">
          <div className="flex flex-col gap-3 items-center">
            <h2 className="text-2xl font-bold mb-4 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
              Contact Me
            </h2>
            <h1 className="text-2xl text-white">Have a Question?</h1>
            <p className="w-1/2 text-center text-gray-400">
              Do you have an idea? Let's discuss it and see what we can do
              together.
            </p>
          </div>

          <form className="mt-5 p-8 flex flex-col gap-5 items-center">
            <input
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              type="text"
              placeholder="Name Surname"
            />
            <input
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dark:ring-0 dark:text-white"
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
