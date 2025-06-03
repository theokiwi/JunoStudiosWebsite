import React from 'react'
import Asterisk from '../../../Components/BlueAsterisk/BlueAsterisk.jsx'
import Ball from '../../Ball/Ball.jsx'

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
               <Ball color="red" size={200} />
          </div>
          <div className="animated-balls absolute left-60 scale-[0.4] top-[36%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="red" size={200} />
          </div>
           <div className="animated-balls absolute left-60 scale-[0.4] top-[46%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="red" size={200} />
          </div>
           <div className="animated-balls  absolute left-60 scale-[0.4] top-[56%] z-10 hover:brightness-95 transition-all hover:scale-55">
               <Ball color="red" size={200} />
          </div>
          </div>
        <div>
          <img className = "z-11 hover:brightness-95 transition-all duration-300 -left-60 top-[22%] scale-[0.5] absolute rounded-full" src="src/assets/imgs/theo.jpeg"></img>
        </div>
        </div>
      </section>
    </>
  )
}
