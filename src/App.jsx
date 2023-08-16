import { useState } from "react";
import Submit from "./components/Submit";
import ScoreBoard from "./components/ScoreBoard";
import ScoreInput from "./components/ScoreInput";
import Modal from "./components/Modal";

const App = () => {
  // Final Result State
  const [totalScoreTeamOne, setTotalScoreTeamOne] = useState(0);
  const [totalScoreTeamTwo, setTotalScoreTeamTwo] = useState(0);
  // Bid State
  const [oneValue, setOneValue] = useState(5);
  const [twoValue, setTwoValue] = useState(5);
  // Score Board State
  const [boardOne, setBoardOne] = useState([]);
  const [boardTwo, setBoardTwo] = useState([]);
  // Arithmetic state
  const [oneArith, setOneArith] = useState("");
  const [twoArith, setTwoArith] = useState("");
  const [teamOne, setTeamOne] = useState(false);
  const [teamTwo, setTeamTwo] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [win, setWin] = useState(false);

  function winChecker(team1, team2) {
    if (team1 >= 50) {
      setWin(true);
      console.log("team1 wind");
    }
    if (team2 >= 50) {
      setWin(true);
      console.log("team2 win");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setOneValue(0);
    setTwoValue(0);
    setOneArith("");
    setTwoArith("");

    if (oneArith === "+") {
      setTotalScoreTeamOne(totalScoreTeamOne + oneValue);
      const str = oneValue.toString();
      setBoardOne([...boardOne, `+${str}`]);
    } else {
      setTotalScoreTeamOne(totalScoreTeamOne - oneValue);

      const str = oneValue.toString();
      setBoardOne([...boardOne, `-${str}`]);
    }
    if (twoArith === "+") {
      setTotalScoreTeamTwo(totalScoreTeamTwo + twoValue);
      const strTwo = twoValue.toString();
      setBoardTwo([...boardTwo, `+${strTwo}`]);
    } else {
      setTotalScoreTeamTwo(totalScoreTeamTwo - twoValue);
      const strTwo = twoValue.toString();
      setBoardTwo([...boardTwo, `-${strTwo}`]);
    }
    setDisabled(true);
    setTeamOne(false);
    setTeamTwo(false);
    winChecker(totalScoreTeamOne, totalScoreTeamTwo);
  };
  const handleTeamOneClickSub = (e) => {
    e.preventDefault();
    setOneArith("-");
    setTeamOne(true);
    if (oneArith && twoArith) {
      setDisabled(false);
    }
  };
  const handleTeamOneClickAdd = (e) => {
    e.preventDefault();
    setOneArith("+");
    setTeamOne(true);
    if (oneArith && twoArith) {
      setDisabled(false);
    }
  };
  // Team 02 Function
  const handleTeamTwoClickAdd = (e) => {
    e.preventDefault();
    setTwoArith("+");
    setTeamTwo(true);
    if (oneArith && twoArith) {
      setDisabled(false);
    }
  };
  const handleTeamTwoClickSub = (e) => {
    e.preventDefault();
    setTwoArith("-");
    setTeamTwo(true);
    if (oneArith && twoArith) {
      setDisabled(false);
    }
  };
  return (
    <div className="flex justify-center ">
      <section className="w-96 h-screen rounded">
        <h1 className="font-semibold text-[43px] mt-3 text-center">
          Card Master
        </h1>
        <div className="flex flex-col items-center justify-center mt-3 rounded">
          <ScoreBoard
            boardOne={boardOne}
            boardTwo={boardTwo}
            totalScoreTeamOne={totalScoreTeamOne}
            totalScoreTeamTwo={totalScoreTeamTwo}
            setTotalScoreTeamOne={setTotalScoreTeamOne}
            setTotalScoreTeamTwo={setTotalScoreTeamTwo}
          />

          <div className="add  w-[340px]   flex items-center justify-between">
            <div className="team1 w-1/2 text-center ">
              <p className="font-bold">
                {oneValue}
                {oneArith}
              </p>
              <ScoreInput
                oneValue={oneValue}
                twoValue={twoValue}
                setOneValue={setOneValue}
                setTwoValue={setTwoValue}
                handleTeamOneClickAdd={handleTeamOneClickAdd}
                handleTeamOneClickSub={handleTeamOneClickSub}
              />
            </div>
            <div className="team2 w-1/2 text-center">
              <p className="font-bold">
                {twoValue}
                {twoArith}
              </p>
              <form className="" action="">
                <input
                  className="appearance-none  h-4  rounded-lg outline-none "
                  type="range"
                  min="5"
                  max="13"
                  step="1"
                  value={twoValue}
                  onChange={(e) => {
                    setTwoValue(Math.floor(e.target.value));
                    if (twoValue !== 5) {
                      setOneValue(5);
                    }
                  }}
                />
                <div className="flex mt-2 justify-center gap-3">
                  <button
                    type="submit"
                    className="btn cursor-pointer bg-red-500 font-bold text-2xl"
                    onClick={handleTeamTwoClickSub}
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    className="btn cursor-pointer bg-green-500 font-bold text-2xl"
                    value="+"
                    onClick={handleTeamTwoClickAdd}
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <button
              disabled={disabled}
              onClick={handleSubmit}
              className={`mt-2 px-8 py-3 rounded font-bold ${
                disabled ? "bg-red-400" : "bg-green-500"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default App;
