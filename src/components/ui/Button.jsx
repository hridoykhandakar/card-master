const Button = ({ value, handleClick, color }) => {
  return (
    <button
      type="submit"
      className={`${color} btn font-bold text-2xl shadow-2xl`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};
export default Button;
