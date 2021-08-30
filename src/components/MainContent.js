import Button from "./Button";
import Person from "./Person";
import Salutation from "./Salutation";
import Summary from "./Summary";

const MainContent = () => {
  return (
    <div className="container h-4/6 flex items-center m-auto px-5 lg:px-10">
      <div className="card flex flex-col xl:block lg:px-10">
        <Person />
        <Salutation />
        <Summary />
        <Button classes="hire-me bg-gray-600 float-left rounded-sm my-2 mx-auto" content={<a href="mailto:andresousa.andresousa@gmail.com" className="block py-2 px-8 lg:py-3 lg:px-14 text-xs 2xs:text-sm sm:text-xl lg:text-2xl">Contact Me</a>}/>
      </div>
    </div>
  );
};

export default MainContent;
