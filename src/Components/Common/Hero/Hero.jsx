import React from 'react'
import BlueSquares from '../../../Components/BlueSquares/BlueSquares.jsx'
import JunoWalking from '../../../Components/JunoWalking/JunoWalking.jsx'
import Button from '@mui/material/Button';
import "./Hero.css";

export default function Hero() {
  return (
    <>
    <section className = "hero flex">
        <div className = "hero-titles">
          <h1 className = "hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg">
            Heartfelt <br />
            <span className="hero-color-diff">Indie</span> <br />
            Games
          </h1>
          <p className ="hover:scale-105 hover:brightness-95 transition-all duration-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore numquam dolore laudantium, odio libero nulla laboriosam architecto ut quidem quia alias. Hic consectetur voluptatibus vero nostrum doloribus eos pariatur magni.
          </p>
        </div>
        <div className = "absolute top-0 -z-20 w-screen bluesquares-div">
          <BlueSquares color ="var(--lapis-lazuli)"/>
        </div>
        <div className = "hover:brightness-95 juno-walking">
            <JunoWalking/>
        </div>
        <div className = "absolute bottom-[7rem] left-6 hover:scale-105">
            <Button variant="contained">Contained</Button>
        </div>

    </section>
    </>
  )
}
