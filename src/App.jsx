import React, { useState, useEffect, Fragment } from 'react';
import WeatherDetails from './components/WeatherDetails';
import { StApp, GlobalStyle } from './style-app';
import SearchBox from './components/SearchBox';
import Header from './components/Header';

const getRandomInteger = () => Math.floor(100000 + Math.random() * 900000);

function App() {
  const [cities, setCities] = useState([]);
  const [arrCities, setArrCities] = useState(['Beograd']);
  console.log(cities);

  const url = (el) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${el}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
  };

  const getCityWeather = async (arrCities) => {
    const arrCitiesData = await Promise.all(
      arrCities.map(async (city) => {
        const fetchCityWeather = await fetch(url(city));
        if (!fetchCityWeather.ok) {
          return {
            error: `'${fetchCityWeather.url.slice(50, -39)}' not found!`,
            id: getRandomInteger(),
          };
        }
        return await fetchCityWeather.json();
      })
    );
    setCities(arrCitiesData);
  };

  useEffect(() => {
    getCityWeather(arrCities);
  }, [arrCities]);

  return (
    <Fragment>
      <GlobalStyle />
      <StApp>
        <Header setArrCities={setArrCities} />
        <main>
          <WeatherDetails cities={cities} />
          <SearchBox setCities={setCities} cities={cities} />
        </main>
      </StApp>
    </Fragment>
  );
}

export default App;
