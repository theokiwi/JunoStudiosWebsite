import React from "react";
import Hero from "./Components/Common/Hero/Hero.jsx";
import Header from "./Components/Common/Header/Header.jsx";
import WhoAmI from "./Components/Common/WhoAmI/WhoAmI.jsx";
import GameShow from "./Components/Common/GameShow/GameShow.jsx"
import DevLog from "./Components/Common/DevLog/DevLog.jsx"

export default function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <div className = "flex flex-col gap-8">
        <Hero/>
        <WhoAmI id = "WhoAmI" />
        <GameShow id = "GameShow" />
        <DevLog id = "DevLog"/>
        </div>
      </main> 
      <footer></footer>
    </>
  );
}
