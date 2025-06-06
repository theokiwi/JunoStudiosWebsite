import React from "react";
import Asterisk from "../../../Components/BlueAsterisk/BlueAsterisk.jsx";
import Ball from "../../Ball/Ball.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./DevLog.css";

const goDown = () => {
  const nextSection = document.getElementById("GameShow");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn("Elemento com id 'GameShow' não encontrado para rolagem.");
  }
};

export default function DevLog({ id }) {
  return (
    <section id={id} className="bg-gray-100 min-h-screen relative">
      <div className="flex flex-row w-full h-full">
        <div className="relative w-1/2">
          <div className="">
            <Asterisk color="var(--lapis-lazuli)" />
          </div>
          <div className="absolute -left-42 scale-[0.8] top-[28%] z-10 hover:brightness-95 transition-all">
            <Ball color="White" size={500} />
          </div>
          <div className>
            <div className="animated-balls absolute left-60 scale-[0.4] top-[26%] z-10 hover:brightness-95 transition-all hover:scale-55">
              <Ball color="White" size={200} />
            </div>
            <div className="animated-balls absolute left-60 scale-[0.4] top-[36%] z-10 hover:brightness-95 transition-all hover:scale-55">
              <Ball color="var(--melon)" size={200} />
            </div>
            <div className="animated-balls absolute left-60 scale-[0.4] top-[46%] z-10 hover:brightness-95 transition-all hover:scale-55">
              <Ball color="var(--indigo-dye)" size={200} />
            </div>
            <div className="animated-balls  absolute left-60 scale-[0.4] top-[56%] z-10 hover:brightness-95 transition-all hover:scale-55">
              <Ball color="var(--marian-blue)" size={200} />
            </div>
          </div>
          <div>
            <img
              className="z-11 w-48 h-48 hover:brightness-95 transition-all -left-3 duration-300 top-[41%] scale-[1.8] hover:scale-[2.1] absolute rounded-full"
              src="src/assets/imgs/game2.png"></img>
          </div>
        </div>

        <div className="flexivel w-1/2 flex flex-col justify-center">
          <div className="leading-40 text-[12rem] hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg text-right">
            <h1 className="text-[var(--melon)]">
              Dev<span className="text-[var(--indigo-dye)]">Log</span> <br />
            </h1>
          </div>
          <div className="flex video justify-center">
            <a
              href="https://www.youtube.com/watch?v=-Bs6EO_Co7Q"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/-Bs6EO_Co7Q/hqdefault.jpg"
                alt="Clique para assistir ao vídeo no YouTube"
                className="w-[45rem] hover:rotate-1 h-96 object-cover rounded-4xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        onClick={goDown}
        className="absolute animate-bounce top-[62rem] left-1/2 cursor-pointer hover:scale-105">
        <KeyboardArrowDownIcon
          sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
        />
      </div>
    </section>
  );
}
