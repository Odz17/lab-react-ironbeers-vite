import { Link } from 'react-router-dom';
import homeImage from '../assets/home-icon.png'; 
import "../App.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={homeImage} alt="Home" className="home-icon" />
      </Link>
    </nav>
  );
}

export default Navbar;
