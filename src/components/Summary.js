import js_logo from "../assets/js_logo.svg";

const Summary = () => {
  return (
    <div className="summary text-xs 2xs:text-sm sm:text-xl lg:text-2xl xl:float-left xl:w-4/6 my-2 text-center xl:text-left text-gray-400">
      FullStack developer with 2 years of experience
      <br />
      Passionate about software development, and eager to learn new technologies
      <br />My favourite language is
      <div className="preferred-language inline-block h-4 w-4 2xs:h-4 2xs:w-4 md:h-6 md:w-6 ml-1 sm:ml-2 align-text-bottom">
        <img
          src={js_logo}
          className="javascript-logo"
          alt="Javascript Logo"
        />
      </div>
    </div>
  );
};

export default Summary;
