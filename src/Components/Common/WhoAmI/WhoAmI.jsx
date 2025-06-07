import React from "react";
import Asterisk from "../../../Components/BlueAsterisk/BlueAsterisk.jsx";
import Ball from "../../Ball/Ball.jsx";
import "./WhoAmI.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
                src="src/assets/imgs/theo.jpeg"></img>
            </div>
          </div>

          <div className="flexivel w-1/2 flex flex-col justify-center text-right">
            <div className="leading-40 text-[12rem] hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg">
              <h1 className="text-(--melon)">
                Who <br />
                <span className="text-(--indigo-dye)">Am</span> <br />I
              </h1>
            </div>
            <div className="text-[1.2rem] leading-10 hover:brightness-95 transition-all duration-300">
              <p className="text-(--melon)">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                in vero sed earum recusandae magnam fuga, corrupti dolorem
                eligendi repellat velit quis fugit similique aut eaque laborum
                quibusdam iste consectetur. Debitis nemo quidem praesentium
                minus dolorum odio tenetur provident repellendus dolorem
                architecto nisi perferendis, ipsam officia.
              </p>
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
    </>
  );
}
