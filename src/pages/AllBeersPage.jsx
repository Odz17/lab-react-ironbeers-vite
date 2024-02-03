import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        if (searchQuery) {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
          );
          setBeers(response.data);
        } else {
          const response = await axios.get(
            "https://ih-beers-api2.herokuapp.com/beers"
          );
          setBeers(response.data);
        }
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  return (
    <div className="all-beers-page">
      <h2>All Beers</h2>

      <input
        type="text"
        placeholder="Search beers..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul>
        {beers.map((beer) => (
          <li key={beer._id} className="beer-item">
            <Link to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                alt={beer.name}
                className="beer-image"
              />
            </Link>
            <div className="beer-details">
              <h3 className="beer-title">{beer.name}</h3>
              <p className="beer-description">{beer.tagline}</p>
              <p className="beer-contributor">{`Contributed by: ${beer.contributed_by}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
