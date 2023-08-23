import { useState, createContext } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
  const [disable, setDisable] = useState(true);
  // TEAM ONE STATE
  const [nameOne, setNameOne] = useState("Team 01");
  const [idOne, setIdOne] = useState(1);
  const [bidHistoryOne, setBidHistoryOne] = useState([]);
  const [totalScoreOne, setTotalScoreOne] = useState(0);
  const [htOne, setHtOne] = useState(0);
  const [valueOne, setValueOne] = useState(0);
  const [bidOne, setBidOne] = useState(5);
  const [operationOne, setOperationOne] = useState("");
  const [redOne, setRedOne] = useState(false);
  // TEAM ONE FUNCTION
  function handleInputOne(operation, value) {
    setIdOne(id + 1);
    setBidHistoryOne([
      ...bidHistoryOne,
      {
        id,
        operation,
        value,
        totalScoreOne,
      },
    ]);
  }

  function scoreOne(operator, value) {
    setTotalScoreOne(eval(`${totalScoreOne}  ${operator} ${value}`));
  }
  // TEAM TWO STATE
  const [nameTwo, setNameTwo] = useState("Team 01");
  const [idTwo, setIdTwo] = useState(1);
  const [bidHistoryTwo, setBidHistoryTwo] = useState([]);
  const [totalScoreTwo, setTotalScoreTwo] = useState(0);
  const [htTwo, setHtTwo] = useState(0);
  const [bidTwo, setBidTwo] = useState(7);
  const [operationTwo, setOperationTwo] = useState("");
  const [valueTwo, setValueTwo] = useState(0);
  const [redTwo, setRedTwo] = useState(false);

  // TEAM TOW FUNCTION

  function handleInputTwo(operation, value) {
    setIdTwo(id + 1);
    setBidHistoryTwo([
      ...bidHistoryOne,
      {
        id,
        operation,
        value,
        totalScoreOne,
      },
    ]);
  }
  function scoreTwo(operator, value) {
    setTotalScoreTwo(eval(`${totalScoreTwo}  ${operator} ${value}`));
  }

  return (
    <ScoreContext.Provider
      value={{
        bidOne,
        setBidOne,
        operationOne,
        setOperationOne,
        bidHistoryOne,
        setBidHistoryOne,
        idOne,
        setIdOne,
        scoreOne,
        totalScoreOne,
        htOne,
        setHtOne,
        nameOne,
        setNameOne,
        valueOne,
        setValueOne,
        redOne,
        setRedOne,
        // hh
        bidTwo,
        setBidTwo,
        operationTwo,
        setOperationTwo,
        bidHistoryTwo,
        setBidHistoryTwo,
        idTwo,
        setIdTwo,
        scoreTwo,
        totalScoreTwo,
        htTwo,
        setHtTwo,
        nameTwo,
        setNameTwo,
        valueTwo,
        setValueTwo,
        redTwo,
        setRedTwo,
        // Global
        disable,
        setDisable,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;
