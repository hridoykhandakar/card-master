const Input = ({ value, handleChange }) => {
  return (
    <input
      className="shadow-2xl"
      type="range"
      min={"5"}
      max={"13"}
      value={value}
      onChange={handleChange}
    />
  );
};
export default Input;
