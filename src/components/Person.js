import { SocialIcon } from "react-social-icons";

const Person = () => {
  return (
    <div className="person-info md:float-right flex flex-col items-center my-2">
      <div
        className="person-photo bg-cover md:h-80 md:w-80 h-52 w-52 rounded-full border-4 border-gray-400"
        style={{
          backgroundImage:
            "url(https://avatars.githubusercontent.com/u/52939286)",
        }}
      />
      <div className="social-links text-center">
        <SocialIcon
          url="https://www.linkedin.com/in/andre-reis-sousa"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/andresousadev"
          bgColor="transparent"
          fgColor="gray"
        />
      </div>
    </div>
  );
};

export default Person;
