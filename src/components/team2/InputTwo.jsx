import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Bid from "../ui/Bid";

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
  const handleClickPlush = (e) => {
    e.preventDefault();
    setOperationTwo("+");
    setHtTwo(totalScoreTwo + bidTwo);
    setRed(false);
    check();
  };
  const handleClickMinus = (e) => {
    e.preventDefault();
    setOperationTwo("-");
    setHtTwo(totalScoreTwo - bidTwo);
    setRed(true);
    check();
  };
  return (
    <>
      <div className="input">
        <Bid operation={operationTwo} red={red} value={bidTwo} />

        <Input handleChange={handleChange} value={bidTwo} />
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
export default InputTwo;
