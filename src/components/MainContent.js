import Button from "./Button";
import Person from "./Person";
import Salutation from "./Salutation";
import Summary from "./Summary";

const MainContent = () => {
  return (
    <div className="container h-4/6 flex items-center m-auto p-10">
      <div className="card">
        <Salutation />
        <Person />
        <Summary />
        <Button classes="hire-me bg-gray-500 float-left rounded-sm" content={<a href="mailto:andresousa.andresousa@gmail.com" className="block py-3 px-14 text-2xl">Hire Me</a>}/>
      </div>
    </div>
  );
};

export default MainContent;
