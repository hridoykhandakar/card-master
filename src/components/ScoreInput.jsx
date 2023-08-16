import { useState } from "react";

const ScoreInput = ({
  setOneValue,
  oneValue,
  twoValue,
  setTwoValue,
  handleTeamOneClickSub,
  handleTeamOneClickAdd,
}) => {
  return (
    <section>
      <form className=" team-1 ">
        {/* <select
          className="py-2 px-11  bg-gray-50 border border-gray-300 text-gray-900 font-bold rounded focus:ring-blue-500 focus:border-blue-500 "
          name="bid"
          onChange={(e) => {
            setOneValue(Math.floor(e.target.value));
            if (oneValue !== 5) {
              setTwoValue(5);
            }
          }}
        >
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="13">13</option>
        </select> */}
        <input
          type="range"
          min="5"
          max="13"
          value={oneValue}
          onChange={(e) => {
            setOneValue(Math.floor(e.target.value));
            if (oneValue !== 5) {
              setTwoValue(5);
            }
          }}
        />
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
    </section>
  );
};
export default ScoreInput;
