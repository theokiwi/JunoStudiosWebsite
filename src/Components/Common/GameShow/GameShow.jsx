import React from 'react'
import BlueSquares from '../../../Components/BlueSquares/BlueSquares.jsx'
import Button from '@mui/material/Button';

export default function GameShow({id}) {
  return (
    <div>
        <section id = {id} className = "GameShow">
        <div className = "hero-titles">
          <div className = "absolute w-[50rem] top-[142rem]">
          <h1 className = "hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg">
            Game <br />
            <span className="hero-color-diff">Title</span> <br />
          </h1>
          <p className ="hover:scale-105 hover:brightness-95 transition-all duration-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi laborum nostrum quo voluptates ex voluptate quam rerum itaque deleniti, expedita nobis temporibus ullam, dolores id sapiente! Voluptatum nulla explicabo corporis non eligendi ullam nihil officiis libero sint earum vero id blanditiis repudiandae quod commodi at, voluptatem deserunt quam. Facilis odit ipsam esse, ex pariatur libero ratione minus quis et nam qui! Esse aspernatur ipsa fugit, reprehenderit omnis quidem eius!
          </p>
          <div className = "absolute top-[35rem] left-6 hover:scale-105">
            <Button sx={{backgroundColor: 'var(--lapis-lazuli)', '&:hover': {backgroundColor: 'var(--coral-pink)', },fontFamily: 'Baloo',}}variant="contained">ITCH.IO</Button>
        </div>
        </div>
        </div>
        <div className = "absolute top-420 -z-20 left-120 w-screen">
            <BlueSquares viewBox = "450 -500 2000 1600"color ="var(--lapis-lazuli)"/>
        </div>
        <div className = "absolute top-430 scale-90 -z-15 left-120 w-screen">
        <img
        src="src/assets/imgs/Game.gif"
        alt="Imagem do jogo Explon't, um jogo de pixel-art no qual um sapo está pulando em um cenário de plataforma em uma floresta"
        className="absolute inset-0 left-[50rem] top-[42rem] scale-180 rounded-4xl -rotate-20 hover:scale-190 hover:brightness-95 transition-all duration-300"/>
        </div>
        <div  className = "absolute animate-bounce bottom-[2rem] left-1/2 cursor-pointer hover:scale-105">
        </div>
    </section>
    </div>
  )
}
