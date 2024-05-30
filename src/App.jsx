//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='content'>
      <nav className='navbar'>
        <p className='pageTitle'>California Card Games Guide</p>
      </nav>
      <main className='contentContainer'>
        <div className='gameContainer'><div className='gameName'>Ez Baccarat</div></div>
        <div className='gameContainer'><div className='gameName'>BlackJack</div></div>
        <div className='gameContainer'><div className='gameName'>Three Card Poker</div></div>
        <div className='gameContainer'><div className='gameName'>Crazy 4 Poker</div></div>
        <div className='gameContainer'><div className='gameName'>Ultimate Texas Hold &apos;em</div></div>
        <div className='gameContainer'><div className='gameName'>Pai Gow Poker</div></div>
        <div className='gameContainer'><div className='gameName'>Mississippi Stud</div></div>
      </main>
    </div>
  )
}

export default App
