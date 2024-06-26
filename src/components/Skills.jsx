const Skills = () => {
  return (
    <div id="services" className="dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-indigo-600 font-bold">SERVICES</h1>
          <h1 className="text-3xl dark:text-white">What do I offer?</h1>
          <p className="w-1/2 text-center text-gray-400">
            My approach to website design is to create a website that
            strengthens your company brand while ensuring ease of use and
            simplicity for your audience.
          </p>
        </div>

        <div className="p-5 sm:p-0 flex flex-wrap justify-between">
          <div className="w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3">
            <img className="w-10" src="./img//icon1.png" alt="" />
            <h1 className="font-medium text-lg dark:text-white">FRONTEND</h1>
            <p className="text-gray-400">
              I specialize in creating interactive websites for individuals and
              small businesses.
            </p>
            <a className="text-indigo-600 font-semibold text-sm" href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills