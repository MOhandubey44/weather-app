import React, { useState } from 'react';
import Header from './Header';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <Header />
      <WeatherForm setLoading={setLoading} setWeatherData={setWeatherData} />
      <WeatherDisplay weatherData={weatherData} loading={loading}/>
    </div>
  );
}

export default App;
