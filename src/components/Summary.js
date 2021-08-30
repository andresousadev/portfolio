import js_logo from "../assets/js_logo.svg";

const Summary = () => {
  return (
    <div className="summary text-2xl float-left opacity-50 my-5">
      FullStack Web developer with 2 years of experience
      <br />
      Passionate about software development, and eager to learn new technologies
      <br />My favourite language is
      <div className="preferred-language inline-block h-6 w-6 ml-4">
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
