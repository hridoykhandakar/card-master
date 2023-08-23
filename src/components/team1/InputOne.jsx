import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";

const InputOne = () => {
  const [red, setRed] = useState(false);
  const {
    bidOne,
    bidTwo,
    setBidOne,
    operationOne,
    setOperationOne,
    totalScoreOne,
    setHtOne,
    setBidTwo,
    operationTwo,
    setDisable,
  } = useContext(ScoreContext);
  const handleChange = (e) => {
    setBidOne(parseInt(e.target.value));
    if (bidOne > 5) {
      setBidTwo(5);
    }
  };
  const check = () => {
    if (operationTwo && bidOne != bidTwo) {
      setDisable(false);
    }
  };
  return (
    <>
      <div className="input">
        <p className={`text-base ${red ? "text-red-400 font-bold" : ""}`}>
          {operationOne}
          {bidOne}
        </p>
        <input
          type="range"
          min="5"
          max="13"
          value={bidOne}
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
            setOperationOne("-");
            setHtOne(totalScoreOne - bidOne);
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
            setOperationOne("+");
            setHtOne(totalScoreOne + bidOne);
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
export default InputOne;
