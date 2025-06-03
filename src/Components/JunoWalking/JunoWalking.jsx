import React from 'react'
import './JunoWalking.css'
const gifUrl = 'src/assets/imgs/JunoWalking.gif';

export default function JunoWalking() {
  return (
   <img
      src={gifUrl}
      alt="Mascote da marca JunoStudios (um tatu azul) andando em uma animação em loop"
      width="1140" 
      height="740"
      loading="lazy"
      className="juno-gif duration-300
                 ease-in-out
                 hover:scale-110"
    />
  );
}
