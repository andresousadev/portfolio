import { SocialIcon } from "react-social-icons";

const Person = () => {
  return (
    <div className="person-info justify-self-end float-right self-center">
      <div
        className="person-photo bg-cover h-80 w-80 rounded-full border-4 border-gray-500"
        style={{
          backgroundImage:
            "url(https://avatars.githubusercontent.com/u/52939286)",
        }}
      />
      <div className="social-links text-center">
        <SocialIcon
          url="https://www.linkedin.com/in/andre-reis-sousa"
          bgColor="transparent"
          fgColor="white"
        />
        <SocialIcon
          url="https://github.com/andresousadev"
          bgColor="transparent"
          fgColor="white"
        />
      </div>
    </div>
  );
};

export default Person;
