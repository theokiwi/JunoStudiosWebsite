import React from "react";
import Asterisk from "../../../Components/BlueAsterisk/BlueAsterisk.jsx";
import CenteredAsterisk from "../../../Components/CenteredBlueAsterisk/CenteredBlueAsterisk.jsx";
import Ball from "../../Ball/Ball.jsx";
import "./WhoAmI.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MediaQuery from "react-responsive";
import theoImage from "../../../assets/imgs/theo.jpeg"; 

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

const startAnimation = () => {
  console.log("oi eu funcionei");
  document.querySelectorAll('.animated-balls').forEach(el => {
      el.classList.remove('scale-in-fade');
      void el.offsetWidth;
      el.classList.add('scale-in-fade');
  });

};

export default function WhoAmI({ id }) {
  return (
    <>
      <section id={id}  className="about bg-gray-100 min-h-screen relative">
        <MediaQuery minWidth = {1920}>
        <div onMouseOver = {startAnimation} className="flex flex-row w-full h-full">
          <div className="relative w-1/2">
            <div className="">
                <Asterisk color="var(--lapis-lazuli)" />
            </div>
            <div className="absolute -left-42 scale-[0.8] top-[28%] z-10 hover:brightness-95 transition-all">
                <Ball color="White" size={500} />
            </div>
            <div className>
                <div id = "animated-balls" className="animated-balls absolute left-60 scale-[0.3] top-[26%] z-10 hover:brightness-95 transition-all">
                  <Ball color="White" size={200} />
                </div>
                <div className="animated-balls absolute left-60 scale-[0.3] top-[36%] z-10 hover:brightness-95 transition-all">
                  <Ball color="var(--melon)" size={200} />
                </div>
                <div className="animated-balls absolute left-60 scale-[0.3] top-[46%] z-10 hover:brightness-95 transition-all">
                  <Ball color="var(--indigo-dye)" size={200} />
                </div>
                <div className="animated-balls  absolute left-60 scale-[0.3] top-[56%] z-10 hover:brightness-95 transition-all">
                  <Ball color="var(--marian-blue)" size={200} />
                </div>
            </div>
            <div>
              <img
                className="z-11 hover:brightness-95 transition-all duration-300 -left-60 top-[22%] scale-[0.55] absolute rounded-full"
                src={theoImage}></img>
            </div>
          </div>

          <div className="flexivel w-1/2 flex flex-col justify-center text-right">
            <div className="leading-40 text-[12rem] hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg">
              <h1 className="text-(--melon)">
                Who <br />
                <span className="text-(--indigo-dye)">Am</span> <br />I
              </h1>
            </div>
            <div className="text-[1.2rem] leading-8 hover:brightness-95 transition-all duration-300">
              <p className="text-(--melon)">
                I am an brazillian transgender Game Developer passionate about the blocky and pixel art style.
                I want people to enjoy the exploration of a few different and creative game mechanics while also
                getting knee deep on story rich universes.
              </p>
            </div>
          </div>
        </div>
        </MediaQuery>


        <MediaQuery minWidth = {1280} maxWidth = {1919}>
        <div onMouseOver = {startAnimation} className="flex flex-row w-full h-full">
          <div className="relative w-1/2">
            <div className="scale-105">
                <Asterisk color="var(--lapis-lazuli)" />
            </div>
            <div className="absolute -left-42 scale-[0.8] top-[22%] z-10 hover:brightness-95 transition-all">
                <Ball color="White" size={500} />
            </div>
            <div className>
                <div id = "animated-balls" className="animated-balls absolute left-57 scale-[0.3] top-[24%] z-10 hover:brightness-95 transition-all">
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
                className="z-11 hover:brightness-95 transition-all duration-300 -left-60 top-[14%] scale-[0.55] absolute rounded-full"
                src={theoImage}></img>
            </div>
          </div>

          <div className="flexivel w-1/2 flex flex-col justify-center text-right">
            <div className="leading-40 text-[12rem] hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg">
              <h1 className="text-(--melon)">
                Who <br />
                <span className="text-(--indigo-dye)">Am</span> <br />I
              </h1>
            </div>
            <div className="text-[1.2rem] leading-8 hover:brightness-95 transition-all duration-300">
              <p className="text-(--melon)">
                    I am a Brazilian transgender Game Developer passionate about the blocky and pixel art style.
                    I want people to enjoy the exploration of a few different and creative game mechanics while also
                    getting knee deep in story-rich universes.
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={goDown}
          className="absolute animate-bounce top-[50rem] left-1/2 cursor-pointer hover:scale-105">
          <KeyboardArrowDownIcon
            sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
          />
        </div>
        </MediaQuery>
        
       <MediaQuery minWidth = {760} maxWidth = {1279}>
        <div onMouseOver = {startAnimation} className="flex flex-row w-full h-full">
          <div className="relative w-full">
            <div className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 h-auto">
            <CenteredAsterisk color = "var(--lapis-lazuli)"/>
            <div className="absolute left-1/2 transform -translate-x-1/2 scale-[0.8] top-[20%] z-10">
                <Ball color="White" size={300} />
            </div>
              <div className>
                  <div id = "animated-balls" className="animated-balls absolute left-75 scale-[0.3] top-[12%] z-10 hover:brightness-95 transition-all">
                    <Ball color="White" size={200} />
                  </div>
                  <div className="animated-balls absolute left-75 scale-[0.3] top-[27%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--melon)" size={200} />
                  </div>
                  <div className="animated-balls absolute left-75 scale-[0.3] top-[42%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--indigo-dye)" size={200} />
                  </div>
                  <div className="animated-balls  absolute left-75 scale-[0.3] top-[57%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--marian-blue)" size={200} />
                </div>
            </div>
            <div>
              <img
                className="z-11 hover:brightness-95 transition-all duration-300 left-1/2 transform -translate-x-1/2 top-0 scale-[0.4] absolute rounded-full"
                src={theoImage}></img>
            </div>
          </div>
          </div>

          <div className="absolute top-[38rem] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <div className="leading-[6rem] text-[6rem] text-shadow-lg">
            <h1 className="text-[var(--melon)]">
              Who <span className="text-[var(--indigo-dye)]">Am</span> I
            </h1>
          </div>
          <div className="text-[1.6rem] leading-10 absolute left-1/2 -translate-x-1/2 top-30 max-w-[60rem]">
            <p className="text-[var(--melon)]">
                  I am a Brazilian transgender Game Developer passionate about the blocky and pixel art style.
            </p>
          </div>
        </div>
        </div>
        <div
          onClick={goDown}
          className="absolute animate-bounce top-[60rem] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-105">
          <KeyboardArrowDownIcon
            sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
          />
        </div>
        </MediaQuery>

        <MediaQuery minWidth = {390} maxWidth = {759}>
        <div onMouseOver = {startAnimation} className="flex flex-row w-full h-full">
          <div className="relative w-full">
            <div className="absolute scale-80 top-[0rem] left-1/2 transform -translate-x-1/2 h-auto">
            <CenteredAsterisk color = "var(--lapis-lazuli)"/>
            <div className="absolute left-1/2 transform -translate-x-1/2 scale-[0.8] top-[20%] z-10">
                <Ball color="White" size={300} />
            </div>
              <div className>
                  <div id = "animated-balls" className="animated-balls absolute left-75 scale-[0.3] top-[12%] z-10 hover:brightness-95 transition-all">
                    <Ball color="White" size={200} />
                  </div>
                  <div className="animated-balls absolute left-75 scale-[0.3] top-[27%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--melon)" size={200} />
                  </div>
                  <div className="animated-balls absolute left-75 scale-[0.3] top-[42%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--indigo-dye)" size={200} />
                  </div>
                  <div className="animated-balls  absolute left-75 scale-[0.3] top-[57%] z-10 hover:brightness-95 transition-all">
                    <Ball color="var(--marian-blue)" size={200} />
                </div>
            </div>
            <div>
              <img
                className="z-11 hover:brightness-95 transition-all duration-300 left-1/2 transform -translate-x-1/2 top-0 scale-[0.4] absolute rounded-full"
                src={theoImage}></img>
            </div>
            </div>
          </div>

          <div className="absolute top-[30rem] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <div className="leading-[5rem] text-[4.8rem] text-shadow-lg">
            <h1 className="text-[var(--melon)]">
              Who <span className="text-[var(--indigo-dye)]">Am</span> I
            </h1>
          </div>
          <div className="text-[1.2rem] leading-8 absolute top-30 max-w-[30rem] mx-auto">
            <p className="text-[var(--melon)]">
              I am a Brazilian transgender Game Developer passionate about the blocky and pixel art style.
            </p>
          </div>
        </div>
        </div>
        </MediaQuery>

      </section>
    </>
  );
}
