import React, { useState, useEffect, Fragment } from 'react';
import WeatherDetails from './components/WeatherDetails';
import { StApp, GlobalStyle } from './style-app';
import SearchBox from './components/SearchBox';
import Header from './components/Header';
import { getWeathersAndFlags } from './api/api';

function App() {
  const [cityNames, setCityNames] = useState(['Backo Dobro Polje']);
  const [cityWeathers, setCityWeathers] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    getWeathersAndFlags(cityNames, setCityWeathers, setFlags);
  }, [cityNames]);

  return (
    <Fragment>
      <GlobalStyle />
      <StApp>
        <Header setCityNames={setCityNames} />
        <main>
          <WeatherDetails cityWeathers={cityWeathers} flags={flags} />
          <SearchBox
            setCityWeathers={setCityWeathers}
            cityWeathers={cityWeathers}
          />
        </main>
      </StApp>
    </Fragment>
  );
}

export default App;
