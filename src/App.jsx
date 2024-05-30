//import { useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <nav className='navbar'>
        <h1 className='pageTitle'>Casino Card Games Guide</h1>
      </nav>
      <main className="main">
        <div>
          <Link to="cards">
            <div className="gamesLink">California Games</div>
          </Link>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae doloremque nam qui. Aut in cupiditate modi eligendi dolores! Ipsum saepe aperiam aspernatur culpa officiis rerum temporibus dolorum minus odio vero.
          </h3>
        </div>
        <div>
          <Link to="poker">
            <div className="gamesLink">Poker Games</div>
          </Link>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad reiciendis eaque ullam neque architecto, nemo tempore saepe? Expedita, rerum enim harum fuga quidem, alias eos quaerat esse ex, necessitatibus blanditiis.
          </h3>
        </div>
      </main>
    </>
  )
}

export default App
