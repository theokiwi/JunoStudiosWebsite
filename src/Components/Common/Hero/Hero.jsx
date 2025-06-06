import React from "react";
import BlueSquares from "../../../Components/BlueSquares/BlueSquares.jsx";
import JunoWalking from "../../../Components/JunoWalking/JunoWalking.jsx";
import Button from "@mui/material/Button";
import "./Hero.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const goDown = () => {
  const nextSection = document.getElementById("WhoAmI");

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn("Elemento com id 'WhoAmI' não encontrado para rolagem.");
  }
};

export default function Hero() {
  return (
    <>
      <section className="hero flex min-h-screen">
        <div className="hero-titles">
          <h1 className="hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg">
            Heartfelt <br />
            <span className="hero-color-diff">Indie</span> <br />
            Games
          </h1>
          <p className="hover:scale-105 hover:brightness-95 transition-all duration-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            numquam dolore laudantium, odio libero nulla laboriosam architecto
            ut quidem quia alias. Hic consectetur voluptatibus vero nostrum
            doloribus eos pariatur magni.
          </p>
            <Button className="absolute left-6 hover:scale-105"
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained">
              BUY
            </Button>
        </div>
        <div className="absolute top-0 -z-20 w-screen bluesquares-div">
          <BlueSquares color="var(--lapis-lazuli)" />
        </div>
        <div className="hover:brightness-95 juno-walking">
          <JunoWalking />
        </div>
        <div
          onClick={goDown}
          className="absolute animate-bounce bottom-[2rem] left-1/2 cursor-pointer hover:scale-105">
          <KeyboardArrowDownIcon
            sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
          />
        </div>
      </section>
    </>
  );
}
