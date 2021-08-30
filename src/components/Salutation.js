const Salutation = () => {
  return (
    <div className="salutation text-sm 2xs:text-base sm:text-xl lg:text-7xl xl:float-left xl:w-4/6 text-center xl:text-left my-2">
      Hi there,
      <span className="align-middle mx-2 lg:mx-5 absolute" role="img">{String.fromCodePoint("0x0001F44B")}</span>
      <br />
      I'm {"{"} André Sousa {"}"}
    </div>
  );
};

export default Salutation;
