const Salutation = () => {
  return (
    <div className="salutation text-2xl md:text-7xl md:float-left text-center md:text-left my-2">
      Hi there,
      <span className="align-middle mx-2 md:mx-5" role="img">{String.fromCodePoint("0x0001F44B")}</span>
      <br />
      I'm {"{"} André Sousa {"}"}
    </div>
  );
};

export default Salutation;
