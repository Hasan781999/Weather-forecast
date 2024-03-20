import React, { useState } from "react";
import "./Weatherstyle.css"

const Weather = () => {
  const obj = {
    key: "55f5e7b68a91988ed7d8122c3552b1bc",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };
  const [Search, setSeaech] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function locSearch() {
    const url = `${obj.base}?q=${Search}&appid=${obj.key}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  }
  return (
    <div className="weather-container">
      <div className="input-container">
        <input
          type="text"
          value={Search}
          onChange={(e) => setSeaech(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={locSearch}>Search</button>
      </div>
      {weatherData && (
        <div className="weather-info">
          <h2>Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} K</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
