import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";
import EditValue from "../EditValue";

const BoardOne = () => {
  const { totalScoreOne, bidHistoryOne, nameOne, setNameOne, redOne } =
    useContext(ScoreContext);

  return (
    <>
      <div className="one w-1/2 border-r flex flex-col justify-between">
        <div className="name border-b py-1">
          <EditValue value={nameOne} setValue={setNameOne} />
        </div>
        <div className="scoreBoard h-[380px] text-center text-lg overflow-scroll overflow-x-hidden overflow-y-scroll no-scrollbar">
          <ul>
            {bidHistoryOne.map((item) => (
              <div key={item.id}>
                <li
                  className={`flex justify-around ${
                    item.operation === "-" ? "text-red-500 font-bold" : ""
                  }`}
                >
                  <span className="pr-2 ">{item.id}:</span>
                  {item.valueOne}
                  {item.operation}
                  {item.value}
                  <span>= {item.hTotal}</span>
                </li>
                <hr />
              </div>
            ))}
            <hr />
          </ul>
        </div>
        <div className="name border-t py-1">
          {/* <p className="text-center text-xl">Total : {totalScoreOne}</p> */}
          <p
            className={`text-center text-xl ${
              redOne ? "text-red-400 font-bold" : ""
            }`}
          >
            Total : {totalScoreOne}
          </p>
        </div>
      </div>
    </>
  );
};
export default BoardOne;
