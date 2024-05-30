import { Link } from "react-router-dom";

function CalCards() {

  const calGames = ['Ez Baccarat', 'BlackJack', 'Three Card Poker', 'Crazy 4 Poker', "Ultimate Texas Hold 'em", 'Pai Gow Poker', 'Mississippi Stud']


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
            <div key={index} className='gameContainer'><div className='gameName'>{item}</div></div>
          ))}
        </div>
      </div>
      </>
    )
}

export { CalCards };