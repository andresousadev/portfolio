const Salutation = () => {
  return (
    <div className="salutation text-7xl float-left">
      Hi there,
      <span className="text-6xl align-middle ml-5" role="img">{String.fromCodePoint("0x0001F44B")}</span>
      <br />
      I'm {"{"} André Sousa {"}"}
    </div>
  );
};

export default Salutation;
