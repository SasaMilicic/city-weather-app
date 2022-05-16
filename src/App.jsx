import React, { useState, useEffect, Fragment } from 'react';
import WeatherDetails from './components/WeatherDetails';
import { StApp, GlobalStyle } from './style-app';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { getCityWeather } from './api/api';

function App() {
  const [cities, setCities] = useState([]);
  const [arrCities, setArrCities] = useState(['Backo Dobro Polje']);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    getCityWeather(arrCities, setCities, setFlags);
  }, [arrCities]);

  return (
    <Fragment>
      <GlobalStyle />
      <StApp>
        <Header setArrCities={setArrCities} />
        <main>
          <WeatherDetails cities={cities} flags={flags} />
          <SearchBox setCities={setCities} cities={cities} />
        </main>
      </StApp>
    </Fragment>
  );
}

export default App;
