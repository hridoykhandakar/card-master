import { useState } from "react";

const App = () => {
  const [totalScoreTeamOne, setTotalScoreTeamOne] = useState(0);
  const [totalScoreTeamTwo, setTotalScoreTeamTwo] = useState(0);
  // const [teamOneBid, setTeamOneBid] = useState(5);
  // const [teamTwoBid, setTeamTwoBid] = useState(5);
  const [boardOne, setBoardOne] = useState([]);
  const [boardTwo, setBoardTwo] = useState([]);
  // const [arithmetic, setArithmetic] = useState("");
  // const [inputState, setInputState] = useState({ ...initialInputState });
  // NEW STATE

  const [twoArith, setTwoArith] = useState("");
  const [twoValue, setTwoValue] = useState(5);
  const [oneArith, setOneArith] = useState("");
  const [oneValue, setOneValue] = useState(5);

  const [teamOne, setTeamOne] = useState(false);
  const [teamTwo, setTeamTwo] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (oneArith === "add") {
      setTotalScoreTeamOne(totalScoreTeamOne + oneValue);
      const listOne = boardOne;
      const str = oneValue.toString();
      setBoardOne([...listOne, `+${str}`]);
    } else {
      setTotalScoreTeamOne(totalScoreTeamOne - oneValue);
      const listOne = boardOne;
      const str = oneValue.toString();
      setBoardOne([...listOne, `-${str}`]);
    }
    if (twoArith === "add") {
      setTotalScoreTeamTwo(totalScoreTeamTwo + twoValue);
      const listTwo = boardTwo;
      const strTwo = twoValue.toString();
      setBoardTwo([...listTwo, `+${strTwo}`]);
    } else {
      setTotalScoreTeamTwo(totalScoreTeamTwo - twoValue);
      const listTwo = boardTwo;
      const strTwo = twoValue.toString();
      setBoardTwo([...listTwo, `-${strTwo}`]);
    }
    setDisabled(true);
    setTeamOne(false);
    setTeamTwo(false);
  };
  const handleTeamOneClickSub = (e) => {
    e.preventDefault();
    setOneArith("sub");
    setTeamOne(true);
    if (teamOne === teamTwo) {
      setDisabled(false);
    }

    // setArithmetic("sub");
    // setInputState({
    //   arithmetic: "sub",
    // });
  };
  const handleTeamOneClickAdd = (e) => {
    e.preventDefault();
    setOneArith("add");
    setTeamOne(true);
    if (teamOne === teamTwo) {
      setDisabled(false);
    }

    // setTotalScoreTeamOne(totalScoreTeamOne + teamOneBid);
    // const list = boardOne;
    // const str = teamOneBid.toString();
    // setBoardOne([...list, `+${str}`]);
    // setArithmetic("add");
  };
  // Team 02 Function
  const handleTeamTwoClickAdd = (e) => {
    e.preventDefault();
    // setTotalScoreTeamTwo(totalScoreTeamTwo + teamTwoBid);
    setTwoArith("add");
    setTeamTwo(true);
    if (teamOne === teamTwo) {
      setDisabled(false);
    }
    // const list = boardTwo;
    // const str = teamTwoBid.toString();
    // setBoardTwo([...list, `+${str}`]);
  };
  const handleTeamTwoClickSub = (e) => {
    e.preventDefault();
    setTwoArith("sub");
    setTeamTwo(true);
    if (teamOne === teamTwo) {
      setDisabled(false);
    }
    // setTotalScoreTeamTwo(totalScoreTeamTwo - teamTwoBid);
    // const list = boardTwo;
    // const str = teamTwoBid.toString();
    // setBoardTwo([...list, `-${str}`]);
  };
  return (
    <div className="flex justify-center ">
      <section className="w-96 h-screen  rounded">
        <h1 className="font-semibold text-[43px] mt-3 text-center">
          Card Master
        </h1>
        <div className="flex flex-col items-center justify-center mt-3 rounded">
          <div className="score-board h-[450px] w-[340px] bg-gray-900  flex justify-between">
            <div className="team1 border rounded-t-md w-1/2">
              <h1
                contentEditable="true"
                className="text-center border-b p-2 text-2xl"
              >
                Team1
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
                <p className="text-2xl font-semibold">
                  Total: {totalScoreTeamOne}
                </p>
              </div>
            </div>
            <div className="team2 border rounded-t-md w-1/2">
              <h1
                contentEditable="true"
                className="text-center  border-b p-2 text-2xl"
              >
                Team2
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
                <p className="text-2xl font-semibold">
                  Total: {totalScoreTeamTwo}
                </p>
              </div>
            </div>
          </div>
          <div className="add  w-[340px] mt-2   flex items-center justify-between">
            <div className="team1 w-1/2 text-center ">
              <form className=" team-1 ">
                <select
                  className="py-2 px-11  bg-gray-50 border border-gray-300 text-gray-900 font-bold rounded focus:ring-blue-500 focus:border-blue-500 "
                  name="bid"
                  onChange={(e) => {
                    setOneValue(Math.floor(e.target.value));
                  }}
                >
                  <option value="5">5</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="13">13</option>
                </select>
                <div className="flex mt-2 justify-center gap-3">
                  <button
                    type="submit"
                    className="btn bg-red-500 font-bold text-2xl"
                    value="-"
                    onClick={handleTeamOneClickSub}
                  >
                    -
                  </button>
                  <button
                    type="submit"
                    className="btn bg-green-500 font-bold text-2xl"
                    value="+"
                    onClick={handleTeamOneClickAdd}
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
            <div className="team2 w-1/2 text-center">
              <form className="" action="">
                <select
                  className="py-2 px-11  bg-gray-50 border border-gray-300 text-gray-900 font-bold rounded focus:ring-blue-500 focus:border-blue-500 "
                  name="bid"
                  id=""
                  onChange={(e) => setTwoValue(Math.floor(e.target.value))}
                >
                  <option value="5">5</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                  <option value="13">13</option>
                </select>
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
              className="px-8 py-3 rounded font-bold text-lg bg-green-700 mt-4"
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
