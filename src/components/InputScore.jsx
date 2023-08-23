import { useState, useContext } from "react";
import ScoreContext from "../ScoreContext";

const InputScore = () => {
  const { setTotalScoreOne, totalScoreOne } = useContext(ScoreContext);
  const [value, setValue] = useState(5);
  const [operation, setOperation] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setOperation(e.target.value);
    setTotalScoreOne(totalScoreOne + parseInt(value));
  };
  return (
    <>
      <div className="input">
        <p>
          {operation}
          {value}
        </p>
        <input type="range" min="5" max="13" onChange={handleChange} />
      </div>
      <div className="buttons flex mt-1  justify-around">
        <button
          type="submit"
          className="btn bg-red-500 font-bold text-2xl"
          value="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          type="submit"
          className="btn bg-green-500 font-bold text-2xl"
          value="+"
          onClick={handleClick}
        >
          +
        </button>
      </div>
    </>
  );
};
export default InputScore;
