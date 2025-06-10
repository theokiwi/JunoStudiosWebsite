import React from "react";
import BlueSquares from "../../../Components/BlueSquares/BlueSquares.jsx";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MediaQuery from "react-responsive";
import "./GameShow.css";
import gameGif from '../../../assets/imgs/Game.gif'

const goDown = () => {
  const nextSection = document.getElementById("DevLog");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn("Elemento com id 'DevLog' não encontrado para rolagem.");
  }
};

export default function GameShow({ id }) {
  return (
    <section id={id} className="flex flex-row">
      <MediaQuery minWidth={1281}>
        <div className="w-1/2 title">
          <h1 className="hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg">
            Expl<span className="hero-color-diff">on't</span>
          </h1>
          <p className="hover:brightness-95 transition-all duration-300">
            You are Froggg. Don’t make Froggg angry. Froggg explode! But
            lollipops make Froggg happy. Jump, hop, and bounce through a
            whimsical world full of silly dangers and surprising delights. This
            platformer doesn’t take itself seriously — and that’s exactly why
            you’ll love it.
          </p>
          <Button
            className="left-6"
            sx={{
              backgroundColor: "var(--lapis-lazuli)",
              "&:hover": { backgroundColor: "var(--coral-pink)" },
              fontFamily: "Baloo",
            }}
            variant="contained">
            ITCH.IO
          </Button>
        </div>
        <div className="game-title w-1/2 flex items-center justify-end">
          <img
            src={gameGif}
            alt="Imagem do jogo Explon't..."
            className="hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg hover:rotate-1  rounded-3xl "
          />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={760} maxWidth={1280}>
        <div className="flex flex-col items-center">
          <div className="w-full max-w text-center justify-center title">
            <h1 className="text-shadow-lg text-4xl">
              Expl<span className="hero-color-diff">on't</span>
            </h1>
            <p className="mt-4 hover:brightness-95 transition-all duration-300 text-lg">
              You are Froggg. Don’t make Froggg angry. Froggg explode! But
            lollipops make Froggg happy. Jump, hop, and bounce through a
            whimsical world full of silly dangers and surprising delights.
            </p>
            <Button
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained">
              ITCH.IO
            </Button>
          </div>

          <div className="game-image w-full flex justify-center">
            <img
              src={gameGif}
              alt="Imagem do jogo Explon't..."
              className="w-3/4 md:w-2/3 text-shadow-lg rounded-3xl"
            />
          </div>

        </div>
      </MediaQuery>

      <MediaQuery minWidth={390} maxWidth={759}>
        <div className="flex flex-col items-center px-4">
          <div className="w-full text-center justify-center title mb-6">
            <h1 className="text-shadow-lg text-4xl">
              Expl<span className="hero-color-diff">on't</span>
            </h1>
            <p className="mt-4 hover:brightness-95 transition-all duration-300 text-lg">
              You are Froggg. Don’t make Froggg angry. Froggg explode! But lollipops make Froggg happy.
            </p>
            <Button
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained">
              ITCH.IO
            </Button>
          </div>

          <div className="game-image w-full flex justify-center">
            <img
              src={gameGif}
              alt="Imagem do jogo Explon't..."
              className="block max-w-full w-3/4 rounded-3xl text-shadow-lg"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            />
          </div>
        </div>
      </MediaQuery>
    </section>
  );
}
