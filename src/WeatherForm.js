import React, { useState } from "react";
import axios from "axios";
import "./form.css";

const WeatherForm = ({ setWeatherData, setLoading }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: "514b2813e3524f92950112512231611",
            q: city,
          },
        }
      );

      setWeatherData(response.data);
      setError("");
      setSuccess("Weather information successfully fetched!");
      // Auto-dismiss success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);
      setCity("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error.message);
      } else {
        setError("An error occurred while fetching weather data.");
      }
      setSuccess("");
      // Auto-dismiss error message after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form animate__animated animate__fadeInDown">
      <div className="mb-3">
        <label htmlFor="cityInput" className="form-label">
          Enter City:
        </label>
        <input
          type="text"
          className="form-control"
          id="cityInput"
          placeholder="E.g., New York"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Get Weather
      </button>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success mt-3" role="alert">
          {success}
        </div>
      )}
    </form>
  );
};

export default WeatherForm;
