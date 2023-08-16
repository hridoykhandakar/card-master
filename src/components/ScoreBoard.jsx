import { useState } from "react";
import Modal from "./Modal";

const ScoreBoard = ({
  boardOne,
  boardTwo,
  totalScoreTeamOne,
  totalScoreTeamTwo,
  setTotalScoreTeamOne,
  setTotalScoreTeamTwo,
}) => {
  const [teamOne, setTeamOne] = useState("Team 01");
  const [teamTwo, setTeamTwo] = useState("Team 02");
  const [editOne, setEditOne] = useState(false);
  const [editTwo, setEditTwo] = useState(false);
  const [editScoreOne, setEditScoreOne] = useState(false);
  const [editScoreTwo, setEditScoreTwo] = useState(false);
  const handleClickOne = () => {
    setEditOne(!editOne);
    setEditTwo(false);
    setEditScoreOne(false);
    setEditScoreTwo(false);
  };
  const handleClickTwo = () => {
    setEditTwo(!editTwo);
    setEditOne(false);
    setEditScoreOne(false);
    setEditScoreTwo(false);
  };
  // Score Update Function

  const handleClickScoreOne = () => {
    setEditScoreOne(!editScoreOne);
    setEditTwo(false);
    setEditOne(false);
    setEditScoreTwo(false);
  };
  const handleClickScoreTwo = () => {
    setEditTwo(false);
    setEditOne(false);
    setEditScoreTwo(!editScoreTwo);
    setEditScoreOne(false);
  };
  return (
    <section>
      <div className="score-board h-[450px] w-[340px] bg-gray-900  flex justify-between">
        <div className="team1 border rounded-t-md w-1/2">
          {editOne ? (
            <Modal
              setValue={setTeamOne}
              title={"Set Team 1 Name"}
              setEdit={setEditOne}
              team={teamOne}
              type="text"
            />
          ) : (
            <h1 className="hidden"></h1>
          )}
          {editTwo ? (
            <Modal
              setValue={setTeamTwo}
              title={"Set Team 2 Name"}
              setEdit={setEditTwo}
              team={teamTwo}
              type="text"
            />
          ) : (
            <h1 className="hidden"></h1>
          )}
          {/* Edit Score Model */}
          {editScoreOne ? (
            <Modal
              setValue={setTotalScoreTeamOne}
              title={`Update score ${teamOne}`}
              setEdit={setEditScoreOne}
              team={totalScoreTeamOne}
            />
          ) : (
            <h1 className="hidden"></h1>
          )}
          {editScoreTwo ? (
            <Modal
              setValue={setTotalScoreTeamTwo}
              title={`Update score ${teamTwo}`}
              setEdit={setEditScoreTwo}
              team={totalScoreTeamTwo}
            />
          ) : (
            <h1 className="hidden"></h1>
          )}
          <h1
            onClick={handleClickOne}
            className="text-center border-b p-2 text-xl"
          >
            {teamOne}
          </h1>
          <div className=" h-[350px] border text-center  overflow-scroll overflow-x-hidden overflow-y-scroll no-scrollbar text-xl">
            {boardOne.map((item, i) => (
              <div key={i}>
                <p>{`${i}: ${item}`}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="total border-t flex items-center justify-center h-[45px]">
            {/* Edit Score one */}

            <p onClick={handleClickScoreOne} className="text-2xl font-semibold">
              Total: {totalScoreTeamOne}
            </p>
          </div>
        </div>
        <div className="team2 border rounded-t-md w-1/2">
          <h1
            onClick={handleClickTwo}
            className="text-center  border-b p-2 text-xl"
          >
            {teamTwo}
          </h1>
          <div className=" h-[350px] border text-center  overflow-scroll overflow-x-hidden overflow-y-scroll no-scrollbar text-xl">
            {boardTwo.map((item, i) => (
              <div key={i}>
                <p>{`${i}: ${item}`}</p>
                <hr />
              </div>
            ))}
          </div>
          <div className="total border-t flex items-center justify-center h-[45px]">
            <p onClick={handleClickScoreTwo} className="text-2xl font-semibold">
              Total: {totalScoreTeamTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScoreBoard;
