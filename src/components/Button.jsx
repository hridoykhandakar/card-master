const Button = ({ name, bgColor }) => {
  return (
    <button className={`px-4 py-2 ${bgColor} font-bold rounded-sm`}>
      {name}
    </button>
  );
};
export default Button;
