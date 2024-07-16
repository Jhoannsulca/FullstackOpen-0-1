import React, { useState, useEffect } from 'react';
import climaService from '../services/countries'


const WeatherApp = ({ country }) => {
  const [weatherData, setWeatherData] = useState(''); // State to store weather data
  
  // Function to fetch weather data when country changes
  useEffect(() => {
    climaService
      .getClimaCapital(country.capital)
      .then(initialClima => {
        setWeatherData(initialClima)
      })
  }, [country])


  return (
    <div>

        {weatherData && (
        <div className="weather-info">
            <h2><b>Weather in {country.capital}</b></h2>
            <p>Temperature: {(JSON.stringify(weatherData.main.temp)- 273.15).toFixed(2)} °C</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="icon" />
            <p>Wind: {(JSON.stringify(weatherData.wind.speed))} m/s</p>
        </div>
        )}
    </div>
  );
};

export default WeatherApp;
