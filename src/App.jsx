import React, { useState, useEffect, Fragment } from 'react';
import WeatherDetails from './components/WeatherDetails';
import { StApp, GlobalStyle } from './style-app';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { getCityWeather } from './api/api';

function App() {
  const [cities, setCities] = useState([]);
  const [arrCities, setArrCities] = useState(['Beograd']);
  console.log(cities);

  useEffect(() => {
    getCityWeather(arrCities, setCities);
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
