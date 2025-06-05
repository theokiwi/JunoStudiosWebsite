import React from 'react'
import Asterisk from '../../../Components/BlueAsterisk/BlueAsterisk.jsx'
import Ball from '../../Ball/Ball.jsx'
import './WhoAmI.css'

export default function WhoAmI({id}) {
  return (
    <>
      <section id = {id}>
        <div className="relative">
        <div className = "-z-20">
              <Asterisk color ="var(--lapis-lazuli)"/>
        </div>
         <div className="absolute -left-42 scale-[0.8] top-[28%] z-10 hover:brightness-95 transition-all"> 
            <Ball color="White" size={500} />
          </div>
          <div className >
          <div className="animated-balls absolute left-60 scale-[0.4] top-[26%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="White" size={200} />
          </div>
          <div className="animated-balls absolute left-60 scale-[0.4] top-[36%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="var(--melon)" size={200} />
          </div>
           <div className="animated-balls absolute left-60 scale-[0.4] top-[46%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="var(--indigo-dye)" size={200} />
          </div>
           <div className="animated-balls  absolute left-60 scale-[0.4] top-[56%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="var(--marian-blue)" size={200} />
          </div>
          </div>
        <div>
          <img className = "z-11 hover:brightness-95 transition-all duration-300 -left-60 top-[22%] scale-[0.5] hover:scale-60 absolute rounded-full" src="src/assets/imgs/theo.jpeg"></img>
        </div>
        <div className ="absolute leading-40 text-right top-28 right-10 text-[12rem] hover:scale-105 hover:brightness-95 transition-all duration-300 text-shadow-lg">
           <h1 className = "text-(--melon)">
            Who <br />
            <span className="text-(--indigo-dye)">Am</span> <br />
            I
          </h1>
        </div>
         <div className = "absolute top-155 left-310 text-[1.2rem] leading-10 w-1/3 hover:scale-105 hover:brightness-95 transition-all duration-300">
              <p className="text-(--melon) text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in vero sed earum recusandae magnam fuga, corrupti dolorem eligendi repellat velit quis fugit similique aut eaque laborum quibusdam iste consectetur. Debitis nemo quidem praesentium minus dolorum odio tenetur provident repellendus dolorem architecto nisi perferendis, ipsam officia  </p>
          </div>
        </div>
       
      </section>
    </>
  )
}
