const ScoreBoard = ({
  boardOne,
  boardTwo,
  totalScoreTeamOne,
  totalScoreTeamTwo,
}) => {
  return (
    <section>
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
            <p className="text-2xl font-semibold">Total: {totalScoreTeamOne}</p>
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
            <p className="text-2xl font-semibold">Total: {totalScoreTeamTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ScoreBoard;
