import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // API key and endpoint
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const location = "india";
  const days = 4;

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=${days}&aqi=no&alerts=no`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setWeatherData(data); // Set weather data in state
      } catch (error) {
        setError(error.message); // Set error if any
      }
    };

    fetchWeatherData();
  }, [apiKey, location, days]);

  return (
    <>
      <div className="app-container">
        {error && <p>Error: {error}</p>}
        {weatherData ? (
          <Cards forecast={weatherData.forecast.forecastday} location={weatherData.location} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default App;
