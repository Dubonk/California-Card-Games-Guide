import { Link } from "react-router-dom";

function PokerGames() {
    const pokerGames = ["Texas Hold 'Em", '7-Card Stud', 'Omaha', 'Mexican Poker'];

    return (
        <>
          <nav className='navbar'>
          <h1 className='pageTitle'>
          <Link to='/'>California Card Games Guide</Link>
          </h1>
        </nav>
          <div className='content'>
          <div className='contentContainer'>
            {pokerGames.map((item, index) => (
              <div key={index} className='gameContainer'><div className='gameName'>{item}</div></div>
            ))}
          </div>
        </div>
        </>
      )
}

export { PokerGames }