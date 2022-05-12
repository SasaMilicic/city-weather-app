import './style/style-app.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [cities, setCities] = useState([]);
  const [arrCities, setArrCities] = useState([]);

  const getCityWeather = async (arrCities) => {
    const arrCitiesData = await Promise.all(
      arrCities.map(async (city) => {
        const fetchCityWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );
        const data = await fetchCityWeather.json();
        // console.log(data);
        return data;
      })
    );
    setCities(arrCitiesData);
    // console.log(arrCitiesData);
  };

  useEffect(() => {
    getCityWeather(arrCities);
  }, [arrCities]);

  return (
    <div className="style-app">
      <h1>Current Weather</h1>
      <Form setArrCities={setArrCities} />
      <Weather cities={cities} />
    </div>
  );
}

export default App;
