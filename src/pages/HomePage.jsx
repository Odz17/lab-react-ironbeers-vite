import { Link } from 'react-router-dom';
import '../App.css';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to IronBeers App!</h2>
      <div className="button-container">
        <Link to="/beers" className="home-button">
          <img src={beers} alt="All Beers" />
          <p className="description">All Beers</p>
        </Link>
        <Link to="/random-beer" className="home-button">
          <img src={randomBeer} alt="Random Beer" />
          <p className="description">Random Beer</p>
        </Link>
        <Link to="/new-beer" className="home-button">
          <img src={newBeer} alt="New Beer" />
          <p className="description">New Beer</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
