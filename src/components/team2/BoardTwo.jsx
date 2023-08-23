import { useContext, useState } from "react";
import ScoreContext from "../../ScoreContext";
import EditValue from "../EditValue";

const BoardTwo = () => {
  const { totalScoreTwo, bidHistoryTwo, nameTwo, setNameTwo, redTwo } =
    useContext(ScoreContext);

  return (
    <>
      <div className="one w-1/2 border-r flex flex-col justify-between">
        <div className="name border-b py-1">
          <EditValue value={nameTwo} setValue={setNameTwo} />
        </div>
        <div className="scoreBoard h-[380px] text-center text-lg overflow-scroll overflow-x-hidden overflow-y-scroll no-scrollbar">
          <ul>
            {bidHistoryTwo.map((item) => (
              <div key={item.id}>
                <li
                  className={`flex justify-around ${
                    item.operation === "-" ? "text-red-500 font-bold" : ""
                  }`}
                >
                  <span className="pr-2">{item.id}:</span>
                  {item.valueTwo}
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
          <p
            className={`text-center text-xl ${
              redTwo ? "text-red-400 font-bold" : ""
            }`}
          >
            Total : {totalScoreTwo}
          </p>
        </div>
      </div>
    </>
  );
};
export default BoardTwo;
