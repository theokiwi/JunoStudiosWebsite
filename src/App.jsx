import React from "react";
import Hero from "./Components/Common/Hero/Hero.jsx";
import Header from "./Components/Common/Header/Header.jsx";

export default function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Hero/>
      </main>
      <footer></footer>
    </>
  );
}
