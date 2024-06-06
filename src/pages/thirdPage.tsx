import { useEffect, useState } from "react";
import "../styles/scoreboard.css";

//images
import TitleImg from "../assets/Images/scoreboard-title.png";
import bgImg from "../assets/Images/scoreboard-background.png";

import sampleLogo1 from "../assets/Images/sample-team-logo-1.png";
import sampleLogo2 from "../assets/Images/sample-team-logo-2.png";

function thirdPage() {
  // const [gameNo, setGameNo] = useState();

  const [mainTime, setMainTime] = useState();
  const [pitTime, setPitTime] = useState();

  // const [team1name, setTeam1Name] = useState();
  // const [team2name, setTeam2Name] = useState();

  // const [team1Leader, setTeam1Leader] = useState();
  // const [team2Leader, setTeam2Leader] = useState();

  // const [team1Logo, setTeam1Logo] = useState();
  // const [team2Logo, setTeam2Logo] = useState();

  return (
    <div
      className=" overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="text-2xl  mx-auto    w-full">
        <img
          className="text-black  lg:px-8 h-13 pt-3"
          src={TitleImg}
          alt="uok robot battles scoreboard"
          style={{ maxWidth: "80%", margin: "0 auto" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-12 pt-5 mx-8  ">
        <div className="md:col-span-3 lg:col-span-3  ">
          <img
            src={sampleLogo1}
            className="w-4/5 mx-auto"
            style={{ paddingRight: "10px", backgroundColor: "#0DECC4" }}
          />
          <div className="text-center text-white text-xl">TEAM 1</div>
          <div className="text-center text-yellow-300 text-2xl">ROBOTS</div>
        </div>
        <div className="md:col-span-3 lg:col-span-6 ">
          <div className="text-3xl text-center text-white">TIME REMAINING</div>
          <div className="text-8xl text-center text-white">
            {mainTime ? Math.floor(mainTime / 60) : mainTime || "00"}
            {mainTime ? mainTime % 60 : mainTime || "00"}
          </div>
          <hr className="border-2 border-white my-5" />
          <div className="text-2xl text-center text-white">ADDITIONAL TIME</div>
          <div className="text-6xl text-center text-green-400">
            {pitTime || "0"}
          </div>
          <div className="text-xl text-center text-white">SECONDS</div>
        </div>

        <div className="md:col-span-3 lg:col-span-3  ">
          <img
            src={sampleLogo2}
            className="w-4/5 mx-auto"
            style={{ paddingLeft: "10px", backgroundColor: "#001AFF" }}
          />
          <div className="text-center text-white text-xl">TEAM 1</div>
          <div className="text-center text-yellow-300 text-2xl">MACHINE</div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1   md:grid-cols-3  gap-6  text-center text-white mt-6">
          <div className="col-span-1 flex flex-col gap-2 mx-5">
            <button className="bg-gray-300  hover:bg-gray-500  text-black font-bold py-2 px-4 rounded">
              start/stop
            </button>
            <button className="bg-gray-300  hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
              pause
            </button>
          </div>
          <div className="col-span-1">
            <button className="bg-yellow-300  hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
              ADD POINTS
            </button>
          </div>
          <div className="col-span-1 flex flex-col gap-2 mx-5">
            <button className="bg-gray-300  hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
              PITCH OPEN
            </button>
            <button className="bg-gray-300  hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
              20 COUNTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default thirdPage;
