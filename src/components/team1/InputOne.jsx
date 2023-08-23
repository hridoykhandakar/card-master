import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Bid from "../ui/Bid";

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
  const handleClickMinus = (e) => {
    e.preventDefault();
    setOperationOne("-");
    setHtOne(totalScoreOne - bidOne);
    setRed(true);
    check();
  };
  const handleClickPlush = (e) => {
    e.preventDefault();
    setOperationOne("+");
    setHtOne(totalScoreOne + bidOne);
    setRed(false);
    check();
  };
  const check = () => {
    if (operationTwo && bidOne != bidTwo) {
      setDisable(false);
    }
  };
  return (
    <>
      <div className="input">
        <Bid red={red} operation={operationOne} value={bidOne} />

        <Input handleChange={handleChange} value={bidOne} />
      </div>
      <div className="buttons flex mt-1  justify-around">
        <Button
          color={"bg-red-500"}
          handleClick={handleClickMinus}
          value={"-"}
        />
        <Button
          color={"bg-green-500"}
          handleClick={handleClickPlush}
          value={"+"}
        />
      </div>
    </>
  );
};
export default InputOne;
