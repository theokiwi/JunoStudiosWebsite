import React from "react";
import Hero from "./Components/Common/Hero/Hero.jsx";
import Header from "./Components/Common/Header/Header.jsx";
import WhoAmI from "./Components/Common/WhoAmI/WhoAmI.jsx";

export default function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Hero/>
        <WhoAmI id = "WhoAmI" />
      </main>
      <footer></footer>
    </>
  );
}
