import { useState } from "react";
import gg from "../assets/gg.mp4";

const Celebration = ({ name }) => {
  const [muted, setMuted] = useState(true);
  return (
    <section className="w-96 border-2 rounded-md h-screen flex flex-col justify-evenly">
      <h1 className="font-bold text-xl text-center mt-10">Team {name} Win</h1>
      <video
        className="h-screen"
        onClick={() => {
          setMuted(!muted);
        }}
        src={gg}
        autoPlay={true}
        muted={muted}
        loop
      ></video>
      <button
        onClick={(e) => window.location.reload()}
        className="btn z-10 mb-10 w-full bg-sky-400"
      >
        New Game
      </button>
    </section>
  );
};
export default Celebration;
