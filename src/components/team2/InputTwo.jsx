import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";

const InputTwo = () => {
  const [red, setRed] = useState(false);
  const {
    bidTwo,
    bidOne,
    setBidTwo,
    operationTwo,
    setOperationTwo,
    totalScoreTwo,
    setHtTwo,
    setBidOne,
    operationOne,
    setDisable,
  } = useContext(ScoreContext);
  const handleChange = (e) => {
    setBidTwo(parseInt(e.target.value));
    if (bidTwo > 5) {
      setBidOne(5);
    }
  };
  const check = () => {
    if (operationOne && bidOne != bidTwo) {
      setDisable(false);
    }
  };
  return (
    <>
      <div className="input">
        <p className={`text-base ${red ? "text-red-400 font-bold" : ""}`}>
          {operationTwo}
          {bidTwo}
        </p>
        <input
          type="range"
          min="5"
          max="13"
          value={bidTwo}
          onChange={handleChange}
        />
      </div>
      <div className="buttons flex mt-1  justify-around">
        <button
          type="submit"
          className="btn bg-red-500 font-bold text-2xl"
          value="-"
          onClick={(e) => {
            e.preventDefault();
            setOperationTwo("-");
            setHtTwo(totalScoreTwo - bidTwo);
            setRed(true);
            check();
          }}
        >
          -
        </button>
        <button
          type="submit"
          className="btn bg-green-500 font-bold text-2xl"
          value="+"
          onClick={(e) => {
            e.preventDefault();
            setOperationTwo("+");
            setHtTwo(totalScoreTwo + bidTwo);
            setRed(false);
            check();
          }}
        >
          +
        </button>
      </div>
    </>
  );
};
export default InputTwo;
