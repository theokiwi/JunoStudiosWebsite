import React from "react";
import Asterisk from "../../../Components/BlueAsterisk/BlueAsterisk.jsx";
import CenteredAsterisk from "../../../Components/CenteredBlueAsterisk/CenteredBlueAsterisk.jsx";
import Ball from "../../Ball/Ball.jsx";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MediaQuery from "react-responsive";
import gameImage from '../../../assets/imgs/game2.png';
import "./DevLog.css";

const goDown = () => {
  const nextSection = document.getElementById("GoToItchIo");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn("Elemento com id 'GoToItchIo' não encontrado para rolagem.");
  }
};

const startAnimation = () => {
  console.log("oi eu funcionei");
  document.querySelectorAll(".animated-balls").forEach((el) => {
    el.classList.remove("scale-in-fade");
    void el.offsetWidth;
    el.classList.add("scale-in-fade");
  });
};

export default function DevLog({ id }) {
  return (
    <section id={id} className="bg-gray-100 w-full relative">
      <MediaQuery minWidth={1280} maxWidth={1919}>
        <div
          onMouseOver={startAnimation}
          className="min-h-screen flex flex-row w-full h-full">
          <div className="relative w-1/2">
            <div className="scale-105">
              <Asterisk color="var(--lapis-lazuli)" />
            </div>
            <div className="absolute -left-42 scale-[0.8] top-[22%] z-10 hover:brightness-95 transition-all">
              <Ball color="White" size={500} />
            </div>
            <div className>
              <div
                id="animated-balls"
                className="animated-balls absolute left-57 scale-[0.3] top-[24%] z-10 hover:brightness-95 transition-all">
                <Ball color="White" size={200} />
              </div>
              <div className="animated-balls absolute left-57 scale-[0.3] top-[34%] z-10 hover:brightness-95 transition-all">
                <Ball color="var(--melon)" size={200} />
              </div>
              <div className="animated-balls absolute left-57 scale-[0.3] top-[44%] z-10 hover:brightness-95 transition-all">
                <Ball color="var(--indigo-dye)" size={200} />
              </div>
              <div className="animated-balls  absolute left-57 scale-[0.3] top-[53%] z-10 hover:brightness-95 transition-all">
                <Ball color="var(--marian-blue)" size={200} />
              </div>
            </div>
            <div>
              <img
                className="z-11 w-48 h-48 hover:brightness-95 transition-all -left-3 duration-300 top-[39%] scale-[1.8] absolute rounded-full"
                src={gameImage}></img>
            </div>
          </div>

          <div className="flexivel w-1/2 flex flex-col justify-center">
            <div className="leading-40 text-[12rem] hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg text-right">
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
                  className="w-full max-w-lg aspect-video object-cover rounded-4xl shadow-lg 
                 transition-transform duration-300 hover:scale-105 hover:brightness-110 
                 hover:rotate-[1deg] cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth={760} maxWidth={1279}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-shadow-lg text-center leading-none text-[6rem]">
            <h1 className="text-[6rem] title text-[var(--melon)]">
              Dev<span className="text-[var(--indigo-dye)]">Log</span>
            </h1>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=-Bs6EO_Co7Q"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/-Bs6EO_Co7Q/hqdefault.jpg"
                alt="Clique para assistir ao vídeo no YouTube"
                className="w-[40rem] sm:w-[40rem] md:w-[45rem] h-96 object-cover video rounded-4xl shadow-lg"
              />
            </a>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery minWidth = {390} maxWidth = {759}>
        <div className="flex flex-col items-center justify-center">
          <div className="text-shadow-lg text-center leading-none text-[6rem]">
            <h1 className="title text-[4.8rem] text-[var(--melon)]">
              Dev<span className="text-[var(--indigo-dye)]">Log</span>
            </h1>
          </div>
          <div>
            <a
              href="https://www.youtube.com/watch?v=-Bs6EO_Co7Q"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src="https://img.youtube.com/vi/-Bs6EO_Co7Q/hqdefault.jpg"
                alt="Clique para assistir ao vídeo no YouTube"
                className="w-auto h-auto object-cover video rounded-4xl shadow-lg"
              />
            </a>
          </div>
        </div>
      </MediaQuery>


    </section>
  );
}
