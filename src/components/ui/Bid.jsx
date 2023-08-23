const Bid = ({ red, operation, value }) => {
  return (
    <span
      className={`text-base block  mx-5 ${red ? "text-red-400 font-bold" : ""}`}
    >
      {operation}
      {value}
    </span>
  );
};
export default Bid;
