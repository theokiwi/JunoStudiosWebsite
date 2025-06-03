import React from 'react'
import './Header.css'
export default function Header() {
  return (
    <>
        <section className="header shadow flex">
          <section className="header-logo flex">
            <img src="src/assets/imgs/logo.png" className="header-logo-img text-shadow-md  hover:scale-110 transition-all duration-300 max-h-9/12"></img>
            <div className="header-logo-text">
            <span className="block text-shadow-xl text-3xl md:text-4xl font-extrabold leading-none hover:scale-105 hover:brightness-95 transition-all duration-300">Juno</span>
            <span className="block text-shadow-xl text-3xl md:text-4xl font-extrabold leading-none hover:scale-105 hover:brightness-95 transition-all duration-300">Studios</span>
            </div>
          </section>
          <section className="header-navbar">
            <nav>
                <ul>
                  <li><a className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95" href="#">Games</a></li>
                  <li><a className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95" href="#">Devlog</a></li>
                  <li><a className="text-2xl hover:scale-105 transition-all duration-300 hover:brightness-95" href="#">About</a></li>
                </ul>
            </nav>
          </section>
        </section>
    </>
  )
}
