import { useState } from "react";
import { Link } from "react-router-dom";

function CalCards() {
  const [clickedIndex, setClickedIndex] = useState(null)
  const calGames = ['Ez Baccarat', 'BlackJack', 'Three Card Poker', 'Crazy 4 Poker', "Ultimate Texas Hold 'em", 'Pai Gow Poker', 'Mississippi Stud']

  const handleClick = (index) => {
    setClickedIndex(index)
  }
  
  const handleBackClick = (event) => {
    event.stopPropagation()
    setClickedIndex(null);
  }

    return (
      <>
        <nav className='navbar'>
        <h1 className='pageTitle'>
        <Link to='/'>California Card Games Guide</Link>
        </h1>
      </nav>
        <div className='content'>
        <div className='contentContainer'>
          {calGames.map((item, index) => (
            <div key={index} onClick={() => handleClick(index)} className={`gameContainer ${clickedIndex === index ? 'flip' : ''}`}>
              <div className='gameName'>
                {item}
                </div>
                <div className="back">
                  <h3>{item}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, porro maxime? Odio nostrum consequatur magni vel voluptate veniam veritatis tenetur voluptas reiciendis, commodi tempora hic sequi eos quibusdam, pariatur harum!</p>
                  <button>Learn more</button>
                  <button onClick={(event) => handleBackClick(event)}>close</button>
                </div>
            </div>
          ))}
        </div>
      </div>
      </>
    )
}

export { CalCards };