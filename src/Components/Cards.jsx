import React from 'react';
import '../App.css';

const Cards = ({ forecast, location }) => {
  return (
    <div className="weather-cards">
      <h2>Weather Forecast for {location.name}, {location.country}</h2>
      {forecast.map((day) => (
        <div key={day.date} className="card">
          <h3>{day.date}</h3>
          <p>Condition: {day.day.condition.text}</p>
          <p>Max Temp: {day.day.maxtemp_c}°C</p>
          <p>Min Temp: {day.day.mintemp_c}°C</p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
