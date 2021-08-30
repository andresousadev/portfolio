import js_logo from "../assets/js_logo.svg";

const Summary = () => {
  return (
    <div className="summary text-base md:text-2xl md:float-left my-2 text-center md:text-left text-gray-400">
      FullStack Web developer with 2 years of experience
      <br />
      Passionate about software development, and eager to learn new technologies
      <br />My favourite language is
      <div className="preferred-language inline-block h-6 w-6 ml-2 align-text-bottom">
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
