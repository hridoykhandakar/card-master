import { useContext } from "react";
import ScoreContext from "../ScoreContext";
const Board = ({ score }) => {
  const { bidHistoryOne } = useContext(ScoreContext);
  console.log(bidHistoryOne);
  return (
    <>
      <div className="one w-1/2 border-r flex flex-col justify-between">
        <div className="name border-b py-1">
          <p className="text-center text-xl">Team 01</p>
        </div>
        <div className="scoreBoard h-[380px] text-center text-lg overflow-scroll overflow-x-hidden overflow-y-scroll no-scrollbar">
          <ul>
            {bidHistoryOne.map((item) => (
              <div key={item.id}>
                <li>
                  <span className="pr-2">{item.id}:</span>
                  {item.operation}
                  {item.value} = {item.totalScoreOne}
                </li>
                <hr />
              </div>
            ))}
          </ul>
        </div>
        <div className="name border-t py-1">
          <p className="text-center text-xl">Total : {score}</p>
        </div>
      </div>
    </>
  );
};
export default Board;
