import './style-app.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import ListCities from './components/ListCities';

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

function App() {
  const [cities, setCities] = useState([]);
  const [arrCities, setArrCities] = useState([]);
  console.log(cities);

  const getCityWeather = async (arrCities) => {
    const arrCitiesData = await Promise.all(
      arrCities.map(async (city) => {
        const fetchCityWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
        );
        if (!fetchCityWeather.ok) {
          return {
            error: `'${fetchCityWeather.url.slice(50, -39)}' not found!`,
            id: getRandomInteger(),
          };
        }
        const data = await fetchCityWeather.json();
        return data;
      })
    );
    setCities(arrCitiesData);
  };

  useEffect(() => {
    getCityWeather(arrCities);
  }, [arrCities]);

  return (
    <div className="style-app">
      <header>
        <h1>Current Weather</h1>
        <Form setArrCities={setArrCities} />
      </header>

      <main>
        <section>
          <Weather cities={cities} />
        </section>
        <aside>
          <ListCities setCities={setCities} cities={cities} />
        </aside>
      </main>
    </div>
  );
}

export default App;
