import { useContext, useEffect, useState } from "react";
import ScoreContext from "./ScoreContext";
import BoardOne from "./components/team1/BoardOne";
import BoardTwo from "./components/team2/BoardTwo";
import InputOne from "./components/team1/InputOne";
import InputTwo from "./components/team2/InputTwo";
import Celebration from "./components/Celebration";

const App = () => {
  const {
    bidHistoryOne,
    setBidHistoryOne,
    bidOne,
    setBidOne,
    operationOne,
    setOperationOne,
    idOne,
    setIdOne,
    scoreOne,
    htOne,
    valueOne,
    setValueOne,
    totalScoreOne,
    setRedOne,
    nameOne,

    // two
    bidHistoryTwo,
    setBidHistoryTwo,
    bidTwo,
    setBidTwo,
    operationTwo,
    setOperationTwo,
    idTwo,
    setIdTwo,
    scoreTwo,
    htTwo,
    valueTwo,
    setValueTwo,
    totalScoreTwo,
    setRedTwo,
    nameTwo,
    // global
    disable,
    setDisable,
  } = useContext(ScoreContext);

  const [win, setWin] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    if (totalScoreOne >= 50 || totalScoreTwo >= 50) {
      setWin(true);
      if (totalScoreOne >= 50) {
        setName(nameOne);
      } else {
        setName(nameTwo);
      }
    }
    if (totalScoreOne < 0) {
      setRedOne(true);
    } else {
      setRedOne(false);
    }
    if (totalScoreTwo < 0) {
      setRedTwo(true);
    } else {
      setRedTwo(false);
    }
  }, [totalScoreOne, setBidHistoryTwo]);
  // Main Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setBidHistoryOne([
      ...bidHistoryOne,
      {
        id: idOne,
        value: bidOne,
        operation: operationOne,
        hTotal: htOne,
        valueOne,
      },
    ]);
    setIdOne(idOne + 1);

    scoreOne(operationOne, bidOne);
    setOperationOne("");
    setBidOne(5);
    setValueOne(htOne);
    // Team 2
    setBidHistoryTwo([
      ...bidHistoryTwo,
      {
        id: idTwo,
        value: bidTwo,
        operation: operationTwo,
        hTotal: htTwo,
        valueTwo,
      },
    ]);
    setIdTwo(idTwo + 1);
    scoreTwo(operationTwo, bidTwo);
    setOperationTwo("");
    setBidTwo(7);
    setDisable(true);
    setValueTwo(htTwo);
  };
  return (
    <main className="bg-gray-900 flex justify-center">
      {win ? (
        <>
          <Celebration name={name} />
        </>
      ) : (
        <section className="w-96 relative bg-gray-800 h-screen flex flex-col items-center  border-2 rounded-md">
          <div className="title">
            <h1 className="text-3xl font-semibold text-center mt-5 underline underline-offset-4 decoration-sky-500 uppercase ">
              Card Master
            </h1>
          </div>
          <div className="box relative w-80 h-[450px] border rounded-md bg-gray-900 bg-opacity-50 backdrop-blur-lg mt-8 flex justify-center">
            <BoardOne />
            <BoardTwo />
          </div>
          <section className="scoreInput w-80 mt-2  flex text-center ">
            <div className="one w-1/2">
              <InputOne />
            </div>
            <div className="two w-1/2">
              <InputTwo />
            </div>
          </section>
          <div className="submit mt-1">
            <button
              disabled={disable}
              onClick={handleSubmit}
              className={`${
                disable ? "bg-gray-400" : ""
              } mt-2 px-8 py-3 rounded font-bold  bg-green-500`}
            >
              Submit
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
