import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function RandomBeerPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random beer details:", error);
      });
  }, []);

  if (!randomBeer) {
    return <p>Loading...</p>;
  }
  return (
    <div className="beer-details-page">
      <div className="beer-details">
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.tagline}</p>
        <p>
          <strong>First Brewed:</strong> {randomBeer.first_brewed}
        </p>
        <p>
          <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}
        </p>
        <p>
          <strong>Description:</strong>
        </p>
        <div className="beer-description">{randomBeer.description}</div>
        <p>
          <strong>Contributed by:</strong> {randomBeer.contributed_by}
        </p>
      </div>
      <img
        src={randomBeer.image_url}
        alt={randomBeer.name}
        className="beer-image"
      />
    </div>
  );
}

export default RandomBeerPage;
