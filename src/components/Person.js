import { SocialIcon } from "react-social-icons";

const Person = () => {
  return (
    <div className="person-info lg:float-right xl:w-2/6 flex flex-col items-center my-2">
      <div
        className="person-photo bg-cover lg:h-80 lg:w-80 sm:h-52 sm:w-52 h-32 w-32 rounded-full border-4 border-gray-400"
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
          className="mx-1"
        />
        <SocialIcon
          url="https://github.com/andresousadev"
          bgColor="transparent"
          fgColor="gray"
          className="mx-1"
        />
      </div>
    </div>
  );
};

export default Person;
