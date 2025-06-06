import React from 'react';
import BlueSquares from '../../../Components/BlueSquares/BlueSquares.jsx';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './GameShow.css'
const goDown = () => {
  const nextSection = document.getElementById('DevLog');

  if (nextSection) {
    nextSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    console.warn("Elemento com id 'DevLog' não encontrado para rolagem.");
  }
};

export default function GameShow({ id }) {
  return (
    <section id={id} className= "flex flex-row">
      <div className="w-1/2 title">
          <h1 className="hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg">
            Game <br />
            <span className="hero-color-diff">Title</span> <br />
          </h1>
          <p className="hover:scale-105 hover:brightness-95 transition-all duration-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi laborum nostrum quo voluptates ex voluptate quam rerum itaque deleniti, expedita nobis temporibus ullam, dolores id sapiente! Voluptatum nulla explicabo corporis non eligendi ullam nihil officiis libero sint earum vero id blanditiis repudiandae quod commodi at, voluptatem deserunt quam. Facilis odit ipsam esse, ex pariatur libero ratione minus quis et nam qui! Esse aspernatur ipsa fugit, reprehenderit omnis quidem eius!
          </p>
          <Button className ="left-6"
            sx={{
              backgroundColor: 'var(--lapis-lazuli)',
              '&:hover': { backgroundColor: 'var(--coral-pink)' },
              fontFamily: 'Baloo',
            }}
            variant="contained"
          >
            ITCH.IO
          </Button>
    </div>
     <div className="w-1/2 flex items-center justify-end">
        <img
          src="src/assets/imgs/Game.gif"
          alt="Imagem do jogo Explon't..."
          className="hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg hover:rotate-1  rounded-3xl "
        />
      </div>
   <div
          onClick={goDown}
          className="absolute animate-bounce top-[175rem] left-1/2 cursor-pointer hover:scale-105">
          <KeyboardArrowDownIcon
            sx={{ color: "var(--coral-pink)", fontSize: "5rem" }}
          />
        </div>
    </section>
  );
}