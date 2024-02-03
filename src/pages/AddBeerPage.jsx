import  { useState } from "react";
import axios from "axios";
import { useLocation, Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        navigate("/beers")
      })
      .catch((error) => {
        console.error("Error creating new beer:", error);
      });
  };

  return (
    <div className="add-beer-page">
      <h2>Add New Beer</h2>
      <form onSubmit={handleSubmit} className="beer-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            id="first_brewed"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            id="brewers_tips"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            id="attenuation_level"
            name="attenuation_level"
            value={formData.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            id="contributed_by"
            name="contributed_by"
            value={formData.contributed_by}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="add-beer-button">
          Add Beer
        </button>
        <Link to="/beers">Go to Beers</Link>
      </form>
    </div>
  );
}

export default AddBeerPage;
