import React from "react";
import BlueSquares from "../../../Components/BlueSquares/BlueSquares.jsx";
import JunoWalking from "../../../Components/JunoWalking/JunoWalking.jsx";
import Button from "@mui/material/Button";
import "./Hero.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MediaQuery from "react-responsive";

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
      <section className="hero flex min-h-screen relative">
        <div className="hero-titles">

          {/* =================== DESKTOP =================== */}
          <MediaQuery minWidth={1440}>
            <h1 className="hover:scale-101 hover:brightness-95 transition-all duration-300 text-shadow-lg">
              Heartfelt <br />
              <span className="hero-color-diff">Indie</span> <br />
              Games
            </h1>
            <p className="hover:brightness-95 transition-all duration-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              numquam dolore laudantium, odio libero nulla laboriosam architecto
              ut quidem quia alias. Hic consectetur voluptatibus vero nostrum
              doloribus eos pariatur magni.
            </p>
            <Button
              className="absolute left-6 hover:scale-105"
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained"
            >
              BUY
            </Button>
          </MediaQuery>

          {/* =================== TABLET =================== */}
          <MediaQuery minWidth={760} maxWidth={1280}>
            <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-shadow-lg text-center">
              Heartfelt <br />
              <span className="hero-color-diff">Indie</span> <br />
              Games
            </h1>
            <p className="absolute top-145 left-1/2 transform -translate-x-1/2 text-center max-w-[90%]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              numquam dolore laudantium odio libero nulla laboriosam architecto
              ut quidem quia alias. numquam dolore laudantium odio libero nulla laboriosam architecto
              ut quidem quia alias. 
            </p>
            <Button
              className="left-1/2 transform absolute top-110 -translate-x-1/2 hover:scale-105"
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained"
            >
              BUY
            </Button>
          </MediaQuery>

          {/* =================== MOBILE =================== */}
          <MediaQuery minWidth={320} maxWidth={759}>
            <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-shadow-lg text-center">
              Heartfelt <br />
              <span className="hero-color-diff">Indie</span> <br />
              Games
            </h1>
            <p
              className="absolute left-1/2 transform -translate-x-1/2 text-center max-w-[90%]"
              style={{ top: "clamp(30rem, 18vh, 14rem)" }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              numquam dolore laudantium odio libero.
            </p>
            <Button
              className="absolute left-1/2 top-100 transform -translate-x-1/2 hover:scale-105"
              sx={{
                backgroundColor: "var(--lapis-lazuli)",
                "&:hover": { backgroundColor: "var(--coral-pink)" },
                fontFamily: "Baloo",
              }}
              variant="contained"
            >
              BUY
            </Button>
          </MediaQuery>
        </div>

        {/* =================== BACKGROUND ELEMENTS =================== */}
        <MediaQuery minWidth={1440}>
          <div className="absolute top-0 -z-20 w-screen bluesquares-div">
            <BlueSquares color="var(--lapis-lazuli)" />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={760} maxWidth={1280}>
          <div className="absolute -z-20 w-full max-w-[560px] left-1/2 transform -translate-x-1/2 top-70 bluesquares-div">
            <BlueSquares viewBox="560 -250 1920 2000" color="var(--lapis-lazuli)" />
          </div>
        </MediaQuery>

        <MediaQuery maxWidth={759}>
          <div className="absolute -z-20 w-full max-w-[460px] left-1/2 transform -translate-x-1/2 top-55 bluesquares-div">
            <BlueSquares viewBox="560 -250 1920 2000" color="var(--lapis-lazuli)" />
          </div>
        </MediaQuery>

        {/* =================== JUNO WALKING =================== */}
        <MediaQuery minWidth={1440}>
          <div className="absolute left-1/2 top-25 hover:brightness-95 juno-walking">
            <JunoWalking />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={760} maxWidth={1280}>
          <div className="juno-walking absolute w-full max-w-[360px] top-90 left-1/2 transform -translate-x-1/2 hover:brightness-95">
            <JunoWalking />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={320} maxWidth={759}>
          <div className="absolute w-full max-w-[360px] top-60 scale-70 left-1/2 transform -translate-x-1/2 hover:brightness-95">
            <JunoWalking />
          </div>
        </MediaQuery>

        {/* =================== GO DOWN ICON =================== */}
        <MediaQuery minWidth={1280}>
          <div
            onClick={goDown}
            className="absolute animate-bounce bottom-[2rem] left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-105"
          >
            <KeyboardArrowDownIcon
              sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
            />
          </div>
        </MediaQuery>
      </section>
    </>
  );
}
