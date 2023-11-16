import React from "react";
import "./display.css"; // Import your CSS file for styling

const WeatherDisplay = ({ weatherData, loading }) => {
  if (loading) {
    // Display the loader while data is being fetched
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  if (!weatherData) {
    return null; // Don't render anything if data is not available yet
  }

  const { current, location } = weatherData;

  return (
    <div className="mt-4 animate__animated animate__fadeIn">
      <h2 className="mb-4 text-primary">
        Weather Information: {location.name}, {location.region},{" "}
        {location.country}
      </h2>
      <div className="weather-info bg-light p-4 rounded shadow">
        <div className="row">
          <div className="col-md-6 mb-0">
            <p className="temperature mb-0 fs-4">
              Temperature: {current.temp_c}°C / {current.temp_f}°F
            </p>
            <p className="fs-5">Condition: {current.condition.text}</p>
            <img
              src={`https:${current.condition.icon}`}
              alt={current.condition.text}
              className="img-fluid d-block"
            />
            <p className="fs-5">
              Feels Like: {current.feelslike_c}°C / {current.feelslike_f}°F
            </p>
            <p className="fs-5">
              Visibility: {current.vis_km} km / {current.vis_miles} miles
            </p>
            <p className="fs-5">UV Index: {current.uv}</p>
          </div>
          <div className="col-md-6">
            <p className="fs-5">Last Updated: {current.last_updated}</p>
            <p className="fs-5">Wind Speed: {current.wind_kph} km/h</p>
            <p className="fs-5">Wind Direction: {current.wind_dir}</p>
            <p className="fs-5">Pressure: {current.pressure_mb} mb</p>
            <p className="fs-5">Humidity: {current.humidity}%</p>
            <p className="fs-5">Gust Speed: {current.gust_kph} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
